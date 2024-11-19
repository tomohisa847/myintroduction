import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>連絡先</h2>
      <div style={styles.contactCard}>
        <div style={styles.contactItem}>
          <FaEnvelope style={styles.icon} />
          <span style={styles.text}>T122096@ed.sus.ac.jp</span>
        </div>
        <div style={styles.contactItem}>
          <FaPhone style={styles.icon} />
          <span style={styles.text}>080-7746-3686</span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  contactCard: {
    display: 'inline-block',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#3b82f6',
    marginRight: '10px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default Contact;
