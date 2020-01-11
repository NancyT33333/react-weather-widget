import React from 'react';
import OneCity from "./OneCity";
import '../App.css';
import {useState} from "react";
import NotFound from "./NotFound";




function Widget () {

    const [city, setCity] = useState('Nizhny Novgorod');
    const [aCities, setACities] = useState([]);
  
    const [b404, setB404] = useState(false);
   
    function addCity () {     
      if (!isCityinList()) {
        let aNewCities = aCities.concat(city);
        setACities(aNewCities);
      } else alert("Город уже есть!");
    };
  
    function isCityinList() {
      return aCities.lastIndexOf(city) < 0 ? false : true 
    }
  
    const deleteItem = function (cityKey) {
     
      setACities (aCities.slice(0, aCities.lastIndexOf(cityKey)).concat(aCities.slice(aCities.lastIndexOf(cityKey)+1)));
  
    }
    const show404Banner = function () {
      return b404 ? <NotFound onClose={() => setB404(false)}/> : undefined ; 
    }
  
    function showCitiesDivs(aCities) {
      return aCities.map((sCityName) => <OneCity data={sCityName} 
                                                 key={sCityName} 
                                                 onDelete={(cityKey) => deleteItem(cityKey)} 
                                                 onNotFound={()=> setB404(true)}/>);
    };  
    

    return (
        
        <div className="outerDiv">     
          <h1>Weather widget</h1>
            <p className="p_pseudoForm">
                <input type="text" value={city} onChange={(event)=>{
                      setCity( event.target.value);
                  }
                  }/>
                <input type="submit" value="Add city" onClick={addCity}/>
            </p>
          <div >
            {showCitiesDivs(aCities)}
          </div>
          
              {show404Banner()}
          
        </div>       
    );
  }

export default Widget