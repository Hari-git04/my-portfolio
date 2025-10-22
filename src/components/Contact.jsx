import React from "react";

const Contact = () => {
  const fields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "message", type: "textarea", placeholder: "Your Message", rows: 6 }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white text-black">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6 max-w-xl text-lg">
        I am passionate about Full Stack / Frontend / Backend Development. If you are HRs, recruiters, or managers interested in working together, you can email me at{" "}
        <span className="font-medium text-gray-800 underline">harigattem04@gmail.com</span>.
      </p>
      <form className="w-full max-w-xl grid gap-4">
        {fields.map((field) =>
          field.type === "textarea" ? (
            <textarea
              key={field.name}
              name={field.name}
              rows={field.rows}
              placeholder={field.placeholder}
              className="px-4 py-3 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-100 transition"
              required
            />
          ) : (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="px-4 py-3 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-100 transition"
              required
            />
          )
        )}
        <button
          type="submit"
          className="px-6 py-3 border border-black bg-black text-white rounded-lg hover:bg-white hover:text-black active:bg-gray-800 active:text-white transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
