import React, {PropTypes} from 'react';

const SelectInput = ({name, label, inputClass, onChange, defaultOption, value, error, options}) => {
    inputClass = inputClass || "col-sm-6 col-md-4 col-xs-12";

    inputClass = inputClass + " field";
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-xs-12" htmlFor={name}>{label}</label>
            <div className={inputClass}>
                <select 
                    name={name}
                    value={value}
                    selected={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    inputClass: PropTypes.string
};

export default SelectInput;