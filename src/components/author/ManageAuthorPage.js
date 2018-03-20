import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";
import toastr from "toastr";

export class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            author: Object.assign({}, props.author),
            errors: {},
            saving: false
        };
        this.updateAuthorState = this.updateAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.author.id != nextProps.author.id){
            this.setState({author: Object.assign({}, nextProps.author)});
        }
    }

    updateAuthorState(event){
        const field = event.target.name;
        let author = Object.assign({}, this.state.author);
        author[field] = event.target.value;
        return this.setState({author: author});
    }

    authorFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if (this.state.author.firstName.length < 0){
            errors.title= "First name is required.";
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 0){
            errors.title= "Last name is required.";
            formIsValid = false;
        }

        this.setState({errors: errors});

        return formIsValid;
    }

    saveAuthor(event){
        event.preventDefault();

        if(!this.authorFormIsValid()){
            return;
        }

        this.setState({saving: true});

        this.props.actions.saveAuthor(this.state.author)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('Author saved');
        this.context.router.history.push('/authors');
    }

    render() {
        return (
            <AuthorForm
                author={this.state.author}
                title={this.state.author.id ? 'Edit author' : 'Add author'}
                errors={this.state.errors}
                onChange={this.updateAuthorState}
                onSave={this.saveAuthor}
                saving = {this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
    router: PropTypes.object
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id == id);

    if(author){
        return author[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.match.params.id;

    let author = {
        id: "",
        firstName: "",
        lastName: ""
    };

    if (authorId && state.authors.length > 0){
        author = getAuthorById(state.authors, authorId);
    }

    return {
        author: author
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
