import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </button>

            {isOpen && (
                <ul className="menu">
                    <li>Home</li>
                    <li>Members</li>
                    <li>News</li>
                    <li>Competitions</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}

            <style jsx>
                {`
          .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 20px;
            background: none;
            border: none;
            cursor: pointer;
          }

          .line {
            width: 100%;
            height: 2px;
            background-color: black;
            margin-bottom: 4px;
          }

          .open .line:first-child {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .open .line:nth-child(2) {
            opacity: 0;
          }

          .open .line:last-child {
            transform: rotate(-45deg) translate(5px, -5px);
          }

          .menu {
            list-style-type: none;
            padding: 0;
          }

          .menu li {
            padding: 8px;
          }
        `}
            </style>
        </div>
    );
};

export default HamburgerMenu;
