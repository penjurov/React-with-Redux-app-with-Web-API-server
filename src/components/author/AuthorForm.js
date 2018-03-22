import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import Submit from '../common/Submit';
import ImageSelect from '../common/ImageSelect';
import Form from '../common/Form';

const AuthorForm = ({author, title, onSave, onChange, onImageSelect, saving, errors}) => {
    return(
        <Form 
            title={title}>
            <TextInput 
                name="FirstName"
                label="First Name"
                value={author.FirstName}
                onChange={onChange}
                error={errors.FirstName}
                inputClass="col-sm-10 col-xs-12"/>
            <TextInput 
                name="LastName"
                label="Last Name"
                value={author.LastName}
                onChange={onChange}
                error={errors.LastName}
                inputClass="col-sm-10 col-xs-12"/>
            <ImageSelect
                imageUrl={author.Image}
                onImageSelect={onImageSelect}
                inputClass="col-sm-10 col-xs-12"/>
            <Submit
                saving={saving}
                onSave={onSave}
                inputClass="col-sm-offset-2 col-sm-10 col-xs-12"/>
        </Form>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onImageSelect: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default AuthorForm;