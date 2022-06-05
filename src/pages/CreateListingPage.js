import React from 'react'
import '../css/CreateListingPage.css'

function CreateListingPage() {
    return (
        <div className='create-listing'>
            <form className='create-listing-form'>
                <div className="create-listing-form-group">
                    <input autoFocus={true} type="text" placeholder='Property title' className='create-listing-title create-listing-text' />
                    <label htmlFor='create-listing-img' className='create-listing-img-upload'>
                        <i class="upload-icon fa-solid fa-upload"></i>
                        <span>upload image</span>
                    </label>
                    <input type="file" id='create-listing-img' style={{ display: "none" }} />
                </div>
                <div className="create-listing-form-group">
                        <textarea className='create-listing-text create-listing-desc' placeholder='Property Description'></textarea>
                </div>
            </form>
            <button className='create-listing-button'>Submit</button>
        </div>
    )
}

export default CreateListingPage