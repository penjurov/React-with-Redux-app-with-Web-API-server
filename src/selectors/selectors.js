
export function authorsFormattedForDropdown(authors){
    return authors.map(author => {
        return {
            value: author.Id,
            text: author.FirstName + ' ' + author.LastName
        };
    });
}

export function categoriesFormattedForDropdown(categories){
    return categories.map(category => {
        return {
            value: category.Id,
            text: category.Title
        };
    });
}