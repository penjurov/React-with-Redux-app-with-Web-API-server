import React, {PropTypes} from 'react';

const ChapterRow = ({chapter, deleteChapter}) => {
    const deleteHandler = () => {
        deleteChapter(chapter.Id);
    };

    return (
        <tr>
            <td>{chapter.Title}</td>
            <td>{chapter.Length}</td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

ChapterRow.propTypes = {
    chapter: PropTypes.object.isRequired,
    deleteChapter: PropTypes.func.isRequired
};

export default ChapterRow;