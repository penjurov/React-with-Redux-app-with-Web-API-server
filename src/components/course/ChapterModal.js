import React, {PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import TextInput from '../common/TextInput';

const ChapterModal = ({chapter, show, handleClose, handleSave, onChange, errors}) => {
    return (
        <div className="static-modal">
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <TextInput 
                        name="Title"
                        label="Title"
                        value={chapter.Title}
                        onChange={onChange}
                        error={errors.Title}
                        inputClass="col-sm-10 col-xs-12"/>
                    <TextInput 
                        name="Length"
                        label="Length"
                        value={chapter.Length}
                        onChange={onChange}
                        error={errors.Length}
                        inputClass="col-sm-10 col-xs-12"/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSave} bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

ChapterModal.propTypes = {
    chapter: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default ChapterModal;