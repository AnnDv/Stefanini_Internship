import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MovieDescription from "./MovieDescription";
import './ShowInfoButton.css';
import MovieRaiting from "./MovieRaiting";

function ShowInfoButton(props) {
    const [show, setShow]= useState(false);

    const handleShow = () => setShow(true);
    const handleClose =() => setShow(false);

    return (
        <div className="card-body">
            <button type="button" className="button" onClick={handleShow}>View More</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="header">Overview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MovieDescription item={props.item}/>
                    <MovieRaiting item={props.item} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ShowInfoButton;