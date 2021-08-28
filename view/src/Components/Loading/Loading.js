import React from 'react'
import  { BeatLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div>  
            <br /> <br /> <br />
            <p 
              style={{fontFamily: "Trebuchet MS, sans-serif",
                      fontWeight: "bold ",
                      fontSize: "24px"}}>
                        BERT is reading the text
            </p>
            <BeatLoader/>
        </div>
    )
}

export default Loading



