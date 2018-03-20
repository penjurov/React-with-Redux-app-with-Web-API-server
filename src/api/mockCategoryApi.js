import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
  {
    id: 1,
    title: 'JavaScript'
  },
  {
    id: 2,
    title: 'Software Practices'
  },
  {
    id: 3,
    title: 'Software Architecture'
  },
  {
    id: 4,
    title: 'Career'
  },
  {
    id: 5,
    title: 'HTML5'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
    let maxId = Math.max.apply(Math,categories.map(function(o){return o.y;}));
    return maxId++;
};

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

  static saveCategory(category) {
	category = Object.assign({}, category); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTitleLength = 3;
        if (category.title.length < minTitleLength) {
          reject(`Title must be at least ${minTitleLength} characters.`);
        }

        if (category.id) {
          const existingCategoryIndex = categories.findIndex(a => a.id == category.id);
          categories.splice(existingCategoryIndex, 1, category);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new categories in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          category.id = generateId();
          categories.push(category);
        }

        resolve(category);
      }, delay);
    });
  }

  static deleteCategory(categoryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCategoryToDelete = categories.findIndex(category => {
          return category.id === categoryId;
        });
        categories.splice(indexOfCategoryToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CategoryApi;
