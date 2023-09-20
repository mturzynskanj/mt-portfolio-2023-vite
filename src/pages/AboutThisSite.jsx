
import React from 'react'


const AboutThisPage = () => 
    <section  className="page">
        <h2>About this site </h2>
        <ul className="indented-list">
            <strong>This site was created using following technologies:</strong>
            <li>
                1. Vitejs - dev server that serves source files over native ES modules, with rich built-in features and fast Hot Module Replacement (HMR).    
            </li>

            <li>2. React, Redux, React Router v4, Firebase
                <p>
                This website is implemented as a Single Page Application. <br />
                Database of the projects is stored as JSON in the Firebease Realtime Database  <br /> 
                Routing of this applications is manged with React Router v4
                </p>
            </li>

            <li>2. Sass
                <p>
                    Layout of the page is implemented with Flexbox. <br/>
                    For styling and visual effects I used Sass preprocessor.<br /> 
                    I created multiple sass mixin functions that I repeatedly used  to
                    implement animations and transitions.

                </p>
            </li>

            <li>3. Font Awesome Library</li>
        </ul>
        </section>



export default AboutThisPage