import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        case types.AUTHOR_UPDATED: {
            let currentState = [...state];

            let authorCourses = currentState.filter(function (course) {
                return course.authorId === action.author.id;
            }).map(function (course) {
                let newCourse = Object.assign({}, course);
                newCourse.authorName = action.author.name;
                return newCourse;
            });

            return [...state.filter(function (course) {
                return course.authorId !== action.author.id;
            })].concat(authorCourses);
        }
        default:
            return state;
    }
}