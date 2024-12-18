import { useState } from "react";

function useDropdown(data, currentIndex, setCurrentIndex) {
  const [currentItem, setCurrentItem] = useState(data[0]);

  const handleDropdownChange = (event) => {
    const selectedName = event.target.value;
    const selectedIndex = data.findIndex((item) => item.name === selectedName);
    setCurrentIndex(selectedIndex); 
    setCurrentItem(data[selectedIndex]);
  };

  const updateItem = (newIndex) => {
    setCurrentItem(data[newIndex]);
  };

  return { currentItem, handleDropdownChange, updateItem };
}

export default useDropdown;
