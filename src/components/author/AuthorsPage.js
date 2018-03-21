import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorsList from './AuthorsList';
import toastr from "toastr";

class AuthorsPage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.deleteAuthor = this.deleteAuthor.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadAuthors();
    }

    authorRow(author, index) {
        return <div key={index}>{author.FirstName + ' ' + author.LastName}</div>;
    }

    deleteAuthor(authorId) {
        this.props.actions.deleteAuthor(authorId)
            .then(() => {
                toastr.success('Author deleted');
            })
            .catch(error => {
                toastr.error(error);
            });
    }

    render() {
        const {authors} = this.props;
        return(
            <div>
                <AuthorsList authors = {authors} deleteAuthor = {this.deleteAuthor} />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthorsPage);

