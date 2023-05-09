import React from "react";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-contact pb-10">
      <div class="container-1">
        <img src={contact} alt="Snow" className="w-full" />
        {/* <div class="centered font-semibold text-3xl">Contact</div> */}
      </div>
      <div className="lg:px-12 mx-8 mt-9">
        <h1 className="contact-title">Contact me</h1>

        <div className="border-left flex items-center font-bold mt-8">
          <p className="ml-3 text-[#000000]">Email: rishi@xtraliving.org</p>
        </div>
      </div>

      <div className="">
        <h1 className="text-center font-bold">Contact Our Team</h1>

        <div className="flex justify-center mt-10">
          <a href="https://zfrmz.in/1fPYZ8UFus5It0Dvp7Dl" target="blank">
            <button className="fill-btn ">FILL THE FORM</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
