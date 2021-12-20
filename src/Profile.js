import React, { Component } from 'react'
import "./App.css"
export default class Profile extends Component {
    state={
        name : "Marwa " ,
        profession: 'Développeur Full-Stack React / Js',
        bio : "", 

    }
    render() {
        return (
            <div>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.profession}</h2>
                    <p>{this.state.bio}</p>
            </div>

        )
            }
}