import React from "react"
import './ifNoScreen.css';
import video from '../assets/Video/videoFirst.mp4'

class ScreenNo extends React.Component{
    render(){
        return(
            <div>
                <video className='ifNoScreen-video' autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="ifNoScreen-welcome">
                    <h1>What a pity !</h1>
                    <p className='ifNoScreen-p'>We had a great monster to introduce you !</p>
                    <input 
                        className="ifNoScreen-button"
                        type='button'
                        value='You changed your mind ?'
                    />
                </div>

            </div>
        )
    }
}
export default ScreenNo;