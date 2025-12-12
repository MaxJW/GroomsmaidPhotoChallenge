import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from './config';

/**
 * Upload an image file to Cloudinary using unsigned upload preset
 * This is the correct approach for browser-based uploads (client-side)
 * @param {File} file - The image file to upload
 * @param {string} challengeId - The challenge ID this image is for
 * @param {string} teamName - The team name submitting the image
 * @returns {Promise<string>} The public URL of the uploaded image
 */
export async function uploadImage(
    file: File,
    challengeId: string,
    teamName: string,
): Promise<string> {
    // Compress image before upload to reduce costs
    const compressedFile = await compressImage(file, 0.8, 1920);

    const formData = new FormData();
    formData.append('file', compressedFile);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'photo-challenge');
    formData.append('public_id', `${challengeId}_${teamName}_${Date.now()}`);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            },
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Upload failed: ${response.statusText}. ${errorText}`);
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw error;
    }
}

/**
 * Generate an optimized Cloudinary URL for image delivery
 * Applies auto-format and auto-quality for best performance
 * @param {string} publicId - The public_id of the image in Cloudinary
 * @param {object} options - Optional transformation parameters
 * @returns {string} Optimized image URL
 */
export function getOptimizedImageUrl(
    publicId: string,
    options: {
        width?: number;
        height?: number;
        crop?: string;
        quality?: string;
        format?: string;
    } = {},
): string {
    const params = new URLSearchParams();

    // Default optimizations
    if (!options.quality) params.append('q', 'auto');
    if (!options.format) params.append('f', 'auto');

    // Custom options
    if (options.width) params.append('w', options.width.toString());
    if (options.height) params.append('h', options.height.toString());
    if (options.crop) params.append('c', options.crop);
    if (options.quality) params.append('q', options.quality);
    if (options.format) params.append('f', options.format);

    const transformString = params.toString() ? `/${params.toString()}` : '';
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload${transformString}/${publicId}`;
}

/**
 * Compress an image file using Canvas API
 * @param {File} file - The image file to compress
 * @param {number} quality - Compression quality (0-1)
 * @param {number} maxWidth - Maximum width in pixels
 * @returns {Promise<File>} Compressed image file
 */
function compressImage(file: File, quality: number = 0.8, maxWidth: number = 1920): Promise<File> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Resize if needed
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    reject(new Error('Could not get canvas context'));
                    return;
                }
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const compressedFile = new File([blob], file.name, {
                                type: file.type,
                                lastModified: Date.now(),
                            });
                            resolve(compressedFile);
                        } else {
                            reject(new Error('Compression failed'));
                        }
                    },
                    file.type,
                    quality,
                );
            };
            img.onerror = reject;
            if (e.target?.result) {
                img.src = e.target.result as string;
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
