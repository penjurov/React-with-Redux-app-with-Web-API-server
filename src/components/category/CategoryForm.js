import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const CategoryForm = ({category, title, onSave, onChange, saving, errors}) => {
    return(
        <form>
            <h1>{title}</h1>
           <TextInput 
                name="Title"
                label="Title"
                value={category.Title}
                onChange={onChange}
                error={errors.Title}/>
            <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

CategoryForm.propTypes = {
    category: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default CategoryForm;