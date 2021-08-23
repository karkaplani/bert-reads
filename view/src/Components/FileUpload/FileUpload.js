import React from 'react'
import { useForm } from 'react-hook-form'
import './upload.css'

const FileUpload = () => {
    const { register, handleSubmit } = useForm()
    const testSubmit = (data) => {
        console.log(data)
        console.log("Submitted")
    }
    //Write the uploaded file content to the textarea
    return (
        <form onSubmit={handleSubmit((data) => {testSubmit(data)})}>
            <br /><br />
            <textarea className="input-text" type="text" {...register('text')}/> <br /> <br />
            <div className="wrapper">
                <div className="file-upload">
                <input type="file" accept=".doc, .txt" name="text" {...register('text')}/>
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
