import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import './styles/global.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
// import {FormComponent,Submit} from './views/Example/FormComponent'
// import AddComponent from './views/Example/AddComponent'

// import MyComponent from './views/Example/MyComponent'
const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {reduxStore}>
    <App />
  </Provider>
    {/* <FormComponent/>
    <Submit />
    <AddComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
