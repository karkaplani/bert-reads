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
            <input id="real-input" className="input-submit" type="submit" name="submit" value="READ!"/>
            <div className="box-1">
                <div className="btn btn-one">
                    <input className="input-submit" type="submit" name="submit" value="READ!"/>
                </div>
            </div>
        </form>
    )
}

export default FileUpload
