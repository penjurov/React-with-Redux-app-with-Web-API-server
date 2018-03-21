import expect from 'expect';
import courseReducer from '../reducers/courseReducer';
import * as actions from "../actions/courseActions";

describe ('Course reducer', () => {
    describe ('create a course', () => {
        it('should create a  course when passed CREATE_COURSE_SUCCESS', () => {
            const initialState = [
                {title: 'A'},
                {title: 'B'}
            ];

            const newCourse = {title: 'C'};
            const action = actions.createCourseSuccess(newCourse);

            const newState = courseReducer(initialState, action);
            expect(newState.length).toEqual(3);
            expect(newState[0].title).toEqual('A');
            expect(newState[1].title).toEqual('B');
            expect(newState[2].title).toEqual('C');
        });

        it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
            const initialState = [
                {Id: 'A', Title: 'A'},
                {Id: 'B', Title: 'B'},
                {Id: 'C', Title: 'C'}
            ];
            
            const course = {Id: 'B', Title: 'New title'};
            const action = actions.updateCourseSuccess(course);

            const newState = courseReducer(initialState, action);
            const updatedCourse = newState.find(a => a.Id == course.Id);
            const untouchedCourse = newState.find(a => a.Id == 'A');

            expect(updatedCourse.Title).toEqual('New title');
            expect(untouchedCourse.Title).toEqual('A');
            expect(newState.length).toEqual(3);
        });
    });
});