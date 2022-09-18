import React from "react";
import { toast } from "react-toastify";
import { Color } from "../HOC/Color";
class AddTodo extends React.Component {
    state = {
        title: "",
    };
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleAddTodo = () =>{
        if(!this.state.title){
            toast.error("Missing Title!")
            return
        }
        
        let todo = {
            id:Math.floor(Math.random() *1001),
            title:this.state.title

        }
        this.props.addNewTodo(todo)
        this.setState({
            title:''
        })
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={this.handleOnChangeTitle} />
                <button className="add" onClick = {() =>this.handleAddTodo()}>Add</button>
            </div>
        );
    }
}
export default Color(AddTodo);
