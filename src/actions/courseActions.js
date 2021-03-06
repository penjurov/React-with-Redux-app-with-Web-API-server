import * as types from './actionTypes';
import courseApi from '../api/courseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS, courses
    };
}

export function getCourseSuccess(course){
    return {
        type: types.GET_COURSE_SUCCESS, course
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

export function chapterAdded(course){
    return {
        type: types.UPDATE_COURSE_SUCCESS, course
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

export function getCourse(courseId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getCourse(courseId).then(course => {
            dispatch(getCourseSuccess(course));
            return course;
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.Id ? dispatch(updateCourseSuccess(savedCourse)) :
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
        
        return courseApi.deleteCourse(courseId).then(() => {
            courseApi.getAllCourses().then(courses => {
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
}