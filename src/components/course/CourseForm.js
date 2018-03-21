import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, title, allAuthors, allCategories, onSave, onChange, saving, errors}) => {
    return(
        <form>
            <h1>{title}</h1>
            <TextInput 
                name="Title"
                label="Title"
                value={course.Title}
                onChange={onChange}
                error={errors.Title}/>
            <SelectInput 
                name="AuthorId"
                label="Author"
                value={course.AuthorId.toString()}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.AuthorId}/>
            <SelectInput 
                name="CategoryId"
                label="Category"
                value={course.CategoryId.toString()}
                defaultOption="Select Category"
                options={allCategories}
                onChange={onChange}
                error={errors.CategoryId}/>
            <TextInput 
                name="Length"
                label="Length"
                value={course.Length}
                onChange={onChange}
                error={errors.Length}/>
            <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    allAuthors: PropTypes.array.isRequired,
    allCategories: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;