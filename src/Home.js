import React from "react";
import "./Home.css";
import "./index";
import gsap from "gsap";
import AOS from "aos";
import profile from "./images/mahi.jpg";
import profile1 from "./images/mahi1.PNG";
import work from "./images/work1.jpg";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";

import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import Typed from "react-typed";
import { useEffect } from "react";
// import Draggable from "react-draggable";

const Home = ({ goto, go, gos, con, name, email, subject, message }) => {
  if (name) {
    document.getElementById("text").value = name;
  }
  if (email) {
    document.getElementById("text1").value = email;
  }
  if (subject) {
    document.getElementById("text2").value = subject;
  }
  if (message) {
    document.getElementById("text3").value = message;
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7zj3s5v",
        "template_lb7ed4b",
        e.target,
        "user_WQoMoQbWCP5Sc7DE3QWd2"
      )
      .then(
        (result) => {
          alert.success("Sent Successfully");
        },
        (error) => {
          alert.error("Failed to sent");
        }
      );
  }

  const alert = useAlert();
  useEffect(() => {
    const navOpen = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-menu");
    const navList = document.querySelector(".nav-list");
    // console.log(navContainer);
    // Open and Close Navbar
    navOpen.addEventListener("click", () => {
      const listHeight = navList.getBoundingClientRect().height;
      const containerHeight = navContainer.getBoundingClientRect().height;
      if (containerHeight === 0) {
        navContainer.style.height = `${listHeight}px`;
      } else {
        navContainer.style.height = "0px";
      }
    });

    // Fix Navbar
    const navBar = document.querySelector(".navigation");
    // const topLink = document.querySelector(".goto-top");
    window.addEventListener("scroll", () => {
      const navHeight = navBar.getBoundingClientRect().height;
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
      } else {
        navBar.classList.remove("fix-nav");
      }
    });

    // Smooth Scroll
    const links = document.querySelectorAll(".scroll-link");
    const linksContainer = document.querySelector(".nav-list");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Prevent Default
        e.preventDefault();
        // Scroll to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const el = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fix-nav");
        let position = el.offsetTop - navHeight;

        if (navHeight > 82) {
          position = position + containerHeight;
        } else if (!fixNav) {
          position = position + navHeight + navHeight;
        }

        window.scrollTo({
          left: 0,
          top: position,
        });

        navContainer.style.height = "0";
      });
    });

    gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
    gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
    gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.5, y: -100 });
    gsap.from(".hero p", { opacity: 0, duration: 1, delay: 2, x: -100 });
    gsap.from(".hero .btn1", { opacity: 0, duration: 1, delay: 2.5, x: -20 });
    gsap.from(".hero .btn2", { opacity: 0, duration: 1, delay: 2.5, x: 20 });
    gsap.from(".nav-item", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: 0.2,
    });
    AOS.init();
  }, []);
  const Home_jsx = () => {
    return (
      <div className="home">
        <header id="header" className="header">
          <div className="navigation">
            <nav className="nav d-flex container">
              <div className="nav-header d-flex">
                <div className="logo">
                  <h1>
                    MA<span>H</span>I
                  </h1>
                </div>
                <div className="hamburger">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
              <div className="nav-menu d-flex">
                <ul className="nav-list d-flex">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#about" className="nav-link scroll-link">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#services" className="nav-link scroll-link">
                      Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#portfolio" className="nav-link scroll-link">
                      Portfolio
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#contact" className="nav-link scroll-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="row w-100">
            <div className="col-lg-6 col-md-7 col-sm-12 w-100 pl-5 offset-md-1 offset-lg-1 headercontent">
              <div className="hero container">
                <div>
                  <h1>
                    Hello,I'm <span>Mahendra Reddy</span> <br />
                    And I'm a{" "}
                    <Typed
                      strings={["", " ", "Web Developer"]}
                      typeSpeed={100}
                    />
                    {/* </div> */}
                  </h1>
                  <p>
                    I design & develop a website using the latest technologies.
                    Our design is unique, also the code is valid. I do
                    everything with a professional touch.
                  </p>
                </div>

                <div className="btn-group">
                  <a href="#contact" className="btn btn1">
                    CONTACT US
                  </a>
                  {/* <a href="#contact" className="btn btn2">
                    HIRE US
                  </a> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-2 pl-5  pt-5 "
              style={{ marginTop: "100px" }}
            >
              <div>
                <img
                  className="bannerimg"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  src={profile1}
                  alt="m"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="section about" id="about" ref={goto}>
          <div className="about-center container">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="subtitle">Warm welcome!</div>
              <h2 className="title">About Mahi</h2>
              <p>
                I spend my time creating creative things, and I take great pride
                in my work. Primarily, I am involved in web design and
                development, where I work with various tech stacks to build
                innovative websites and applications
              </p>
              <div className="count">
                {/* <div className="count-1">
                  <span>0</span>
                  <p>Clients worldwide</p>
                </div> */}
                {/* <div className="count-2">
                  <span>0</span>
                  <p>Awards</p>
                </div> */}
                {/* <div className="count-3">
                  <span>24</span>
                  <p>Hours worked</p>
                </div> */}
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src={profile}
                alt="mahi"
                style={{ width: "450px", height: "450px", marginLeft: "100px" }}
              />
            </div>
          </div>
        </section>

        <section
          className="section services"
          style={{ overflowY: "hidden" }}
          id="services"
          ref={gos}
        >
          <div className="services-center container">
            <div className="top">
              <div className="subtitle pt-md-1">What I love to Do!</div>
              <h2 className="title">Our affordable Skills</h2>
              <p>
                I have a lot of specialty, but what I love to do most of the
                time is a real question! Here are the things I really love to
                do!
              </p>
            </div>

            <div className="glide" id="glide1">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__glide__slides">
                  <li className="glide__slide">
                    <div className="glide__service">
                      <span>
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                      <h3>React</h3>
                      <p>
                        I build React theme, maintaining all the react rules &
                        standard, which is 100% valid, SEO friendly.
                      </p>
                    </div>
                  </li>
                  <div className="row skillrow">
                    {/* <Draggable
                      handle=".handle"
                      defaultPosition={{ x: 0, y: 0 }}
                      position={null}
                      scale={1}
                    > */}
                    <div className="col-lg-3  col-md-4 pb-4 handle">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-paint-brush"></i>
                          </span>
                          <h3>HTML & CSS</h3>
                          <p>
                            Slicing HTML & CSS with proper way is a very
                            important thing & I do it most efficient way.
                          </p>
                        </div>
                      </li>
                    </div>
                    {/* </Draggable> */}
                    {/* <Draggable
                      handle=".handle"
                      defaultPosition={{ x: 0, y: 0 }}
                      position={null}
                      grid={[5, 5]}
                      scale={1}
                    > */}
                    <div className="col-lg-3  col-md-4 pb-4 handle col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-heart"></i>
                          </span>
                          <h3>Javascript</h3>
                          <p>
                            Javascript is the #1 programming language at this
                            moment
                          </p>
                        </div>
                      </li>
                    </div>
                    {/* </Draggable> */}
                    {/* <Draggable> */}
                    <div className="col-lg-3  col-md-4 pb-4 col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-image"></i>
                          </span>
                          <h3>Python</h3>
                          <p>
                            Python is the #1 programming language at this moment
                          </p>
                        </div>
                      </li>
                    </div>
                    {/* </Draggable> */}
                    {/* <Draggable> */}
                    <div className="col-lg-3 col-md-4 pb-4 col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-heart"></i>
                          </span>
                          <h3>ReactJs</h3>
                          <p>
                            ReactJs is our love & I can build awesome custom
                            made website using this #1.
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3  col-md-4 pb-4 col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <h3>ExpressJS</h3>
                          <p>
                            ExpressJS is a one of the top framework at this
                            moment
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3  col-md-4 pb-4 col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-heart"></i>
                          </span>
                          <h3>NodeJs</h3>
                          <p>
                            NodeJS is a one of the popular Javascript runtime
                            environment at this moment
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3  col-md-4  pb-4 col-sm">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <h3>MONGODB</h3>
                          <p>
                            MONGODb is a one of the top DB at this moment & I
                            know it very well.
                          </p>
                        </div>
                      </li>
                    </div>
                    {/* </Draggable> */}
                  </div>
                </ul>
              </div>

              <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="<<"></button>
                <button className="glide__bullet" data-glide-dir=">>"></button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section portfolio"
          id="portfolio"
          name="mahiport"
          ref={go}
        >
          <div className="portfolio-center container">
            <div className="top">
              <div className="subtitle">Work I Completed</div>
              <h2 className="title">Our Portfolio</h2>
              <p>
                I have a lot of specialty, but what I love to do most of the
                time is a real question! Here are the things I really love to
                do!
              </p>
            </div>
            <div className="portfolio-container">
              {/* <Draggable> */}
              <div>
                <div
                  className="single"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <img src={project1} alt="m" />
                  <div className="overlay">
                    <div className="details">
                      <h3>Attendance management with Mern stack</h3>
                      <div className="btn-group">
                        <a href="https://github.com/Mahendrareddy190/AttendenceFrontend">
                          <i className="fas fa-plus"></i>
                        </a>
                        <a href="https://attendance-a-z.web.app/">
                          <i className="fas fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
              <div>
                <div
                  className="single"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img src={project2} alt="project1" />
                  <div className="overlay">
                    <div className="details">
                      <h3>Weather forecast with ReactJs</h3>
                      <div className="btn-group">
                        <a href="https://github.com/Mahendrareddy190/weatherForecastFrontEnd">
                          <i className="fas fa-plus"></i>
                        </a>
                        <a href="https://weather-forecast-wp.web.app/">
                          <i className="fas fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
              <div>
                <div
                  className="single"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src={project3} alt="m" />
                  <div className="overlay">
                    <div className="details">
                      <h3>Todo app with ReactJs</h3>
                      <div className="btn-group">
                        <a href="https://github.com/Mahendrareddy190/toDoApp_Frontend">
                          <i className="fas fa-plus"></i>
                        </a>
                        <a href="https://doit-35801.web.app/">
                          <i className="fas fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Draggable> */}
              {/* <Draggable> */}
              <div>
                <div
                  className="single"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <img src={project4} alt="" />
                  <div className="overlay">
                    <div className="details">
                      <h3>MeShow with reactjs</h3>
                      <div className="btn-group">
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                        <a href="https://github.com/Mahendrareddy190/MeshowFrontEnd">
                          <i className="fas fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Draggable> */}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-center container" ref={con}>
            <div
              className="left"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <h2>Contact Us</h2>
              <p>
                Send your requirement using the form & our support team will get
                back to you as soon as possible. Please describe briefly
                everything you need & possibly send some example you like.
              </p>
              <p>
                Note: We hate to send spam messages of our valuable clients.
              </p>
              <div className="bottom">
                <div>
                  <span>
                    <i className="fas fa-map-marked-alt"></i>
                  </span>
                  <h4>Location</h4>
                  <small>Andha Pradesh,India</small>
                </div>
                <div>
                  <span>
                    <i className="far fa-envelope-open"></i>
                  </span>
                  <h4>Email</h4>
                  <small>perammahendra60@gmail.com</small>
                </div>
              </div>
            </div>

            <div
              className="right"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              <div className="contact">
                Message Me
                <form onSubmit={sendEmail}>
                  <div className="fields">
                    <div className="field name">
                      <input
                        type="text"
                        placeholder=" Your Name"
                        required
                        id="text"
                        name="name"
                      />
                    </div>
                    <div className="field email">
                      <input
                        type="email"
                        id="text1"
                        placeholder="Your Email"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      id="text2"
                      placeholder="Subject"
                      required
                      name="subject"
                    />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
                      id="text3"
                      placeholder="Message.."
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p>&copy; mahi Template. 2020 All right reserved!</p>
        </footer>
      </div>
    );
  };

  return <div>{Home_jsx()}</div>;
};

export default Home;
