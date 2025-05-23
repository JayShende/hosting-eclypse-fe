import React, { useState } from 'react';


const DEFAULT_IMAGE_URL = "https://placehold.co/600x400/cccccc/333333?text=Hover+Over+Me";
// const DEFAULT_HOVER_TEXT = "Hello World!";


interface ImageHoverFadeTextProps {
  imageUrl?: string;
  hoverText?: string;
  altText?: string;
  width?: string; 
  height?: string; 
 
}

export const ImageHoverFadeText: React.FC<ImageHoverFadeTextProps> = ({
  imageUrl = DEFAULT_IMAGE_URL,
  // hoverText = DEFAULT_HOVER_TEXT,
  altText = "Interactive image",
  width = "w-full", // Default width
  height = "h-full", // Default height
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${width} ${height}  overflow-hidden group cursor-pointer shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Added for accessibility and touch devices
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      tabIndex={0} // Make it focusable
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={altText}
        className={`
          absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out
          ${isHovered ? 'opacity-30' : 'opacity-100'}
          
        `}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          // Fallback to default image if the provided one fails
          (e.target as HTMLImageElement).src = DEFAULT_IMAGE_URL;
          (e.target as HTMLImageElement).alt = "Placeholder image";
        }}
      />

      {/* Hover Text Overlay */}
      
    </div>
  );
};

