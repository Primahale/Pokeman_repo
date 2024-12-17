import Data from "../data/data.json"
import React, {useEffect, useState} from "react"
import "./pokeman.css"

function Pockeman() {
    const [pockeman, setPockeman] = useState(Data);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [searchText, setSearchText] = useState("");
    const [filterd, setFilter] = useState(Data);   //filter data 
    // console.log(pockeman)

   

    //handle search input
    // function handleSearch(e){
    //     setSearchText(e.target.value);
    // }

    function handlePrev(){
        if(currentIndex > 0){
            setCurrentIndex(currentIndex-1);
        }
    }

    function handleNext(){
        if(currentIndex < pockeman.length-1){
            setCurrentIndex(currentIndex+1)
        }
    }

    // select pockeman from dropdown
    function handlePockeman(e){
        const selectedPockeman = e.target.value;
        const index = pockeman.findIndex((man)=>
            man.name === selectedPockeman
        );
        setCurrentIndex(index);
    }

    const currentMan = pockeman[currentIndex];

    return (
      <div className="pockeman">
       
        <div className="pockeman-div">
            <select className="dropdown"
                maxMenuHeight={250}
                menuPlacement = 'auto'
                onChange={handlePockeman}
                value={currentMan.name} >
                    {filterd.map((e)=>
                        <option key={e.id}
                            value={e.name}
                        >
                            {e.name}
                        </option>
                    )}
            </select>
            
        </div>
        <div className="data-container">
        <ul>
            {currentMan && (
            <li key={currentMan.id} style={{listStyle:"none"}}>
               <img src={currentMan.image} alt="Image"/> 
                <h2>{currentMan.name}</h2>
                <p>{currentMan.description}</p>
            </li>
            )}
        </ul>
        </div>
        <div className="btn-div">
            <button onClick={handlePrev} disabled={currentIndex=== 0}>Prev</button>
            <button onClick={handleNext} disabled={currentIndex === pockeman.length-1}>Next</button>
        </div>
      </div>
    );
  }
  
  export default Pockeman;
  