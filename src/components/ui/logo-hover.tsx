import React, { useState, useEffect } from 'react';


interface HoverImageProps {
  defaultImage: string;
  hoverImage: string;
  altText: string;
}



/**
 * HoverImage Component
 * Displays a default image and switches to a hover image on mouse over with a fade effect.
 *
 * @param {HoverImageProps} props - Component props with defined types.
 */
export function HoverImage({ defaultImage, hoverImage, altText }: HoverImageProps) {
  // State to manage the currently displayed image source
  const [displayedImage, setDisplayedImage] = useState<string>(defaultImage);
  // State to control the opacity for fade effect (0 for hidden, 1 for visible)
  const [opacity, setOpacity] = useState<number>(1);
  // State to track if the mouse is currently over the component
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Effect to handle the image change with fade animation
  useEffect(() => {
    let timeoutId;

    if (isHovering) {
      // If hovering, start fading out the current image
      setOpacity(0);
      // After fade-out duration, change the image source and fade in
      timeoutId = setTimeout(() => {
        setDisplayedImage(hoverImage);
        setOpacity(1);
      }, 100); // Match this duration with the CSS transition duration
    } else {
      // If not hovering, start fading out the current image
      setOpacity(0);
      // After fade-out duration, change the image source back to default and fade in
      timeoutId = setTimeout(() => {
        setDisplayedImage(defaultImage);
        setOpacity(1);
      }, 100); // Match this duration with the CSS transition duration
    }

    // Cleanup function to clear the timeout if the component unmounts or state changes
    return () => clearTimeout(timeoutId);
  }, [isHovering, defaultImage, hoverImage]); // Re-run effect when hover state or image URLs change

  // Function to handle mouse entering the image area
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Function to handle mouse leaving the image area
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative w-full max-w-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={displayedImage}
        alt={altText}
        // Apply opacity and transition classes for the fade effect
        className={`w-full h-auto object-cover rounded-lg transition-opacity duration-300 ease-in-out ${opacity === 1 ? 'opacity-100' : 'opacity-0'}`}
        // Fallback for image loading errors
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null; // Prevent infinite loop
          e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/000000?text=Image+Error";
        }}
      />
     
    </div>
  );
}
