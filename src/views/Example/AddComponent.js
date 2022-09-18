import React from 'react';
import './AddComponent.scss'
class AddItemComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            userInput :'',
            randomIndex :''
        }
   
        this.handleRandom = this.handleRandom.bind(this);
    }
    handleRandom(){
        
            this.setState({
                randomIndex : Math.floor(Math.random() *20),
                userInput :''
            })
        
        
    }
    handleInput = (e) =>{
        this.setState({
            userInput : e.target.value
        })
    }
    render(){
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
          ];
          const answer = possibleAnswers[this.state.randomIndex]
        return(
            <div className ="add-container">
            <input type="text" value ={this.state.userInput} onChange={(e) =>this.handleInput(e)}></input>
            <button onClick = {this.handleRandom}>Ask the magic Eight Ball</button>
            <h3>Answer:</h3>
            <p>{answer}</p>
            </div>
        )
    }
}
export default AddItemComponent;