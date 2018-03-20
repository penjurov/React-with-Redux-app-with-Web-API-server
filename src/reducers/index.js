import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import categories from './categoryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    categories,
    ajaxCallsInProgress
});

export default rootReducer;