import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS, courses
    };
}

export function createCourseSuccess(course){
    return {
        type: types.CREATE_COURSE_SUCCESS, course
    };
}

export function updateCourseSuccess(course){
    return {
        type: types.UPDATE_COURSE_SUCCESS, course
    };
}

export function authorUpdated(author){
    return {
        type: types.AUTHOR_UPDATED, author
    };
}

export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
            return courses;
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
}

export function deleteCourse(courseId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        courseApi.deleteCourse(courseId).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });

        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}