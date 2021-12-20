import React, { Component } from 'react'
import './App.css'
import Profile from './Profile'

export default class App extends Component {
  state={
  
    show:false,
    time : 0
  }

  tickhandler =()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }
  
  componentDidMount(){
    var timer = setInterval(this.tickhandler , 1000)
    this.setState({time : timer})
  }

    handleshow=()=>{
    if(this.state.show == true){
        return this.setState({show : false})
    }
    else{
      return (
        this.setState({show : true})
              )
    }
  }
  render() {
    const displaytime=()=>{
      if(this.state.time < 60)
      {
        return this.state.time +"second(s)"
      }
      else{
        const SS = this.state.time % 60
        const MM = parseInt((this.state.time/60)%60)
        const HH =(this.state.time/(3600)).toFixed(0)
        return `${HH}h : ${MM}m : ${SS}s`
      }
    }

    
    return (
      <div>
          <button onClick={()=> this.handleshow()}>
          {this.state.show ==true ?"Marwa profile":"profile Marwa"}
          </button>
          {this.state.show==true ? <Profile /> : <h1>{displaytime()} </h1>}
          
      </div>
    )
  }
}
