import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../App.css";

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            {/* High school info */}
            <VerticalTimelineElement 
                className="verticla-timeline-element--education" 
                date="2013 - 2017"
                iconStyle={{background: "#3e497a", color:"#fff"}} 
                icon={<SchoolIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Ebenezer High, Mahwelereng Zone 2</h3>
                    <p>National Senior Certificate</p>
                </VerticalTimelineElement>

                {/* Varsity info */}
                <VerticalTimelineElement 
                className="verticla-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color:"#fff"}} 
                icon={<SchoolIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Tshwane University of Technology</h3>
                    <h4>National Diploma in Information Technology</h4>
                    <p>NDIP IT</p>
                    <div className='verticla-timeline-element--subtitle'>
                        <h4>Student Mentor</h4>
                        <p>--------</p>
                        <p>2019 - 2021</p>
                    </div>
                    <div>
                        <h4 className='verticla-timeline-element--subtitle'>Lab Tutor</h4>
                        <p>--------</p>
                        <p>2020</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="verticla-timeline-element--work" 
                date="2022"
                iconStyle={{background: "#e9d35b", color:"#fff"}} 
                icon={<WorkIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Tshimologong Precinct</h3>
                    <h4>Intern</h4>
                    <p>Software Development</p>

                </VerticalTimelineElement>
        </VerticalTimeline>
        <hr/>
        <div>
        <VerticalTimeline lineColor='#3e497a'>
            {/* High school info */}
            <VerticalTimelineElement 
                className="verticla-timeline-element--education" 
                date="2013 - 2017"
                iconStyle={{background: "#3e497a", color:"#fff"}} 
                icon={<SchoolIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Ebenezer High, Mahwelereng Zone 2</h3>
                    
                </VerticalTimelineElement>

                {/* Varsity info */}
                <VerticalTimelineElement 
                className="verticla-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color:"#fff"}} 
                icon={<SchoolIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Tshwane University of Technology</h3>

                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="verticla-timeline-element--work" 
                date="2022"
                iconStyle={{background: "#e9d35b", color:"#fff"}} 
                icon={<WorkIcon/>}>
                    <h3 className='verticla-timeline-element--title'>Tshimologong Precinct</h3>

                </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
  );
}

export default Experience;