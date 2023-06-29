import React from 'react';
import HamburgerMenu from './Components/HamburgerMenu';
import './App.css';


const App = () => {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <h1>Mango padel</h1>
                    <HamburgerMenu/>
                </div>
                <div className="section">Section 1</div>

            </div>
        </>
    );
};

export default App;
