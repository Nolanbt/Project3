import React, {useEffect} from "react";
import Login from "../components/Login";
import Title from "../components/Title";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom"

const styles = {
    background: "radial-gradient(#21CBF3, black 75%)",
    // background: "radial-gradient(black 40%, #21CBF3)",
    backgroundSize: "cover",
    padding: 225,
}

function Home() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    let history = useHistory();
    let username = "";

    useEffect(()=>{
        if(isAuthenticated){
            history.push("/selection")
            username = user.name 
        }
    },[isAuthenticated])

    return (
        <div style={styles}>
            <Title text={"CODE-E-MON"}/>
            <Login username={username} loginWithRedirect={loginWithRedirect}/>
        </div>
    )
}

export default Home;