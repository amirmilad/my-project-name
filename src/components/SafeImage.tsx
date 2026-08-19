import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  showSkeleton?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'IL CAZAR Developments',
  className = '',
  containerClassName = '',
  fallbackSrc,
  showSkeleton = true,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);

    // If browser already cached the image and completed loading
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Background skeleton loader while image is loading */}
      {showSkeleton && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm animate-pulse flex items-center justify-center pointer-events-none z-0">
          <ImageIcon className="w-8 h-8 text-neutral-600 animate-pulse" />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full min-h-[140px] bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-4 text-center">
          <ImageIcon className="w-8 h-8 text-amber-400 mb-2 opacity-60" />
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
            IL CAZAR DEVELOPMENTS
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={imgSrc || fallbackSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          referrerPolicy="no-referrer"
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          {...props}
        />
      )}
    </div>
  );
};

