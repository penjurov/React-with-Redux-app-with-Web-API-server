import React, {PropTypes} from 'react';
import ChapterRow from './ChapterRow';

const ChapterList = ({chapters, onAddChapterClick, deleteChapter}) => {
    return (
        <div className="row">
            <label className="col-sm-2 col-xs-12">Chapters</label>
            <div className="col-sm-10 col-xs-12">
                <button className="btn" onClick={onAddChapterClick}>Add chapter</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Length</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {chapters.map((chapter, index) =>
                            <ChapterRow key={index} chapter={chapter} deleteChapter={deleteChapter}/>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

ChapterList.propTypes = {
    chapters: PropTypes.array.isRequired,
    onAddChapterClick: PropTypes.func.isRequired,
    deleteChapter: PropTypes.func.isRequired
};

export default ChapterList;