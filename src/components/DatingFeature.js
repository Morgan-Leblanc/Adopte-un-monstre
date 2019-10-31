import React from "react"
import './DatingFeature.css';
import video from '../assets/Video/videoFirst.mp4'
import {Link} from 'react-router-dom'

class DatingFeature extends React.Component{
    render(){
        return(
            <div>
                <video className='datingFeature-video' autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="datingFeature-welcome">
                    <h1>ADOPT A MONSTER</h1>
                    <p>Ready to try ?</p>
                    <Link 
                        to='/Elevator' 
                        className="button"
                        type='button'>
                        YES
                    </Link>
                    <Link
                        to='/ifNoScreen'
                        className="datingFeature-button"
                        type='button'>
                        NO
                    </Link>
                </div>
            </div>
        )
    }
}
export default DatingFeature
