import logo from './logo.svg';
import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './Home';
import React from 'react';
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"

export const NewContext = React.createContext(null)
function App() {

  const [myName,setName] = React.useState("Prabhakar")


  const Action = (payload) => {
    return{
      type:"SAVEDATA",
      payload
    }
  }

  const Reducer = (state = "Prabhakar",action) => {
    switch(action.type)
    {
      case 'SAVEDATA':
        return action.payload;
      default:
        return state
    }
  }

  const all = combineReducers({
    Red:Reducer
  })
  const store = createStore(all)

  

  return (
    <div 
    // className="App"
    >
      <Provider store={store}>
      <NewContext.Provider  value={myName}>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </BrowserRouter>
      </NewContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
