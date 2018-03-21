import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../actions/categoryActions";
import CategoryForm from "./CategoryForm";
import toastr from "toastr";

export class ManageCategoryPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            category: Object.assign({}, props.category),
            errors: {},
            saving: false
        };
        this.updateCategoryState = this.updateCategoryState.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.category.id != nextProps.category.id){
            this.setState({category: Object.assign({}, nextProps.category)});
        }
    }

    updateCategoryState(event){
        const field = event.target.name;
        let category = Object.assign({}, this.state.category);
        category[field] = event.target.value;
        return this.setState({category: category});
    }

    categoryFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if (this.state.category.title.length < 0){
            errors.title= "Title is required.";
            formIsValid = false;
        }

        this.setState({errors: errors});

        return formIsValid;
    }

    saveCategory(event){
        event.preventDefault();

        if(!this.categoryFormIsValid()){
            return;
        }

        this.setState({saving: true});

        this.props.actions.saveCategory(this.state.category)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('Category saved');
        this.context.router.history.push('/categories');
    }

    render() {
        return (
            <CategoryForm
                category={this.state.category}
                title={this.state.category.id ? 'Edit category' : 'Add category'}
                errors={this.state.errors}
                onChange={this.updateCategoryState}
                onSave={this.saveCategory}
                saving = {this.state.saving}
            />
        );
    }
}

ManageCategoryPage.propTypes = {
    category: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCategoryPage.contextTypes = {
    router: PropTypes.object
};

function getCategoryById(categories, id) {
    const category = categories.filter(category => category.id == id);

    if(category){
        return category[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const categoryId = ownProps.match.params.id;

    let category = {
        id: "",
        title: ""
    };

    if (categoryId && state.categories.length > 0){
        category = getCategoryById(state.categories, categoryId);
    }

    return {
        category: category
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryPage);
