import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackSrc = "",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    }
  };

  if (error && !fallbackSrc) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-[#6B0F1A] to-[#4A0013] flex items-center justify-center`}
      >
        <span className="text-[#F6EEE8] opacity-30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
