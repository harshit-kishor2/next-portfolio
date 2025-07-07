/* eslint-disable @next/next/no-img-element */
import {useState, useEffect, useCallback} from 'react';
import {cn} from '@/helpers/utils';

const fallbackImages = [
  '/illustration/illustration1.svg',
  '/illustration/illustration2.svg',
  '/illustration/illustration3.svg',
  '/illustration/illustration4.svg',
  '/illustration/illustration5.svg',
  '/illustration/illustration6.svg',
];

function RandomFallbackImage({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);

  const handleError = useCallback(() => {
    if (!hasErrored) {
      const randomIndex = Math.floor(Math.random() * fallbackImages.length);
      setImgSrc(fallbackImages[randomIndex]);
      setHasErrored(true);
    } else {
      setLoading(false); // fallback also failed
    }
  }, [hasErrored]);
  // Timeout to end loading after 10s
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      handleError();
    }, 5000); // 5 seconds

    return () => clearTimeout(timeout);
  }, [handleError]);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={cn('relative inline-block', className)}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10 rounded">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn('transition-opacity duration-300', loading ? 'opacity-0' : 'opacity-100', className)}
        {...props}
      />
    </div>
  );
}

export default RandomFallbackImage;
