import React, { useState, useEffect, useRef } from 'react';

const RevealCard = ({ children, className }) => {
  const [isVisible, setVisible] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

export default RevealCard;
