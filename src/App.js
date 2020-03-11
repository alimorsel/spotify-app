import React from 'react';
import Header from "./common/component/Header/Header"
import Router from "./common/navigation/Router"

const App = () => {
    return (
        <div style={style.app}>
            <Header/>
            <div style={style.wrapContainer}>
                <div style={style.container}>
                    <Router/>
                </div>
            </div>

        </div>
    );
}

const style = {
    app: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    wrapContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        width: "90%",
        height: "100%"
    }
}

export default App

