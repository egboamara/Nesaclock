import React from 'react';
import Clock from './components/clock'

import './App.css';






constructor
class App extends React.Component{
 constructor(props){
   super(props)
   this.state ={
     date:new Date(),
     name:'Mekarosi',
     country: 'Nigeria'
   }
 }
 render(){
   return(

     <div class='App-header'><Clock></Clock></div>

     //<h1>I am queen and the time is {this.state.date.toDateString()}</h1>
   )
 }
}

export default App;