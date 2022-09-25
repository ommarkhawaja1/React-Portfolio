import React from 'react';
import headshot from '../../assets/IMG_9374.PNG.jpg'
function About() {
    return (
      <div>
        <h2>About Me</h2>
        <div>
            <img src={headshot}
            alt="Ommar Khawaja"
            className='img-thumbnail mx-1'
            width={200}
            height={200}
            >
            </img>
        <p>
            I am a full stack web developer with a background in biology, chemistry, and teaching. I have a passion for learning and I am always looking for
            new ways to improve my skills. I recently completed the University of North Carolina's Full Stack Web Development Bootcamp and I am looking for
            opportunities to apply my skills in a professional setting.
        </p>
        </div>
        </div>
    );
}

export default About
