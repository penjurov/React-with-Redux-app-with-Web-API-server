import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import Submit from '../common/Submit';
import Form from '../common/Form';
import ChapterList from './ChapterList';

const CourseForm = ({course, title, allAuthors, allCategories, onSave, onChange, onAddChapterClick, deleteChapter, saving, errors}) => {
    return(
        <Form 
            title={title}>
            
            <TextInput 
                name="Title"
                label="Title"
                value={course.Title}
                onChange={onChange}
                error={errors.Title}
                inputClass="col-sm-10 col-xs-12"/>
            <TextInput 
                name="Url"
                label="Url"
                value={course.Url}
                onChange={onChange}
                error={errors.Url}
                inputClass="col-sm-10 col-xs-12"/>
            <SelectInput 
                name="AuthorId"
                label="Author"
                value={course.AuthorId.toString()}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.AuthorId}
                inputClass="col-sm-10 col-xs-12"/>
            <SelectInput 
                name="CategoryId"
                label="Category"
                value={course.CategoryId.toString()}
                defaultOption="Select Category"
                options={allCategories}
                onChange={onChange}
                error={errors.CategoryId}
                inputClass="col-sm-10 col-xs-12"/>
            <TextInput 
                name="Length"
                label="Length"
                value={course.Length}
                onChange={onChange}
                error={errors.Length}
                inputClass="col-sm-10 col-xs-12"/>

            <ChapterList chapters = {course.Chapters} onAddChapterClick = {onAddChapterClick} deleteChapter = {deleteChapter} />
            
            <Submit
                saving={saving}
                onSave={onSave}
                inputClass="col-sm-offset-2 col-sm-10 col-xs-12"/>
        </Form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    allAuthors: PropTypes.array.isRequired,
    allCategories: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onAddChapterClick: PropTypes.func.isRequired,
    deleteChapter: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;