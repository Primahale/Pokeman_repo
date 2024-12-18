import React from "react";
import Data from "../data/data.json";
import useDropdown from "../hooks/useDropdown";
import useNavigation from "../hooks/useNavigation";
import "./pokeman.css";

function Pockeman() {
  const {
    currentItem,
    handleDropdownChange,
    updateItem, 
  } = useDropdown(Data, 0, () => {});
  const { currentIndex, prev, next } = useNavigation(Data.length, updateItem);

  return (
    <div className="pockeman">
      <div className="pockeman-div">
        <select
          className="dropdown"
          value={currentItem.name}
          onChange={(e) => handleDropdownChange(e)}
        >
          {Data.map((pockeman) => (
            <option key={pockeman.id} value={pockeman.name}>
              {pockeman.name}
            </option>
          ))}
        </select>
      </div>

      <div className="data-container">
        <ul>
          <li key={currentItem.id} style={{ listStyle: "none" }}>
            <img src={currentItem.image} alt={currentItem.name} />
            <h2>{currentItem.name}</h2>
            <p>{currentItem.description}</p>
          </li>
        </ul>
      </div>

      <div className="btn-div">
        <button onClick={prev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={next} disabled={currentIndex === Data.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pockeman;
