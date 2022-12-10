import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oe2ezn5",
        "template_s2zhmix",
        form.current,
        "bypb3IBt5m1ly-pZa"
      )
      .then(
        (result) => {
          toast.success("Successfully message sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <div className="h-[100%]  flex flex-col items-center justify-center">
          <h2 className="text-5xl text-rose-300">Welcome</h2>
          <h3>
            <span className="text-3xl">I am</span> Maruf Hossain
          </h3>
          <h4 className="text-2xl">I am a Web Developer</h4>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/10FnCfG0kBfDpxA6-xdrDpFTteuKgUYjJ/view?usp=sharing"
            target={"_blank"}
          >
            <button className="btn btn-outline mt-2 text-white">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      {/* Projects */}
      <div
        id="projects"
        className="project-parent my-10 text-black text-center text-4xl"
      >
        <h2>My Projects</h2>
        <div className="projects grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/92VgWxp/moto-rangers.png"
                alt="Shoes"
              />
            </figure>
            <p className="text-center text-2xl my-2">Moto Rangers</p>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://moto-rangers.web.app/"
            >
              <button className="btn btn-outline mt-2 mb-5">Live site</button>
            </a>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/5xsPvNn/travel.png" alt="Shoes" />
            </figure>
            <p className="text-center text-2xl my-2">Travel Hour</p>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://travel-hour-d2751.web.app/"
            >
              <button className="btn btn-outline mt-2 mb-5">Live site</button>
            </a>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/4STfv6t/auth-router-context-3dfed-web-app.png"
                alt="Shoes"
              />
            </figure>
            <p className="text-center text-2xl my-2">Learning Hub</p>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://auth-router-context-3dfed.web.app/"
            >
              <button className="btn btn-outline mt-2 mb-5">Live site</button>
            </a>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div
        name="contact"
        className="project-parent my-10 text-black text-center text-4xl"
      >
        <h2>Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center mt-1"
        >
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Input Your Name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Input Your Email"
              className="email input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Message</span>
            </label>

            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Input Your Message"
              required
            ></textarea>
          </div>
          <button type={"submit"} className="btn btn-outline mt-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
