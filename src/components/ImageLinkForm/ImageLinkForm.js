import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
       <div className='ma4 mt0'>
            <p className='f3'>
                {'The FaceDect AI will detect a face in your added picture. (Add any image url with a face below)'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='fa4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
       </div> 
    );
}

export default ImageLinkForm;