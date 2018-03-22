import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import * as courseActions from "../../actions/courseActions";
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
        this.onImageSelect = this.onImageSelect.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.author.Id != nextProps.author.Id){
            this.setState({author: Object.assign({}, nextProps.author)});
        }
    }

    onImageSelect(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        let author = Object.assign({}, this.state.author);

        reader.onloadend = () => {
            author.Image = reader.result;
            this.setState({author: author});
        };

        reader.readAsDataURL(file);
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

        if (this.state.author.FirstName.length < 1){
            errors.FirstName= "First name is required.";
            formIsValid = false;
        }

        if (this.state.author.LastName.length < 1){
            errors.LastName= "Last name is required.";
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

        this.props.authorActions.saveAuthor(this.state.author)
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
                title={this.state.author.Id ? 'Edit author' : 'Add author'}
                errors={this.state.errors}
                onChange={this.updateAuthorState}
                onImageSelect={this.onImageSelect}
                onSave={this.saveAuthor}
                saving = {this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    authorActions: PropTypes.object.isRequired,
    courseActions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
    router: PropTypes.object
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.Id == id);

    if(author){
        return author[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.match.params.id;

    let author = {
        Id: "",
        FirstName: "",
        LastName: "",
        Image: ""
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
        authorActions: bindActionCreators(authorActions, dispatch),
        courseActions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
