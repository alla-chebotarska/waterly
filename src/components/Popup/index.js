import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ImageUpload from '../ImageUpload';
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
                            handleClose();
                            props.onImgClick(plantId);
                        }}
                    />
                    <Modal.Header>
                        <Modal.Title>Or upload your own picture</Modal.Title>
                    </Modal.Header>
                    <ImageUpload
                        onImgClick={(plantId) => {
                            handleClose();
                            props.onImgClick(plantId);
                        }}
                        onUploadImage={props.onUploadImage} 
                        />
                </Modal.Body>
            </Modal>
        </div>
    )
}
