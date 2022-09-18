import React from "react";
import ChildComponent from './ChildComponent'
class FormComponent extends React.Component {
    state = {
        titleJob :"",
        salary:"",
        jobs :[
            {id:1,title:"Developers",salary:"500"},
            {id:2,title:"Testers",salary:"400"},
            {id:3,title:"Manager",salary:"1000"}
        ]
        
    }
    
    handleOnchange = (e) =>{
        this.setState({
            titleJob:e.target.value,
        })
    }
    handleOnchangeLastName = (e) =>{
        this.setState({
            salary:e.target.value,
        })
    }
    handleClick = (e) =>{
        e.preventDefault()
        if(!this.state.titleJob || !this.state.salary){
            alert("Missing params required")
            return
        }
        this.setState({
            jobs:[...this.state.jobs,{
                id:Math.floor(Math.random() *1001),
                title:this.state.titleJob,
                salary:this.state.salary
            }]
        })
        this.setState({
            titleJob : '',
            salary : ''
        })
    }
    // componentDidUpdate(nextProps,nextState) {
    //     console.log('>>run didupdate','next state:',nextState,'next props:',nextProps)
    // }
    handleDelete = (e)=>{
        // ! C1
        e.target.parentElement.remove()
        // ? Not Solution
        // let currentJob = this.state.jobs
        
        // currentJob = currentJob.filter((item) => item.id !== 1)
        // this.setState({
        //     jobs: currentJob
        // })
        
    }
    
    
    
    render() {
        return (
     <>
               <div className = "form">
                <form>
                    <label htmlFor="fname">Title Job</label>
                    <br />
                    <input type="text" value={this.state.titleJob} onChange ={(e)=>this.handleOnchange(e)}/>
                    <br />
                    <label htmlFor="lname">Salary</label>
                    <br />
                    <input type="text" value={this.state.salary} onChange ={(e)=>this.handleOnchangeLastName(e)}/>
                    <br />
                    <br />
                    <input type="submit" value="Submit" onClick = {(e) =>this.handleClick(e)}/>
                </form>
            </div>
            {/* <ChildComponent name={this.state.firstName} age ={"27"} jobs={this.state.jobs}/> */}
            <ChildComponent arrayJob = {this.state.jobs} handleDelete = {this.handleDelete}/>
            

     </>
        );
    }
}
class Submit extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            input:"",
            submit:""
        }
    }
    handleOnchange = (e) =>{
        this.setState({
            input:e.target.value
        })
    }
    handleSubmit = (e) =>{
        this.setState({
            submit:this.state.input
        })
    }
    
    render(){
        return(
            
            <>
                <div>
            
            <input type="text" onChange ={(e) =>this.handleOnchange(e)} value ={this.state.input}/>
            <button onClick ={(e)=>this.handleSubmit(e)}>Click me</button>
            <h3>{this.state.submit}</h3>
        </div>
            </>
        )
    }
    
}
export {FormComponent,Submit};
