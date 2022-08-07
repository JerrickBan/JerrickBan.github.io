import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaVolumeUp, FaSun} from 'react-icons/fa';


const Timeline = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor = 'orange'>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                iconStyle={{background: 'lightblue', color: '#000'}}
                icon={<FaVolumeUp />}
                contentStyle={{background: 'orange', color: 'black'}}
                date='Jan 2022 - Current'>
                    <h1 className="vertical-timeline-element-title"> Undergraduate Research Assistant</h1>
                    <h3 className="vertical-timeline-element-subtitle">University of Notre Dame</h3>
               
                    <ul>
                        <li>Collaborated with a Ph.D student to develop and publish an Adobe Premiere Pro extension, MIMOSA, designed to separate the independent sound sources from the original soundtrack and ground them to their visual counterparts in the video by visually tracking the positions of the sound sources, providing users with a more immersive video experience</li>
                        <li>Delivered weekly updates detailing project progression and challenges, revisions in workflow, and the formation of new weekly objectives to move the project forward at an efficient pace</li>
                        <li>Prototyped a wireframe of the UI of the web application using Figma</li>
                        <li>Led the development of the Adobe Premiere Pro Extension using Adobe's own toolkit, ExtendScript, as well as Javascript and HTML/CSS</li>
                        <li>In the process of co-publishing a research paper for the Adobe Premiere Pro extension project</li>
                        <li>Exposed to Tensorflow through the DCASE 2020 FUSS baseline model for sound separation</li>
                    </ul>
                
                </VerticalTimelineElement>    
                <VerticalTimelineElement className='vertical-timeline-element--work'
                iconStyle={{background: 'lightblue', color: '#000'}}
                icon={<FaSun />}
                contentStyle={{background: 'orange', color:'black'}}
                date='May 2022 - Aug 2022'>
                    <h1 className="vertical-timeline-element-title">Data Science Intern</h1>
                    <h3 className="vertical-timeline-element-subtitle">First Solar</h3>
               
                    <ul>
                        <li>Analyzed, automated, and visualized solar module performance data to enable faster and more reliable performance prediction and analytics.</li>
                        <li>Transcribed JMP plots for field and laboratory data to Python using packages such as Seaborn, Pandas, and Numpy, and visualized these plots using Streamlit. Achieved an 80% reduction of the average original runtime.</li>
                        <li>Developed a program to periodically move a large number of images of solar modules within the File Explorer using Python, eliminating the need for manual operation.</li>
                        <li>Improved upon and modified the solar panel PV degradation models for various solar technologies, reducing the risk of warranty returns of the solar module products.</li>
                    </ul>
                
                </VerticalTimelineElement> 
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;