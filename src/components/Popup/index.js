import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FilePicker from '../FilePicker';
import PlantGalery from '../PlantGalery';
import PlantImage from '../PlantImage';
import './popup.css';

export default function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <PlantImage
                    plantId={props.plantIconId}
                    onPlantImageClick={handleShow}
                    clickable={true} />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Pick the plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlantGalery
                        plantIconId={props.plantIconId}
                        onImgClick={(plantId) => {
                            props.onImgClick(plantId);
                            handleClose();
                        }}
                    />
                    <Modal.Header>
                        <Modal.Title>Or upload your own picture</Modal.Title>
                    </Modal.Header>
                    <FilePicker
                        onFileSelected={(file, imagePreviewUrl) => {
                            props.onFileSelected(file, imagePreviewUrl);
                            handleClose();
                        }}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}
