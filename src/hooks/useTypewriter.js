import { useState, useEffect } from 'react';

export function useTypewriter(texts, options = {}) {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    loop = true,
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !texts || texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          if (loop) {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          } else {
            setCurrentTextIndex((prevIndex) => 
              prevIndex + 1 < texts.length ? prevIndex + 1 : prevIndex
            );
          }
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typeSpeed, deleteSpeed, pauseTime, loop]);

  return {
    currentText,
    isTyping: !isDeleting && currentText.length < texts[currentTextIndex].length,
    isDeleting,
    currentTextIndex,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}
