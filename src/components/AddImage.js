import React, { Component } from 'react'
// import axios from 'axios'


export default class AddImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: ''
        }
    }
    handleChange(prop,val){
        //prop is image assgined below in our handle change
        //val is what we type in to the input
        // console.log("prop", prop)
        // console.log('val', val)
        this.setState({
            [prop]: val
        })
    }
    render() {
        return(
            <div>
                <input onChange={e => this.handleChange('image', e.target.value)} placeholder="House Image" type="text"/>
            </div>
            )
    }
}