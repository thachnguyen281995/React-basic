import React from "react";
import { withRouter } from "react-router";
import {getRandomColor,Color} from '../HOC/Color'
import logo from '../../assets/images/thach.jpg'
import {connect} from 'react-redux'
class Home extends React.Component {
    // componentDidMount(){
    //     setTimeout(() =>{
    //         console.log("check timeout")
    //         this.props.history.push('/todo')
    //     },2000)
    // }
    handleDelete = (user) =>{
        console.log(user)
        this.props.deleteRedux(user)
    }
    handleCreateUser = () => {
        this.props.createUser()
    }
    render() {
        // console.log(this.props)
        let listUser = this.props.dataRedux
        return (
            <>
            <div>Hello World HomePage</div>
            <div>
                <img style ={{width:'400px',marginTop:'20px'}}src = {logo}/>
            </div>
            <div>
            {listUser && listUser.length > 0 && listUser.map((item, index) =>{
                return (
                    <div key = {item.id}> {index + 1 } - {item.name} <span onClick = {() =>this.handleDelete(item)}>X</span></div>
                )
            })}
            <button onClick = {() =>this.handleCreateUser()}>Add New User</button>
            </div>
            </>
            
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux : state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteRedux : (userDelete) =>dispatch({
            type:"DELETE_USER",
            payload:userDelete
        }),
        createUser : (userCreate) =>dispatch ({
            type:"CREATE_USER"
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home))