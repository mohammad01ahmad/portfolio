import { useState, useEffect } from 'react';

export const useTypingEffect = (texts, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
};