import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTodo from "./Todos/ListTodo";
import { MyComponent, ChangeEvent } from "./Example/MyComponent";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import AddComponent from "./Example/AddComponent"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./Users/ListUser"
import UserDetail from "./Users/UserDetail"
function App() {
    return (
        <Router>
            <div className="App">
                    <Nav />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                            <ToastContainer/>
                        </Route>
                        <Route path="/about">
                            <AddComponent />
                        </Route>
                        <Route path="/user" exact>
                            <User />
                        </Route>
                        <Route path="/user/:id">
                            <UserDetail />
                        </Route>
                    </Switch>
                </header>
                {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer /> */}
            </div>
        </Router>
    );
}

export default App;
