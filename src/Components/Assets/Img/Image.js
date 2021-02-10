import React from 'react';
import Images from '../Img/Images';

const Imagess = (props) => {
    console.log(props)
return(
    <div>
        {
            props.imageData.map((theImage, index) => {
                console.log(index)
                console.log(theImage[1])
                return <Images imageData={theImage} key={index} />
            })
        }
    </div>
)

}

export default Imagess;