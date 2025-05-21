import React  from "react";

// ContactForm.js



const Contact = () => {
 

 

  return (

   <div className=" text-white p-8 w-96 mx-auto rounded-md mt-10 h-[calc(100vh-100px) border ]">
      <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
      <form  method="POST" action="https://formspree.io/f/mnqeqbdq">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
           
            
            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500 text-black"
            required
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            
            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500 text-black"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  
    
  );
};

export default Contact;
