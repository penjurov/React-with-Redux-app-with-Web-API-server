import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import Submit from '../common/Submit';
import Form from '../common/Form';

const CategoryForm = ({category, title, onSave, onChange, saving, errors}) => {
    return(
        <Form 
            title={title}>
            <TextInput 
                name="Title"
                label="Title"
                value={category.Title}
                onChange={onChange}
                error={errors.Title}
                inputClass="col-sm-10 col-xs-12"/>
            <Submit
                saving={saving}
                onSave={onSave}
                inputClass="col-sm-offset-2 col-sm-10 col-xs-12"/>
        </Form>
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