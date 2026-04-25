import React, { useState, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  blur?: boolean;
  placeholderColor?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  blur = true,
  placeholderColor = "bg-slate-100",
  objectFit = "cover",
  className = "",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 animate-pulse ${placeholderColor}`}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className={`absolute inset-0 ${placeholderColor} flex items-center justify-center text-gray-400`}>
          <span className="text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
