import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, opacity: 1 },
        ...prev.slice(0, 8).map(point => ({ ...point, opacity: point.opacity * 0.8 }))
      ]);
    };

    const updateIsPointer = () => {
      const element = document.elementFromPoint(position.x, position.y);
      const clickable = element?.matches('button, a, input, [role="button"], [tabindex="0"]') || 
                       element?.closest('button, a, input, [role="button"], [tabindex="0"]');
      setIsPointer(!!clickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateIsPointer);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateIsPointer);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position]);

  // Only render on larger screens
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Trail effect */}
      {isVisible && trail.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              opacity: point.opacity * 0.5,
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
      ))}
      
      {/* Main cursor */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.2s, height 0.2s, opacity 0.2s',
          }}
        >
          {/* Outer ring */}
          <div
            className="transition-all duration-200 ease-out absolute"
            style={{
              width: isPointer ? '40px' : '24px',
              height: isPointer ? '40px' : '24px',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              opacity: isPointer ? 0.4 : 0.8,
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Inner dot */}
          <div
            className="absolute transition-all duration-200 ease-out"
            style={{
              width: isPointer ? '4px' : '4px',
              height: isPointer ? '4px' : '4px',
              backgroundColor: 'white',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 1,
            }}
          />
        </div>
      )}
    </>
  );
};

export default AnimatedCursor;