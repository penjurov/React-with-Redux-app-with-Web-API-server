import React, {PropTypes} from 'react';

const ImageSelect = ({imageUrl, onImageSelect, inputClass}) => {
    inputClass = inputClass || "col-md-2 col-sm-3 col-xs-12";
    
    return (
        <div>
            <div className="row">
                <label className="col-sm-2 col-xs-12"></label>
                <div className={inputClass}>
                    <div className="file btn btn-primary">
                        Select image
                        <input 
                            type="file" 
                            name="file"
                            accept="image/x-png,image/gif,image/jpeg"
                            onChange={onImageSelect}
                        />
                    </div>
                </div>
            </div>

            <div className="row top-buffer">
                <div className="col-sm-offset-2 col-sm-4 col-xs-12 select-image-preview-wrapper">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
};

ImageSelect.propTypes = {
    onImageSelect: PropTypes.func.isRequired,
    imageUrl: PropTypes.string,
    inputClass: PropTypes.string
};

export default ImageSelect;