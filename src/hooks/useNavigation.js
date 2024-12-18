import { useState } from "react";

function useNavigation(dataLength, updateItem) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      updateItem(newIndex); 
    }
  };

  const next = () => {
    if (currentIndex < dataLength - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      updateItem(newIndex); 
    }
  };

  return { currentIndex, prev, next, setCurrentIndex };
}

export default useNavigation;
