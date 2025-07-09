/* eslint-disable @next/next/no-img-element */
import {useState, useCallback, useEffect} from 'react';
import {cn} from '@/helpers/utils';

const fallbackImages = [
  '/illustration/illustration1.svg',
  '/illustration/illustration2.svg',
  '/illustration/illustration3.svg',
  '/illustration/illustration4.svg',
  '/illustration/illustration5.svg',
  '/illustration/illustration6.svg',
];

type RandomFallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

function RandomFallbackImage({src, alt, className, ...props}: RandomFallbackImageProps) {
  const [imgSrc, setImgSrc] = useState('');

  const handleError = useCallback(() => {
    const fallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    setImgSrc(fallback);
  }, []);

  useEffect(() => {
    console.log(src, "jksnbqjbdjkwbfjkbkjd");
    if (src) {
      setImgSrc(src);
    } else {
      setImgSrc(fallbackImages[Math.floor(Math.random() * fallbackImages.length)]);
    }
  }, [src]);

  if (!imgSrc) {
    return null;
  }
  return (
    <div className={cn('relative inline-block', className)}>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        className={cn('transition-opacity duration-300', 'opacity-100', className)}
        {...props}
      />
    </div>
  );
}

export default RandomFallbackImage;
