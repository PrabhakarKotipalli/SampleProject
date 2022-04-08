import React from "react";
import {NewContext} from "./App"
import {useSelector} from "react-redux"
const Home = () => {
    const content = useSelector(state=>state.Red)
    const c = React.useContext(NewContext)
    return(
        <div>
        <h2>Welcome to the homepage! {content}</h2>
        <p>You can do this, I believe in you.</p>
        </div>
    )
}

export default Home
