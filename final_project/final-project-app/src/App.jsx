import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import AddShip from './component/AddShip'
import _ from 'lodash';
import Ship from './component/Ship';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [allShips, setAllShips] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeyWords] = useState('');
  const [yearCreated, setCreationDate] = useState('');

  useEffect(() => {
    if(localStorage) {
      const shipsLocalStorage = JSON.parse(localStorage.getItem('ships'));

      if(shipsLocalStorage) {
        saveShips(shipsLocalStorage);
      }
      else{
        saveShips(ships);
      }
    }
  }, []);
  
  const ships = [{
    id: nanoid(),
    shipModel: "Alliance Chieftain",
    shipManufacturer: "Lakon",
    purpose: "Combat",
    image: "AllianceChieftain.jpg",
    yearCreated: 3280
  }, {
    id: nanoid(),
    shipModel: "Anaconda",
    shipManufacturer: "Falcon DeLacy",
    purpose: "Multipurpose",
    image: "Anaconda.webp",
    yearCreated: 3215
  }, {
    id: nanoid(),
    shipModel: "Beluga",
    shipManufacturer: "Saud Kruger",
    purpose: "Passenger Transport",
    image: "Beluga.jpg",
    yearCreated: 3200
  }, {
    id: nanoid(),
    shipModel: "Cobra Mk.III",
    shipManufacturer: "Falcon DeLacy",
    purpose: "cdudhill3@smugmug.com",
    image: "CobraMk3.webp",
    yearCreated: 3100
  }, {
    id: nanoid(),
    shipModel: "Diamondback Explorer",
    shipManufacturer: "Lakon",
    purpose: "Exploration",
    image: "DiamondbackExplorer.webp",
    yearCreated: 3100
  }, {
    id: nanoid(),
    shipModel: "Federal Corvette",
    shipManufacturer: "Core Dynamics",
    purpose: "Combat",
    image: "FederalCorvette.webp",
    yearCreated: 3100
  }, {
    id: nanoid(),
    shipModel: "Krait Mk.II",
    shipManufacturer: "Falcon DeLacy",
    purpose: "Multipurpose",
    image: "KraitMark2.webp",
    yearCreated: 3100
  }, {
    id: nanoid(),
    shipModel: "Mandalay",
    shipManufacturer: "Zorgon Peterson",
    purpose: "Exploration",
    image: "Mandalay.jpg",
    yearCreated: 3310
  }, {
    id: nanoid(),
    shipModel: "Python Mk.II",
    shipManufacturer: "Falcon DeLacy",
    purpose: "Combat",
    image: "PythonMk2.jpg",
    yearCreated: 3310
  }, {
    id: nanoid(),
    shipModel: "Type-8 Transporter",
    shipManufacturer: "Lakon",
    purpose: "Trade",
    image: "Type8Transporter.webp",
    yearCreated: 3310
  }];

const saveShips = (ships) => {
  setAllShips(ships);
  setSearchResults(ships);
  if(localStorage){
    localStorage.setItem('ships', JSON.stringify(ships));
    console.log('saved to local storage')
  }
}

const addShip = (newShip) => {
  const updatedShips = [...allShips,newShip]
  saveShips(updatedShips);
};

const removeShip = (shipToDelete) => {
  //console.table(shiptToDelete);
  const updatedShipArray = allShips.filter(ship => ship.id !== shipToDelete.id);
  saveShips(updatedShipArray);
}

const updateShip = (updatedShip) => {
  //console.table(updatedShip);
  const updatedShipArray = allShips.map(ship => ship.id === updatedShip.id ? {...ship, ...updatedShip} : ship)
  saveShips(updatedShipArray)
}

const searchShips = () => {
  let keywordsArray = [];

  if(keywords) {
    keywordsArray = keywords.toLowerCase().split (' ');
  }

  if(yearCreated) {
    keywordsArray.push(yearCreated.toString());
  }

  if(keywordsArray.length > 0) {
    const searchResults = allShips.filter(ship => {
      for(const word of keywordsArray){
        if(ship.shipModel.toLowerCase().includes(word) ||
          ship.shipManufacturer.toLowerCase().includes(word) ||
          ship.yearCreated === parseInt(word)){
          return true;
        }
      }
      return false;
    });
    setSearchResults(searchResults);
  }
  else {
    setSearchResults(allShips)
  }
};

  return (
    <div className='container'>
      <div className='row' id='allShips'>
        <h3>Current Ships</h3>
        {searchResults && searchResults.map((ship) =>(
        <div className= 'col-lg-2' key={ship.id}>
          <Ship ship={ship} removeShip={removeShip} updateShip={updateShip}/>
        </div>)
  )}
      </div>

      {/*!allShips && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllShips(ships)}>Save Ships</button>*/}
      {<AddShip addShip={addShip}/>}
      <div className='row mt-4' id='searchShips'>
      <h3>Search Ships</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by Ship or Manufacturer</label>
          <input type='text' className='form-control' placeholder='Search by Ship or Manufacturer' onChange={e => setKeyWords(e.currentTarget.value)} />
        </div>
        <div className='col-md-4'>
          <label htmlFor='select'>Search by Year Created</label>
          <select className='form-select' value={yearCreated} onChange={e => setCreationDate(e.currentTarget.value)}>
            <option value= ''>Select Year</option>
            {_(allShips).map(ship => ship.yearCreated).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
          </select>
        </div>
        <div className='col-md-4 mt-3'>
          <button type='button' className= 'btn btn-lg btn-primary' onClick={searchShips}>Search Ships <FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
    </div>
  )
}

export default App