const initState = {
        users:[
                { id:1,name:"Thach"},
                { id:2,name:"Dev"},
                { id:3,name:"Dev1"}
        ],
        post:[]
}
const rootReducer = (state = initState,action) =>{
        switch(action.type) {
                case "DELETE_USER":
                  console.log(">>>> run into delete user",action)
                  let users = state.users;
                  users = users.filter(item => item.id !== action.payload.id)
                  return {
                        ...state,users
                  }
                case "CREATE_USER":
                let id = Math.floor(Math.random() *10001);
                let user = {id:id,name:`random +${id}`}
                return {
                        users:[...state.users,user]
                }
                default:
                        return state
                  // code block
              }
}
export default rootReducer