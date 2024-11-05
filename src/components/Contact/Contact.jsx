import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "594f7eba-b88a-46cc-981d-c616096422f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("There was an issue submitting the form. Please try again later.");
    }
  };

  return (
    <div className='contact' id='connect'>
      <h1>Contact</h1>
      <div className='contact-box'>
        <div className='contact-left'>
          <h2>Get In Touch !!</h2>
          <p className='contact-para'>I’m always excited to connect with like-minded individuals, collaborate on innovative projects, and explore new opportunities!</p>
      <p className='contact-para'>Feel free to connect with me on:</p>
      <p className='contact-para'><i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/sophiasophia/'>www.linkedin.com/in/sophiasophia</a></p>
      <p className='contact-para' ><i class="fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;<a href='https://github.com/SophiaSophia03'> https://github.com/SophiaSophia03</a></p>

      <br />
      <p className='contact-para'><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;<a href='https://maps.app.goo.gl/ynZfSRCCSvz5u3f38'> Winnipeg (MB), Canada</a></p>
      </div>

        <form onSubmit={onSubmit} className='contact-right'>
        <h2>Fill the Contact Form</h2>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label htmlFor='message'>Message</label>
          <textarea name='message' rows="8" placeholder='Write your Message here!!' required></textarea>
          <button type='submit' className='btn submit'>Submit</button>
          {result && <p className="result-message">{result}</p>}
        </form>
      </div>

    </div>
  );
}

export default Contact;


