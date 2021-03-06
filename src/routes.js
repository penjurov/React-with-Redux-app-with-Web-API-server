import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage'; //eslint-disable-line import/no-named-as-default

import CategoriesPage from './components/category/CategoriesPage';
import ManageCategoryPage from './components/category/ManageCategoryPage'; //eslint-disable-line import/no-named-as-default

import StatisticsPage from './components/statistics/StatisticsPage'; //eslint-disable-line import/no-named-as-default

export default (
    <Switch>
        <App>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route exact path="/course" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />

            <Route path="/authors" component={AuthorsPage} />
            <Route exact path="/author" component={ManageAuthorPage} />
            <Route path="/author/:id" component={ManageAuthorPage} />

            <Route path="/categories" component={CategoriesPage} />
            <Route exact path="/category" component={ManageCategoryPage} />
            <Route path="/category/:id" component={ManageCategoryPage} />

            <Route path="/statistics" component={StatisticsPage} />
        </App>
    </Switch>  
);