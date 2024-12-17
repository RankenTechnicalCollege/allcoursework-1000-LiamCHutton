import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './AddShip.css';

const addShip = (props) => {
    const[shipModel, setShipModel] = useState('');
    const[shipManufacturer, setShipManufacturer] = useState('');
    const[purpose, setPurpose] = useState('');
    const[yearCreated, setCreationDate] = useState('');
    const[selectedFile, setSelectedFile] = useState();

    const doWork = () => {
      const newShip = {
        'id': nanoid(),
        'shipModel': shipModel,
        'shipManufacturer': shipManufacturer,
        'purpose': purpose,
        'yearCreated': parseInt(yearCreated),
        'image': URL.createObjectURL(selectedFile)
      }
      props.addShip(newShip)
    }

    const imageUpdate = (event) => {
      setSelectedFile(event.target.files[0]);
    }

  return (
    <div className='row mt-5' id='addShip'>
      <h3>Add Ship</h3>
      <div className='col-md-2'>
          <label htmlFor='txtShipModel' className='form-label'>First Name</label>
          <input type='text'id='txtShipModel' placeholder='Ship Name' className='form-control' onChange={(event) => setShipModel(event.currentTarget.value)} value={shipModel} />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtShipManufacturer' className='form-label'>Last Name</label>
        <input type='text'id='txtShipManufacturer' placeholder='Manufacturer' className='form-control' onChange={(event) => setShipManufacturer(event.currentTarget.value)} value={shipManufacturer} />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtPurpose' className='form-label'>Purpose</label>
        <input type='purpose'id='txtPurpose' placeholder='Purpose' className='form-control' onChange={(event) => setPurpose(event.currentTarget.value)} value={[purpose]} />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtGradYear' className='form-label'>Year Created</label>
        <input type='text'id='txtGradYear' placeholder='2024' className='form-control' onChange={(event) => setCreationDate(event.currentTarget.value)} value={yearCreated} />
      </div>
      <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Ship Image</label>
        <input type='file'id='fileUpload' className='form-control' onChange={imageUpdate} />
      </div>
      <div className='col-md-2'>
        <button type='button' className='btn btn-success btn-lg' id='btnAdd' onClick={doWork}>Add Ship <FontAwesomeIcon icon={faPlusCircle} /></button>
      </div>
    </div>
  )
}

export default addShip