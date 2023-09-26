
import React from 'react'


const AboutThisPage = () => 
    <section  className="page">
        <h2>About this site </h2>
        <ul className="indented-list">
            <strong>This site was created using following technologies:</strong>
            <li>
                1. Vitejs - dev server that serves source files over native ES modules, with rich built-in features and fast Hot Module Replacement (HMR).    
            </li>

            <li>2. React, React Hooks, React Router v6
                <p>
                This website is implemented as a Single Page Application. <br />
                Projects data is stored as JSON in the Firebease Firestore DB  <br /> 
                Routing of this applications is managed with React Router v6. <br />
                Only Admin of this application can access Profile page. <br />
                From the Profile page, the Admin can edit/add projects that are listed in the Porfolio page. <br />
                The authentication of the Admin is based on email and password. <br />
                Admin credentials are stored in Firebase Firestore DB users collection.
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
            <li>3. Material UI </li>
            <li>4. Font Awesome Library</li>
        </ul>
        </section>



export default AboutThisPage