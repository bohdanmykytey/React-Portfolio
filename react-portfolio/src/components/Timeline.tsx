import React from "react";
import "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background: "white", color: "rgb(39, 40, 34)"}}
            contentArrowStyle={{borderRight: "7px solid  white"}}
            date="2022 - 2024"
            iconStyle={{background: "#5000ca", color: "rgb(39, 40, 34)"}}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Dow Jones</h3>
            <h4 className="vertical-timeline-element-subtitle">
              New York, NY - Remote
            </h4>
            <p>
              Full-stack Web Development, User Experience Optimization & User
              Retention Specialist.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{background: "#5000ca", color: "rgb(39, 40, 34)"}}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              General Assembly
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              New York, NY - Remote
            </h4>
            <p>Lead Full Stack Engineering Instructor - Part Time</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{background: "#5000ca", color: "rgb(39, 40, 34)"}}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Axcess Financial
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cincinnati, OH - Remote
            </h4>
            <p>Full Stack Developer, Automations/DevOps Engineer</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2019"
            iconStyle={{background: "#5000ca", color: "rgb(39, 40, 34)"}}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              General Assembly
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Stamford, CT</h4>
            <p>General Assembly's Software Engineering Boot Camp Fellow</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
