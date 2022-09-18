import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodos: [
                { id: "todo1", title: "Doing homework" },
                { id: "todo2", title: "Making Video" },
                { id: "todo3", title: "Fixing bugs" },
            ],
            editTodos: {},
        };
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });
        toast.success("Add Todolist Successfully!");
    };
    handleEditTodo = (todo) => {
        let {editTodos , listTodos} = this.state
        let checkEmptyObject = Object.keys(editTodos).length === 0;
        // ! save
       if(checkEmptyObject === false && editTodos.id === todo.id){
        let listTodosCopy = [...listTodos]
        let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
        listTodosCopy[objIndex].title = editTodos.title
        this.setState({
            listTodos:listTodosCopy,
            editTodos : ''
    
        })
        toast.success("Update Todolist Successfully!");
        return
       }
     

       
        this.setState({
            editTodos: todo,

        });
    };
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter((item) => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos,
        });
        toast.warning("Delete Todolist Successfully!");
    };
    handleOnChange = (e) => {
        let editTodosCopy = {...this.state.editTodos}
        console.log(editTodosCopy)
        editTodosCopy.title = e.target.value
        this.setState({
            editTodos : editTodosCopy
        })
    }
    render() {
        let { listTodos, editTodos } = this.state;
        let checkEmptyObject = Object.keys(editTodos).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className="list-todo-content">
                    {listTodos &&
                        listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                  {checkEmptyObject === true ? 
                                  <span>{index + 1} - {item.title}</span>
                                  :
                                  <>
                                    {editTodos.id === item.id ? 
                                    <span>{index +1} - <input type="text" value={editTodos.title}
                                        onChange = {(e) =>this.handleOnChange(e)}
                                    /></span>
                                    :
                                    <span>{index + 1} - {item.title}</span>

                                    }
                                  </>
                                  }
                                   
                                  
                                    <div>
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {checkEmptyObject === false && editTodos.id === item.id ? "save":"edit"}
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>  
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
export default ListItem;
