import axios from 'axios';

const BASE_API_URL = process.env.SERVER_URL + '/Category';

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      axios.get(BASE_API_URL)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
      });
  }

  static saveCategory(category) {
    return new Promise((resolve, reject) => {
      axios.post(BASE_API_URL, category)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  static deleteCategory(categoryId) {
    return new Promise((resolve, reject) => {
      axios.delete(BASE_API_URL + '/' + categoryId)
        .then(function (response) {
          resolve(true);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default CategoryApi;