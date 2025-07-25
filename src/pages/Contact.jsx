import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 text-white font-[cinzelregular] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl mb-4 text-yellow-500">Contact Us</h1>
      <p className="text-center max-w-xl text-sm md:text-base">
        We'd love to hear from you! For any inquiries, suggestions, or support,
        feel free to drop us a message at:
      </p>
      <div className="mt-6 text-center space-y-2 text-sm md:text-base">
        <p>Email: support@themancompany.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: Gurugram, Haryana, India</p>
      </div>
    </div>
  );
};

export default Contact;
