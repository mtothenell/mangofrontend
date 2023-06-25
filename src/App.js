import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    async function save() {

        const getTimeList = await fetch("http://localhost:8080/api/getTimeList", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        const timeList = await getTimeList.json();
        setTime(timeList[1].time)
    }

    const [time, setTime] = useState();

    useEffect(() => {
        save().then(r => {
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Mango Padel
                </p>
                <p>
                    Members: {time}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default App;
