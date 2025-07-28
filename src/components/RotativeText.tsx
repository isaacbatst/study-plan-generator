import { useState, useEffect } from "react";

const RotativeText = (props: { texts: string[]; ms: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.texts.length);
    }, props.ms);

    return () => clearInterval(interval);
  }, [props.ms, props.texts.length]);

  return props.texts[currentIndex];
};

export default RotativeText;
