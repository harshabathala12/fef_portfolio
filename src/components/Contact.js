import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import FadeIn from './FadeIn';

const SectionWrapper = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid #2a2a2a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border-radius: 2px;
  }
`;

const Card = styled.div`
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  max-width: 700px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0, var(--primary), transparent 40%);
    opacity: 0;
    transition: opacity 0.5s ease;
    transform: scaleY(1.5);
  }
  &:hover::before {
    opacity: 0.1;
  }
`;

const FormContainer = styled(Card).attrs({ as: 'form' })`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  background: var(--bg-light);
  border: 1px solid #2a2a2a;
  color: var(--text-light);
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  &::placeholder {
    color: var(--text-medium);
  }
`;

const TextArea = styled.textarea`
  background: var(--bg-light);
  border: 1px solid #2a2a2a;
  color: var(--text-light);
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  &::placeholder {
    color: var(--text-medium);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: var(--text-light);
  padding: 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(148, 102, 255, 0.5);
  }
`;

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setMessage('Message sent successfully!');
        form.current.reset();
        setTimeout(() => setMessage(''), 5000);
      }, (error) => {
        console.log(error.text);
        setMessage('Failed to send message. Please try again.');
        setTimeout(() => setMessage(''), 5000);
      });
  };

  return (
    <SectionWrapper id="contact">
      <Container>
        <FadeIn>
          <SectionTitle>CONTACT ME</SectionTitle>
          <FormContainer ref={form} onSubmit={sendEmail}>
            <Input type="text" name="from_name" placeholder="Your Name" required />
            <Input type="email" name="from_email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
            {message && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{message}</p>}
          </FormContainer>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;