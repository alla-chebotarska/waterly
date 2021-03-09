import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PlantGalery from '../PlantGalery';
import './popup.css'

export default function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button  onClick={handleShow} className='plant-galery-btn save'>
                Click here to change plant picture
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pick the plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlantGalery onImgClick={props.onImgClick}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className='plant-galery-btn' onClick={handleClose}>
                        Close
                    </button>
                    <button className='plant-galery-btn save' onClick={handleClose}>
                        Save 
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
