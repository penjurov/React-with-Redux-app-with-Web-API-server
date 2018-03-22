import React, {PropTypes} from 'react';

const Form = ({children, formClass, title}) => {
    formClass = formClass || "well col-md-offset-3 col-md-6";
    
    return (
        <form className={formClass}>
            <h2>{title}</h2>
            <div className="top-buffer"></div>
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    formClass: PropTypes.string
};

export default Form;