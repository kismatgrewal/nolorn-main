import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="container py-6 sm:py-10">
        <iframe
          className="w-full h-[300px] sm:h-[400px] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.750558170947!2d151.09382485563026!3d-33.87838107156328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12badc97f1d661%3A0x5017d681632aea0!2sBurwood%20NSW%202134%2C%20Australia!5e0!3m2!1sen!2sin!4v1672247296659!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactMap;
