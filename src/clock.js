import React, { Component } from 'react'

export default class Clock extends Component {
   constructor(props) {
       super(props)

       this.state = {

       }
   }

   componentWillMount() {
       const date = {data:new Date()}
       //this.setState(date)

       this.state.date = new Date()
   }

   componentDidMount() {
       setInterval(() => {
           // this.state.date = new Date
           this.setState({date: new Date()})
   }, 1000)
}


render() {
   return (
       <div>
           <h1 class='timer'>{this.state.date.toTimeString().split(' ')[0]}</h1>
       </div>
   )
}
}