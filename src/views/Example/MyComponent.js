import React from 'react';
class MyComponent extends React.Component {
    constructor() {
      super();
      this.state ={
        name:"thach",
        
      }
    }
    handleOnchange = (e) =>{
        this.setState({
            name:e.target.value,
            channel : "abc"
        })
    }
    render() {
      return <div>
        <input value = {this.state.name} onChange = {(e) => this.handleOnchange(e)} type="text"></input>
        <h1>{this.state.name}</h1>
        <p>Channel {this.state.channel}</p>
      </div>;
    }
  }

  class ChangeEvent extends React.Component {
    constructor(props) {
        super(props)
     this.state = {
      visibility:false
     }
     this.handleOnchange = this.handleOnchange.bind(this)
    }
  handleOnchange = () =>{
    this.setState(prev =>({
      visibility : !prev.visibility
    }))
  }
    render(){
        if(this.state.visibility){
          return (
            <button onClick ={this.handleOnchange}>Click Me</button>
          )
        }
        else{
          return(
            <button onClick ={this.handleOnchange}>You Clicked</button>
          )
        }
    }
  
  }

  export  {MyComponent , ChangeEvent};
