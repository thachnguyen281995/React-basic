import React from "react";
import axios from "axios";
import {withRouter} from "react-router"
class User extends React.Component {
    state = {
        listUser :[]
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=2')
        // .then(res => console.log(res.data.data))
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewUser = (user) =>{
        this.props.history.push(`/user/${user.id}`)
    }
    render(){
        let listUser = this.state.listUser
        return(
            <div>
                <div className="list-user">
                    {listUser && listUser.length > 0 && listUser.map((item,index)=>{
                        return(
                            <div className="child" key ={item.id} onClick = {() => this.handleViewUser(item)}>
                                {index +1} - {item.first_name} - {item.last_name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default withRouter(User);