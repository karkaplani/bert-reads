import React from 'react'
import './upload.css'

const FileUpload = ({displayResult, fileChangeHandler, textChangeHandler}) => {
    //Write the uploaded file content to the textarea
    return (
        <form method="post" onSubmit={displayResult}>
            <br /><br />
            <textarea className="input-text" type="text" onChange={textChangeHandler}/> <br /> <br />
            <div className="wrapper">
                <div className="file-upload">
                <input type="file" accept=".doc, .txt" name="file" onChange={fileChangeHandler}/>
                    <i className="fa fa-arrow-up"></i>
                </div>
            </div>
            <br/>
            <button className="input-submit" value="BUTTON"> 
                    <div className="box-1"><div className="btn btn-one"> <span>READ!</span> </div>  </div>
            </button>
        </form>
    )
}

export default FileUpload
