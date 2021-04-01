import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PlantGalery from '../PlantGalery';
import MyButton from '../MyButton';

export default function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <MyButton
                onClick={handleShow}
                value='Click here to change plant picture' />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Pick the plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlantGalery
                        plantIconId={props.plantIconId}
                        onImgClick={(plantId) => {
                            handleClose();
                            props.onImgClick(plantId);
                        }} 
                        />
                </Modal.Body>
            </Modal>
        </div>
    )
}
