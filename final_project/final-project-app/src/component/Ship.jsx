import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagicWandSparkles, faWarning, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';

const Student = (props) => {
  const[editMode, setEditMode] = useState(false);
  const [shipModel, setFirstName] = useState('');
  const [shipManufacturer, setLastName] = useState('');
  const[purpose, setPurpose] = useState('');
  const [yearCreated, setCreationDate] = useState('');

  useEffect(() => {
    setFirstName(props.ship.shipModel);
    setLastName(props.ship.shipManufacturer);
    setPurpose(props.ship.purpose);
    setCreationDate(props.ship.yearCreated);
  }, []);

  const saveStudent = () => {
    setEditMode(false);
    const updatedShip = {shipModel: shipModel, shipManufacturer: shipManufacturer, purpose: purpose, yearCreated: yearCreated, id: props.ship.id, image: props.ship.image}
    props.updateShip(updatedShip);
  }

  return (
    <div className='card'>
      <img src={props.ship.image} alt='Our Student' className='card-image-top mx-auto img-fluid' />
      {!editMode && <ul className='list-group list-group-flush'>
        <li className='list-group-item text-center'>{props.ship.shipModel}</li>
        <li className='list-group-item text-center'>{props.ship.shipManufacturer}</li>
        <li className='list-group-item text-center'>{props.ship.purpose}</li>
        <li className='list-group-item text-center'>{props.ship.yearCreated}</li>
        <button type='button' className='btn btn-danger' onClick={() => props.removeShip(props.ship)}>Delete Student <FontAwesomeIcon icon={faWarning} /></button>
        <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Student <FontAwesomeIcon icon={faMagicWandSparkles} /></button>
      </ul>}
      {editMode && <ul className='list-group list-group-flush'>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={shipModel} onChange={(e) => setFirstName(e.currentTarget.value)}/></li>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={shipManufacturer} onChange={(e) => setLastName(e.currentTarget.value)}/></li>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={purpose} onChange={(e) => setPurpose(e.currentTarget.value)}/></li>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={yearCreated} onChange={(e) => setCreationDate(e.currentTarget.value)}/></li>
        <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveStudent}>Save <FontAwesomeIcon icon={faFloppyDisk} /></button></li>
      </ul>}

    </div>
  )
}

export default Student