import React from "react"
import './Elevator.css';
import back from '../assets/img/elevator-opened.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return state  
  }

class Elevator extends React.Component{
    state={
        monster : [], 
        isOpen : false 
    }


    getMonsters = () => {
        const randomId=Math.floor(Math.random() * (19))
        axios.get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`)
        .then(response => response.data)
        .then(data => {console.log("test Api", data) || 
        this.setState({monster: data.monsters[randomId]})
        this.setState({isOpen : !this.state.isOpen})
    })
         }
         _userArray() {
            const action = { type : "USER_LOADED", value : this.state.monster}
            this.props.dispatch(action)
        }

         componentDidMount(){
            this.getMonsters()
         }
         
    

    render(){
        console.log('je montre state global', this.props)
        return(
            
            <div className="container"> 
            <img className="background" src={back}></img>
            <input type='button' className="elevatorButton" onClick={()=> this.getMonsters()}></input>
            <div className = "hideDoors">
                <div className="firstHide"></div>
                <div className="firstHide"></div>
            </div>
            <>
                { this.state.isOpen ?
                <>
                <div className= "doors">
                <div className="elm sliding-door left opened"></div>
                <div className="elm sliding-door right "></div>
                <img className="monsters_left" src={this.state.monster.picture} ></img> 
                </div>
                <div className="description_left">
                <h1>The name of this potential soulmate :</h1>
                    <br/><p>{this.state.monster.name}</p>
                    <h1>His level of sex appeal :</h1> 
                    <br/><p>{this.state.monster.level}</p>
                    <h1>Here, you will understand why he's the one for you :</h1>
                    <br/><p>{this.state.monster.description}</p>
                </div>
                </>
                    :
                <>
                <div className= "doors">
                <div className="elm sliding-door left"></div>
                <div className="elm sliding-door right opened"></div>
                <img className="monsters_right" src={this.state.monster.picture} ></img>
                </div>
                <div className="description_right">
                    <h1>The name of this potential soulmate :</h1>
                    <br/><p>{this.state.monster.name}</p>
                    <h1>His level of sex appeal :</h1> 
                    <br/><p>{this.state.monster.level}</p>
                    <h1>Here, you will understand why he's the one for you :</h1>
                    <br/><p>{this.state.monster.description}</p>
                </div>
                </>
                }
                
            </>     
            
            
            <Link 
                onClick = {() => this._userArray()}
                to='/CinemaDate' 
                className="inLove"
                type='button'>
                    MATCH
            </Link>

            </div>
                
        )
    }
}
export default connect(mapStateToProps)(Elevator);
