import axios from 'axios';

const BASE_API_URL = process.env.SERVER_URL + '/Author';

class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            axios.get(BASE_API_URL)
                .then(function (response) {
                    let result = response.data.map(function (author) {
                        return Object.assign(author, { name: author.FirstName + ' ' + author.LastName});
                    });

                    resolve(Object.assign([], result));
                }).catch(function (error) {
                    reject(error);
                });
        });
    }

    static saveAuthor(author) {
        return new Promise((resolve, reject) => {
            axios.post(BASE_API_URL, author)
                .then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    reject(error);
                });
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            axios.delete(BASE_API_URL + '/' + authorId)
                .then(function () {
                    resolve(true);
                }).catch(function (response) {
                    reject(response.response.data);
                });
        });
    }
}

export default AuthorApi;