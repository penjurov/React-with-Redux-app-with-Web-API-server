import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, title, onSave, onChange, saving, errors}) => {
    return(
        <form>
            <h1>{title}</h1>
           <TextInput 
                name="FirstName"
                label="First Name"
                value={author.FirstName}
                onChange={onChange}
                error={errors.FirstName}/>
             <TextInput 
                name="LastName"
                label="Last Name"
                value={author.LastName}
                onChange={onChange}
                error={errors.LastName}/>
            <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default AuthorForm;