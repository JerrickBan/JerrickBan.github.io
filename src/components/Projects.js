import React from 'react';
import '../App.css';
import Header from './Header.js';
import Card from 'react-bootstrap/Card';
import { CRow } from '@coreui/react';
import Addcard from './Addcard.js';



function Projects() {

    var horizon_txt = "Collaborated and Communicated effectively with 3 other team members to publish a functioning Solar Power Consulting web application to the internet within 2 days. Organized, Analyzed, and Extracted online data about residential solar systems using Python libraries to enable back-end development.";
    var horizonview = "https://sol-solutions.vercel.app/";
    var horizongit = "https://github.com/JerrickBan/project-horizon";

    var electro_txt = "Provides a digital trading platform for local communities and schools to reuse unwanted electronics in order to reduce electronic waste. Programmed the website from scratch with self-taught programming languages (HTML, CSS, bootstrap). Developed and managed the back-end databases using PHP."
    var electroview = "http://electroternity.net/"
    var electrogit = "https://github.com/JerrickBan/Electroternity"


    var employ_txt = "Analyzed, cleaned, and visualized various datasets relating to US Unemployment using Python and its libraries such as pandas and plotly. Developed a front-end web application using HTML/CSS/Bootstrap as a platform to embed our visualizations.";
    var employgit = "https://github.com/JerrickBan/ECProject";

    var cs4good_txt = "Effectively collaborated with a small group of students to build and develop a web application for the club. Mentored group members in HTML/CSS to encourage a more open and friendly environment";
    var cs4goodgit = "https://github.com/JerrickBan/cs4great";

    var harvard_txt = "Created a program in C that can identify the type of credit card based on its number. Coded a program in Python that can match a DNA sequence to the person with the closest DNA. Simulated stock trading with the Python micro web framework Flask (python and html). Designed and Programmed an infrared sensor using Arduino/C++."
    var harvardview = "https://www.youtube.com/watch?v=Qf-yxTwh07E";

    return (
        
        <>
            <Header section="Projects"/>
            <div className="projects">
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <Addcard img="/projectimgs/horizon.jpg" name='Project: Horizon' txt={horizon_txt} date="March 2022" view={horizonview} git={horizongit}/>
                <Addcard img="/projectimgs/horizon.jpg" name='Electroternity' txt={electro_txt} date="May 2017 - Aug 2018" view = {electroview} git={electrogit}/>
                <Addcard img="/projectimgs/horizon.jpg" name='Engineering Computing US Unemployment Webpage' txt={employ_txt} date="April 2022 - May 2022" git={employgit}/>
                <Addcard img="/projectimgs/horizon.jpg" name='CS4Good - REAL Services' txt={cs4good_txt} date="Jan 2022 - May 2022" git={cs4goodgit}/>
                <Addcard img="/projectimgs/horizon.jpg" name='Harvard CS50x Intro to Computer Science' txt={harvard_txt} date="May 2020 - August 2020" view={harvardview}/>
            </CRow>
            </div>
        </>

    )
}

export default Projects;