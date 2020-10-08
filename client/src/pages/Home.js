import React from "react";
import Login from "../components/Login"
import Title from "../components/Title"

const styles = {
    background: "radial-gradient(#21CBF3, black 75%)",
    padding: 225
}

function Home() {
    return (
        <div style={styles}>
            <Title />
            <Login />
        </div>
    )
}

export default Home;