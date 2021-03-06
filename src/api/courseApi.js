import axios from 'axios';

const BASE_API_URL = process.env.SERVER_URL + '/Course';

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            axios.get(BASE_API_URL)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static getCourse(courseId) {
        return new Promise((resolve, reject) => {
            axios.get(BASE_API_URL + '/' + courseId)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static saveCourse(course) {
        return new Promise((resolve, reject) => {
            axios.post(BASE_API_URL, course)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            axios.delete(BASE_API_URL + '/' + courseId)
                .then(function () {
                    resolve(true);
                })
                .catch(function (response) {
                    reject(response.response.data);
                });
        });
    }
}

export default CourseApi;