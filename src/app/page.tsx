'use client';

import {useState, useEffect} from 'react';

const generateImageUrls = (): string[] => {
  const imageUrls: string[] = [];
  for (let i = 1; i <= 600; i++) {
    const id = String(i).padStart(3, '0');
    imageUrls.push(`https://doeresults.gitam.edu/photo/img.aspx?id=VU21CSEN0300${id}`);
  }
  return imageUrls;
};

const PhotoGrid = () => {
  const [imageUrls] = useState(generateImageUrls());
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const shuffleImages = () => {
      setShuffledImages(prevImages => {
        const newImages = [...prevImages];
        for (let i = newImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
        }
        return newImages;
      });
    };

    if (loadedImages.length > 0) {
      setShuffledImages([...loadedImages]);
      timeoutId = setInterval(shuffleImages, 5000);
    }

    return () => {
      clearInterval(timeoutId);
    };
  }, [loadedImages]);

  useEffect(() => {
    const loadAllImages = async () => {
      const loaded: string[] = [];
      const failed: string[] = [];

      await Promise.all(
        imageUrls.map(async (url) => {
          try {
            await new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = () => {
                loaded.push(url);
                resolve();
              };
              img.onerror = () => {
                failed.push(url);
                resolve(); // Resolve instead of reject so Promise.all doesn't fail
              };
            });
          } catch (e) {
            failed.push(url);
          }
        })
      );
      setLoadedImages(loaded);
      setFailedImages(failed);
      setLoading(false);
    };

    loadAllImages();
  }, [imageUrls]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-6">
      <h1 className="text-3xl font-bold mb-8 text-foreground">AIML Batch Photo Wall</h1>

      {loading && (
        <div className="spinner">
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {shuffledImages.map((imageUrl) => (
          <div key={imageUrl} className="relative rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={imageUrl}
              alt={`AIML Student`}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
