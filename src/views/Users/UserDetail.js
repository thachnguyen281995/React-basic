import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Color from '../HOC/Color'
class UserDetail extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log("check ",res)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data :{},
            });
        }
    }
    handleBack = () =>{
        this.props.history.push('/user')
    }
    render() {
        console.log(this.props)
        let { user } = this.state;
        let checkEmptyObject = Object.keys(user).length === 0;
            return(
                <>
                    {checkEmptyObject === false && 
                    <>
                    <div>{user.first_name}</div>
                    <div>{user.last_name}</div>
                    <div>
                        <img src ={user.avatar}/>
                    </div>
                    <button type ="button" onClick = {() =>this.handleBack()}>Back</button>
                    </>}
                 
                    

                </>
            )
    }
}
export default withRouter(UserDetail);
