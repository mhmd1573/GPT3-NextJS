import React from 'react';
// import gpt3Logo from '../../logo.svg';
import styles from './Footer.module.css';
import MainBtn from '../common/MainBtn/MainBtn';

const Footer = () => (
  <div className={styles['gpt3__footer']}>
    <div className={styles['gpt3__footer-heading']}>
      <h1 className={styles['gradient__text']} >Do you want to step in to the future before others</h1>
    </div>

    <div className= {styles['gpt3__footer-btn']}>
      
      <MainBtn value="Request Early Access" />
    </div>

    <div className={styles['gpt3__footer-links']}>
      <div className= {styles['gpt3__footer-links_logo']}>
        <h2>GPT-3</h2>
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className={styles['gpt3__footer-links_div']}>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className={styles['gpt3__footer-links_div']}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>085-132567</p>
      </div>
      <div className={styles['gpt3__footer-links_div']}>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
        <p>Terms & Conditions </p>
      </div>
    </div>

    <div className={styles['gpt3__footer-copyright']}>
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;