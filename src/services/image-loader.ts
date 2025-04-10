/**
 * Represents the result of attempting to load an image.
 */
export interface ImageLoadResult {
  /**
   * Indicates whether the image loaded successfully.
   */
  success: boolean;
  /**
   * The URL of the image, if successfully loaded.
   */
  imageUrl?: string;
  /**
   * An error message, if the image failed to load.
   */
  error?: string;
}

/**
 * Asynchronously attempts to load an image from a given URL.
 * @param imageUrl The URL of the image to load.
 * @returns A promise that resolves to an ImageLoadResult object.
 */
export async function loadImage(imageUrl: string): Promise<ImageLoadResult> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      resolve({ success: true, imageUrl: imageUrl });
    };

    img.onerror = (error) => {
      resolve({ success: false, error: `Failed to load image from ${imageUrl}: ${error}` });
    };
  });
}


    