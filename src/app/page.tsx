'use client';

import {useState, useEffect, useRef, useCallback} from 'react';
import Image from 'next/image';

const specificImageIds = [
  "VU21CSEN0300001",
  "VU21CSEN0300002",
  "VU21CSEN0300003",
  "VU21CSEN0300004",
  "VU21CSEN0300005",
  "VU21CSEN0300006",
  "VU21CSEN0300007",
  "VU21CSEN0300008",
  "VU21CSEN0300009",
  "VU21CSEN0300010",
  "VU21CSEN0300011",
  "VU21CSEN0300012",
  "VU21CSEN0300013",
  "VU21CSEN0300014",
  "VU21CSEN0300015",
  "VU21CSEN0300016",
  "VU21CSEN0300017",
  "VU21CSEN0300018",
  "VU21CSEN0300019",
  "VU21CSEN0300021",
  "VU21CSEN0300022",
  "VU21CSEN0300023",
  "VU21CSEN0300024",
  "VU21CSEN0300025",
  "VU21CSEN0300026",
  "VU21CSEN0300027",
  "VU21CSEN0300028",
  "VU21CSEN0300029",
  "VU21CSEN0300030",
  "VU21CSEN0300031",
  "VU21CSEN0300032",
  "VU21CSEN0300033",
  "VU21CSEN0300034",
  "VU21CSEN0300035",
  "VU21CSEN0300036",
  "VU21CSEN0300037",
  "VU21CSEN0300038",
  "VU21CSEN0300039",
  "VU21CSEN0300040",
  "VU21CSEN0300041",
  "VU21CSEN0300042",
  "VU21CSEN0300043",
  "VU21CSEN0300044",
  "VU21CSEN0300045",
  "VU21CSEN0300046",
  "VU21CSEN0300047",
  "VU21CSEN0300048",
  "VU21CSEN0300049",
  "VU21CSEN0300050",
  "VU21CSEN0300051",
  "VU21CSEN0300052",
  "VU21CSEN0300053",
  "VU21CSEN0300054",
  "VU21CSEN0300055",
  "VU21CSEN0300056",
  "VU21CSEN0300057",
  "VU21CSEN0300058",
  "VU21CSEN0300059",
  "VU21CSEN0300060",
  "VU21CSEN0300061",
  "VU21CSEN0300062",
  "VU21CSEN0300063",
  "VU21CSEN0300064",
  "VU21CSEN0300065",
  "VU21CSEN0300066",
  "VU21CSEN0300067",
  "VU21CSEN0300068",
  "VU21CSEN0300069",
  "VU21CSEN0300070",
  "VU21CSEN0300071",
  "VU21CSEN0300072",
  "VU21CSEN0300073",
  "VU21CSEN0300074",
  "VU21CSEN0300075",
  "VU21CSEN0300076",
  "VU21CSEN0300078",
  "VU21CSEN0300079",
  "VU21CSEN0300080",
  "VU21CSEN0300081",
  "VU21CSEN0300082",
  "VU21CSEN0300083",
  "VU21CSEN0300084",
  "VU21CSEN0300085",
  "VU21CSEN0300087",
  "VU21CSEN0300088",
  "VU21CSEN0300089",
  "VU21CSEN0300090",
  "VU21CSEN0300091",
  "VU21CSEN0300092",
  "VU21CSEN0300094",
  "VU21CSEN0300095",
  "VU21CSEN0300096",
  "VU21CSEN0300097",
  "VU21CSEN0300098",
  "VU21CSEN0300099",
  "VU21CSEN0300100",
  "VU21CSEN0300101",
  "VU21CSEN0300102",
  "VU21CSEN0300103",
  "VU21CSEN0300104",
  "VU21CSEN0300105",
  "VU21CSEN0300106",
  "VU21CSEN0300107",
  "VU21CSEN0300108",
  "VU21CSEN0300109",
  "VU21CSEN0300110",
  "VU21CSEN0300111",
  "VU21CSEN0300112",
  "VU21CSEN0300113",
  "VU21CSEN0300114",
  "VU21CSEN0300115",
  "VU21CSEN0300116",
  "VU21CSEN0300117",
  "VU21CSEN0300118",
  "VU21CSEN0300119",
  "VU21CSEN0300120",
  "VU21CSEN0300121",
  "VU21CSEN0300122",
  "VU21CSEN0300123",
  "VU21CSEN0300124",
  "VU21CSEN0300125",
  "VU21CSEN0300126",
  "VU21CSEN0300127",
  "VU21CSEN0300128",
  "VU21CSEN0300129",
  "VU21CSEN0300130",
  "VU21CSEN0300131",
  "VU21CSEN0300132",
  "VU21CSEN0300254",
  "VU21CSEN0300271",
  "VU21CSEN0300272",
  "VU21CSEN0300273",
  "VU21CSEN0300275",
  "VU21CSEN0300276",
  "VU21CSEN0300277",
  "VU21CSEN0300278",
  "VU21CSEN0300279",
  "VU21CSEN0300280",
  "VU21CSEN0300309",
  "VU21CSEN0300310",
  "VU21CSEN0300311",
  "VU21CSEN0300314",
  "VU21CSEN0300316",
  "VU21CSEN0300317",
  "VU21CSEN0300318",
  "VU21CSEN0300320",
  "VU21CSEN0300325",
  "VU21CSEN0300329",
  "VU21CSEN0300336",
  "VU21CSEN0300337",
  "VU21CSEN0300340",
  "VU21CSEN0300341",
  "VU21CSEN0300342",
  "VU21CSEN0300343",
  "VU21CSEN0300344",
  "VU21CSEN0300345",
  "VU21CSEN0300347",
  "VU21CSEN0300349",
  "VU21CSEN0300355",
  "VU21CSEN0300356",
  "VU21CSEN0300358",
  "VU21CSEN0300359",
  "VU21CSEN0300360",
  "VU21CSEN0300361",
  "VU21CSEN0300362",
  "VU21CSEN0300366",
  "VU21CSEN0300368",
  "VU21CSEN0300372",
  "VU21CSEN0300375",
  "VU21CSEN0300376",
  "VU21CSEN0300378",
  "VU21CSEN0300379",
  "VU21CSEN0300383",
  "VU21CSEN0300396",
  "VU21CSEN0300398",
  "VU21CSEN0300400",
  "VU21CSEN0300403",
  "VU21CSEN0300405"
];

const PhotoGrid = () => {
  const [imageUrls] = useState(specificImageIds.map(id => `https://doeresults.gitam.edu/photo/img.aspx?id=${id}`));
  const [imageLoadResults, setImageLoadResults] = useState<(string | null)[]>([]);
  const [shuffledImageResults, setShuffledImageResults] = useState<(string | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const shuffleInterval = useRef<NodeJS.Timeout | null>(null);

  // Preload images and store their load results
  const preloadImages = useCallback(async () => {
    setLoading(true);
    const imagePromises = imageUrls.map(url =>
      new Promise<string | null>(resolve => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
      })
    );

    const results = await Promise.all(imagePromises);
    setImageLoadResults(results);
    setLoading(false);
  }, [imageUrls]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Shuffle images after they are loaded
  useEffect(() => {
    if (imageLoadResults.length > 0) {
      // Filter out null (failed) image URLs
      setShuffledImageResults([...imageLoadResults.filter(url => url !== null)]);
    }
  }, [imageLoadResults]);

  // Shuffle the images at a set interval
  useEffect(() => {
    const shuffleImages = () => {
      setShuffledImageResults(prevImages => {
        const validImages = [...prevImages];
        for (let i = validImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [validImages[i], validImages[j]] = [validImages[j], validImages[i]];
        }
        return validImages;
      });
    };

    if (imageLoadResults.length > 0) {
      shuffleInterval.current = setInterval(shuffleImages, 3000);
    }

    return () => {
      if (shuffleInterval.current) {
        clearInterval(shuffleInterval.current);
      }
    };
  }, [imageLoadResults]);


  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#141414] to-[#000000] overflow-hidden">
      {/* Subtle "We Are AIML 2025" banner */}
      <div className="absolute top-2 left-2">
        <span className="text-sm text-gray-500">We Are AIML 2025</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {loading ? (
          <div className="spinner">
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0.5">
            {shuffledImageResults.map((imageUrl, index) => (
              imageUrl && (
                <div key={imageUrl} className="relative overflow-hidden rounded-md shadow-md" style={{ aspectRatio: '200/300' }}>
                  <Image
                    src={imageUrl}
                    alt={`AIML Student ${index + 1}`}
                    width={200} // Keep original width
                    height={300} // Keep original height
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGrid;
