import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_whqovnp', 'template_zzk9o4f', form.current, {
        publicKey: '6kczknkn3uaqNoc1m',
      })
      .then(
        () => {
          console.log('message send successfull!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{ marginTop: "80px" }} className="my-4 md:px-3 sm:px-4 lg:px-6">
      <div className="flex flex-wrap w-full justify-evenly">
  <div className="w-64 md:w-96 py-10 md:py-20"> 
    <div className="justify-center p-2 md:p-4 flex">
      <span
        style={{
          background:
            "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
        }}
        className="p-2 md:p-4 flex justify-center rounded-full text-white" 
      >
        <LocalPhoneRoundedIcon />
      </span>
    </div>
    <div>
      <p className="flex justify-center font-['Poppins'] py-1 md:py-2 text-lg md:text-xl"> 
        Phone: +91 8699897969
      </p>
    </div>
  </div>

        <div className="w-64 md:w-96 py-10 md:py-20">
          <div className="justify-center p-2 md:p-4 flex">
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
              }}
              className="p-4 flex justify-center rounded-full text-white"
            >
              <LocationOnRoundedIcon />
            </span>
          </div>
          <div>
            <p className="flex justify-center font-['Poppins'] py-2 text-xl">
              3rd Floor, Plot-16, B-Block, Madhura Nagar, Hyderabad, Telangana
              500038
            </p>
          </div>
        </div>

        <div className="w-64 md:w-96 py-10 md:py-20">
          <div className="justify-center p-2 md:p-4 flex">
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
              }}
              className="p-4 flex justify-center text-center rounded-full text-white"
            >
              <MailRoundedIcon />
            </span>
          </div>
          <div>
            <p className="flex justify-center py-2 font-['Poppins'] text-xl">
              care@restory.in
            </p>
          </div>
        </div>
      </div>

      {/* form design from here */}
      <div className="max-w-lg mx-auto mt-4 px-8 md:px-0">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-bold font-['Poppins']"
            >
              Name
            </label>
            <input
              type="text"
              id="base-input"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-bold font-['Poppins']"
            >
              Email
            </label>
            <input
              type="text"
              id="base-input"
              name="user_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-bold font-['Poppins']"
            >
              Address
            </label>
            <input
              type="text"
              name="user_address"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-bold font-['Poppins']"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
