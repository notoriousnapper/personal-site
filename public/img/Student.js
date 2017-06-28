import React, { PureComponent } from 'react';
import './Student.scss';
import { TileList } from '../../components';

const data = [
  {
      title: "ECE 196",
      text: "Lorem ipsum dolor sit amet, ",
      image: "https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/balloons.jpg",
      hasButton: true,
      button: {
        text: "Enroll",
        to: "/student/enroll"
      }
  },
  {
      title: "Make a Project",
      text: "Lorem ipsum dolor sit amet, ",
      image: "http://lorempixel.com/400/200/",
      hasButton: true,
      button: {
        text: "Build",
        to: "/student/enroll"
      }
  },
  {
      title: "Join The Team",
      text: "Lorem ipsum dolor sit amet, ",
      image: "http://lorempixel.com/400/200",
      hasButton: true,
      button: {
        text: "Join",
        to: "/student/enroll"
      }
  }
]
export default class Student extends PureComponent {
  render () {
    return (
      <div className="container">
        <h1>Students </h1>
          <TileList data={data} ></TileList>
        {/* End of Third Block */}

      </div>
    );
  }
}
