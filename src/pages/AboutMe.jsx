
import React from 'react'
import cat_11 from '../images/cat_11.png'
import backyard_2023 from '../images/backyard_2023_1.jpg'
import spring_backyard_2022 from '../images/spring_backyard_2022.jpg'
import backyard_2023_2 from '../images/backyard_2023_2.jpg'
import backyard_2023_4 from '../images/backyard_2023_4.jpg'
import mexican_sunflower from '../images/mexican_sunflower.png'
import sunflower from '../images/sunflower.png'
import orange_cat from '../images/orange_cat.png'
import franky from '../images/franky.png'
import cat4 from '../images/cat4.jpg'
import cat6 from '../images/cat6.png'
import cat7 from '../images/cat_7.png'


const AboutMe =() => 
    <section className='page'>
        <h2>About Me</h2>
        <div className="about-me-wrapper">
            <ul className="indented-list">
            <p>
                I am a software engineer with passion for front-end technologies.
                I like the visual aspect of developing UI and I am obsessed with clean, consistend and intuitive interfaces. 
            </p>
            <p>
                I helped  shape design decisions related to performance while accounting for the needs of end users and businesses.
                I would always take on the initiative to research multiple UI options and put forth the best technical solution that simplified the user’s workflow.
                <br />
                I am strong advocate for development best practices including progressive enhancement, accessibility, performance, scalability, and maintainability.
            </p>
                <li><strong>Hobbies</strong>
                    <p> Gardening - I converted 'a boring lawn only backyard' to an oasis for many birds and butterflies.</p>
                    <div className='flex-container'>
                        <div className="flex-item"><img src={backyard_2023} alt="c" /></div>
                        <div className="flex-item"><img src={spring_backyard_2022} alt="c" /></div>
                        <div className="flex-item"><img src={backyard_2023_2} alt="c" /></div>
                        <div className="flex-item"><img src={backyard_2023_4} alt="c" /></div>
                        <div className="flex-item"><img src={mexican_sunflower} alt="c" /></div>
                        <div className="flex-item"><img src={sunflower} alt="c" /></div>
                    </div>
                    <p></p>
                    <p></p>
                    <p>I volunteer in no kill animal shelter - helping these little 'furry monsters' to find forever home. </p>
                    <div className='flex-container'>
                        <div className="flex-item"><img src={cat_11} alt="c" /></div>
                        <div className="flex-item"><img src={orange_cat} alt="c" /></div>
                        <div className="flex-item"><img src={franky} alt="c" /></div>
                        <div className="flex-item"><img src={cat4} alt="c" /></div>
                        <div className="flex-item"><img src={cat6} alt="c" /></div>
                        <div className="flex-item"><img src={cat7} alt="c" /></div>
                    </div>
                </li>

                <li><strong>Weaknesses</strong>
                    <p>Chooocooolate !!!</p>
                </li>
            </ul>
        </div>
    </section>


export default AboutMe
