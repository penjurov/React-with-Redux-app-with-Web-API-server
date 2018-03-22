import React, {PropTypes} from 'react';

const Submit = ({saving, onSave, inputClass}) => {
    inputClass = inputClass || "col-sm-offset-2 col-md-4 col-sm-6 col-xs-12";

    return (
        <div className="row">
            <div className={inputClass}>
                <div className="pull-right">
                    <input 
                        type="submit"
                        disabled={saving}
                        value={saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary"
                        onClick={onSave}/>
                </div>
            </div>
        </div>
    );
};

Submit.propTypes = {
    onSave: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    inputClass: PropTypes.string
};

export default Submit;