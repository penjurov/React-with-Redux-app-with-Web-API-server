import React, {PropTypes} from 'react';

const TextInput = ({name, label, inputClass, onChange, placeholder, value, error}) => {
    let wrapperClass = 'form-group row';
    if(error && error.length > 0){
        wrapperClass += " " + "has-error";
    }

    inputClass = inputClass || "col-sm-6 col-md-4 col-xs-12";

    return (
        <div className={wrapperClass}>
            <label className="col-sm-2 col-xs-12" htmlFor={name}>{label}</label>
            <div className={inputClass}>
                <input 
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    inputClass: PropTypes.string
};

export default TextInput;