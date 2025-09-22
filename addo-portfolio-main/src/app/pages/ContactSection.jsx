'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import IconLink from './IconLink';
import '../styles/ContactSection.css';


const ContactSection = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const modalSpring = useSpring({
    opacity: isContactModalOpen ? 1 : 0,
    transform: isContactModalOpen ? 'translateY(0)' : 'translateY(-100%)',
  });


  return (
    <section>
      <button
        onClick={openContactModal}
        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
      >
        Contact Me
      </button>

      <Modal
        className="popup"
        isOpen={isContactModalOpen}
        onRequestClose={closeContactModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        <animated.div style={modalSpring} className="contact-form-container">
          <h2 className="text-2xl mb-4 font-bold">Contact Me</h2>
          <div className="contact-icons text-center p-5 justify-center">
              <div className="contact-info flex space-x-4 justify-center">
                <IconLink platform="github" url="https://github.com/asd1520" label="GitHub" />
                <IconLink platform="linkedin" url="https://www.linkedin.com/in/addo-davies-jr/" label="LinkedIn"/>
                <IconLink platform = "email" url="mailto:addo.sdavies@gmail.com" label="Email"/>
                <IconLink platform="resume" url="/Addo_Davies_Resume_2025.docx.pdf" label="Resume"/>
              </div>
              <p className="phone-location">Phone: 240-495-0707 | Location: Bowie, Maryland, USA</p>
              <p className="phone-location">Feel free to get in touch for any inquiries or collaboration opportunities.</p>
          </div>
          <br />
          <button onClick={closeContactModal}>Close</button>
        </animated.div>
      </Modal>
    </section>
  );
};

export default ContactSection;
