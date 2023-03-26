import './contactStyle.scss';
import { MdMessage } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact' className='sectionContainerContact'>
      <div className='sectionCenterContact'>
        <h1 className='contactTitle'>Contact</h1>
        <div className='underline'></div>
        <p className='contactTitleText'>
          If you want to <span>contact me</span> , fill out the form below. I
          will answer you as soon as I can.
        </p>
        <div className='formContainer'>
          <form action='https://formspree.io/f/xeqwalvp' method='POST'>
            <div className='formInput'>
              <label htmlFor='name'>First Name</label>
              <br />
              <input
                type='text'
                name='name'
                placeholder='Your name...'
                className='singleFormInput'
              />
            </div>
            <div className='formInput'>
              <label htmlFor='email'>Email</label>
              <br />
              <input
                type='email'
                name='email'
                placeholder='Your email...'
                className='singleFormInput '
              />
            </div>
            <div className='formInput'>
              <label htmlFor='message'>Message</label>
              <br />
              <textarea
                name='message'
                placeholder='Your message...'
                className='singleFormInput textArea'
              ></textarea>
            </div>
            <div className='formInput formInputSubmit'>
              <button type='submit' className='submitBtn'>
                <MdMessage className='submitIcon' />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
