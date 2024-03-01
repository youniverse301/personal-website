import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import NET from 'vanta/src/vanta.net';
import ContactForm from './ContactForm';
import { handleScroll } from './scrollFuncs';
import membersOnlyImage from './images/members-only2.png';
import todoListImage from './images/todo-list.png';
import memoryGameImage from './images/memory-game.png';
import cvProjectImage from './images/cv-project.png';
import githubImg from './images/github-logo.png';
import emailImg from './images/email-logo.png';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [activeSection, setActiveSection] = useState('section1');
  const [isVantaLoaded, setIsVantaLoaded] = useState(false);

  useEffect(() => {
    try {
      const netEffect = NET({
        el: '#vanta',
        mouseControls: true,
        touchControls: false,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        maxDistance: 18.00,
        points: 10.00,
        spacing: 18.00,
        color: 0xF1BDF2,
        backgroundColor: 0x1A1A1A,
        complete: () => {
          console.log('done')
          setIsVantaLoaded(true);
        }
      });
        console.log('done')
        setIsVantaLoaded(true);
    } catch (error) {
      console.error('Error initializing Vanta Net:', error);
    }
  }, [])

  useEffect(() => {
    try {
      NET({
        el: '.test2',
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 7.00,
        maxDistance: 10.00,
        spacing: 20.00,
        color: 0xEEF280,
        backgroundColor: 0x1A1A1A,
      })
    } catch (error) {
      console.error('Error initializing Vanta Net:', error);
    }
  }, [])

  useEffect(() => {
    const cleanup = handleScroll(setActiveSection, {
      section1: section1Ref,
      section2: section2Ref,
      section3: section3Ref,
    });

    return () => {
      cleanup();
    };
  }, [section1Ref, section2Ref, section3Ref]);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const animationClass = isVantaLoaded ? 'animate' : '';

  return (
    <div className={`app ${animationClass}`}>
      <div className={"bg section1"} ref={section1Ref} id="vanta">
        <div className='homeTextContainer'>
          <div className='homeText'>Hello, I'm
            <span className='specialHomeText'> Bjorn</span>
            .
          </div>
          <div className='homeText2'>I'm a front-end developer.</div>
          <button className="viewWorkBtn" onClick={() => scrollToSection(section2Ref)}>
            View my work <span className="arrow"></span>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </button>
        </div>
      </div>
      <div className='navBar'>
          <button className={`navBtn ${activeSection === 'section1' ? 'active' : ''}`} onClick={() => scrollToSection(section1Ref)}>Home</button>
          <button className={`navBtn ${activeSection === 'section2' ? 'active' : ''}`} onClick={() => scrollToSection(section2Ref)}>Projects</button>
          <button className={`navBtn ${activeSection === 'section3' ? 'active' : ''}`} onClick={() => scrollToSection(section3Ref)}>Contact</button>
      </div>
      <div className='test2'>
      <div className={"section2"} ref={section2Ref}>
        <h2 className='sectionTitle'>Projects
          <div className='sectionTitleBack'></div>
        </h2>
        <div className='project'>
          <div className='projectImageContainer'>
            <img className='projectImage' alt='Image of members-only application' src={membersOnlyImage}></img>
          </div>
          <div className='projectInfo'>
            <h3 className='projectTitle'>Members only chat App</h3>
            <p className='projectDescrip'>Full stack message board project built with
              Express.js and MongoDB</p>
            <a className='fillA' href='https://members-only-production-2ed2.up.railway.app/' target='_blank'>
              <button className="fill">Live App</button>
            </a>
            <a className='fillA' href='https://github.com/youniverse301/members-only' target='_blank'>
              <button className="fill">Repository</button>
            </a>
          </div>
        </div>
        <div className='projectRight'>
          <div className='projectInfoRight'>
            <h3 className='projectTitle'>To do List App</h3>
            <p className='projectDescrip'>An application to keep track
              of your tasks built with React</p>
            <a className='fillA' href='https://youniverse301.github.io/todo-list/' target='_blank'>
              <button className="fill">Live App</button>
            </a>
            <a className='fillA' href='https://github.com/youniverse301/todo-list' target='_blank'>
              <button className="fill">Repository</button>
            </a>
          </div>
          <div className='projectImageContainerRight'>
            <img className='projectImage' alt='Image of members-only application' src={todoListImage}></img>
          </div>
        </div>
        <div className='project'>
          <div className='projectImageContainer'>
            <img className='projectImage' alt='Image of members-only application' src={memoryGameImage}></img>
          </div>
          <div className='projectInfo'>
            <h3 className='projectTitle'>Memory card game App</h3>
            <p className='projectDescrip'>Neon Genesis Evangelion themed
              memory card game built with React</p>
            <a className='fillA' href='https://youniverse301.github.io/memory-game/' target='_blank'>
              <button className="fill">Live App</button>
            </a>
            <a className='fillA' href='https://github.com/youniverse301/memory-game' target='_blank'>
              <button className="fill">Repository</button>
            </a>
          </div>
        </div>
        <div className='projectRight'>
          <div className='projectInfoRight'>
            <h3 className='projectTitle'>Live CV Application</h3>
            <p className='projectDescrip'>An application to make mock 
            resumes built with React</p>
            <a className='fillA' href='https://youniverse301.github.io/cv-project/' target='_blank'>
              <button className="fill">Live App</button>
            </a>
            <a className='fillA' href='https://github.com/youniverse301/cv-project' target='_blank'>
              <button className="fill">Repository</button>
            </a>
          </div>
          <div className='projectImageContainerRight'>
            <img className='projectImage' alt='Image of members-only application' src={cvProjectImage}></img>
          </div>
        </div>
      </div>
      <div className={"section3"} ref={section3Ref}>
        <h2 className='sectionTitle'>Contact
          <div className='sectionTitleBack'></div>
        </h2>
        <div className='section3Container'>
        <p>Have a question or want to work together? 
          Leave your details and I'll get back to you as 
          soon as possible.
        </p>
        <ContactForm />
        </div>
        <div className='footer'>
        <div className='footerBtnContainer'>
            <div className="center-con" onClick={() => scrollToSection(section1Ref)}>
            <div className="round">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a className='githubImgA' href='https://github.com/youniverse301?tab=repositories'>
            <img className='githubImg' src={githubImg}></img>
          </a>
          <a className='emailImgA' href='mailto:bjornengedev@gmail.com'>
          <img className='emailImg' src={emailImg}></img>
          </a>
          <p className='footerText'>Bjorn Enge ©2024</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
