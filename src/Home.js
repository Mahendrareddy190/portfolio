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
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import Typed from "react-typed";
import { useEffect } from "react";

const Home = () => {
  function sendEmail(e) {
    e.preventDefault();
    console.log("helo mahi", e.target);
    emailjs
      .sendForm(
        "service_7f4e33j",
        "template_yw1523m",
        e.target,
        "user_ZVE6kaaWoren7oRSg7S3c"
      )
      .then(
        (result) => {
          alert.success("Sent Successfully");
          console.log("mahireddy", result.text);
        },
        (error) => {
          console.log("email.js errors", error.text);
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

      // if (scrollHeight > 500) {
      //   topLink.classList.add("show");
      // } else {
      //   topLink.classList.remove("show");
      // }
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
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#portfolio" className="nav-link scroll-link">
                      Portfolio
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#blog" className="nav-link scroll-link">
                      Blog
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
            <div className="col-lg-6 col-md-4 col-sm-4 pl-5  offset-md-1 headercontent">
              <div className="hero container">
                <div>
                  <h1>
                    Hello,I'm <span>Mahendra Reddy</span> <br />
                    And I'm a{" "}
                    <Typed
                      strings={[
                        "",
                        "",
                        // "FUllStack web developer at jvt.",
                        "Blogger.",
                        "Freelancer.",
                        "Web Developer",
                      ]}
                      typeSpeed={100}
                    />
                    {/* </div> */}
                  </h1>
                  <p>
                    We design & develop a website using the latest technologies.
                    Our design is unique, also the code is valid. We do
                    everything with a professional touch.
                  </p>
                </div>

                <div className="btn-group">
                  <a href="#contact" className="btn btn1">
                    CONTACT US
                  </a>
                  <a href="#contact" className="btn btn2">
                    HIRE US
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-4 pr-5 pt-5 "
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

        <section className="section about" id="about">
          <div className="about-center container">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="subtitle">Warm welcome!</div>
              <h2 className="title">About Mahi</h2>
              <p>
                Jurado team has a lot of awesome people who dedicate their time
                to make some creative things & us really proud of that. Mostly
                we do web design & development work based on WordPress
              </p>
              <p className="top">
                We are working with the Wordpress very beginning of the time.
                Our expert team is very well known, this framework. We love to
                build a website using WordPress.
              </p>

              <div className="count">
                <div className="count-1">
                  <span>0</span>
                  <p>Clients worldwide</p>
                </div>
                <div className="count-2">
                  <span>0</span>
                  <p>Awards</p>
                </div>
                <div className="count-3">
                  <span>24</span>
                  <p>Hours worked</p>
                </div>
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

        <section className="section services" id="services">
          <div className="services-center container">
            <div className="top">
              <div className="subtitle pt-md-1">What we love to Do!</div>
              <h2 className="title">Our affordable services</h2>
              <p>
                Our expert team member has a lot of specialty, but what we love
                to do most of the time I a real question! Here are the things we
                really love to do!
              </p>
            </div>

            <div className="glide" id="glide1">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__glide__slides">
                  <li className="glide__slide">
                    <div classname="glide__service">
                      <span>
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                      <h3>WORDPRES THEME</h3>
                      <p>
                        We build WordPres theme, maintaining all the WP rules &
                        standard, which is 100% valid, SEO friendly.
                      </p>
                    </div>
                  </li>
                  <div
                    className="row"
                    style={{
                      objectFit: "contain",
                      backgroundPosition: "cover",
                    }}
                  >
                    <div className="col-lg-3  col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service ">
                          <span>
                            <i className="fas fa-paint-brush"></i>
                          </span>
                          <h3>PSD to HTML</h3>
                          <p>
                            Slicing PSD to HTML with proper way is a very
                            important thing & we do it most efficient way.
                          </p>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-3  col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-heart"></i>
                          </span>
                          <h3>Javascript</h3>
                          <p>
                            Javascript is the #1 programming language at this
                            moment & we know it very well.
                          </p>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-3  col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-image"></i>
                          </span>
                          <h3>Website design</h3>
                          <p>
                            Design a website is a most important part of
                            building a website & we do it professionally.
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3  col-md-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <h3>Custom WordPress</h3>
                          <p>
                            WordPress is our love & we can build awesome custom
                            made website using this #1 CMS
                          </p>
                        </div>
                      </li>
                    </div>
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

        <section className="section portfolio" id="portfolio" name="mahiport">
          <div className="portfolio-center container">
            <div className="top">
              <div className="subtitle">Work We Completed</div>
              <h2 className="title">Our Portfolio</h2>
              <p>
                We worked with lots of things & we don't upload everything here.
                But we really love to share some of our favorite works which you
                can see in below!
              </p>
            </div>
            <div className="portfolio-container">
              <div
                className="single"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <img src={project1} alt="m" />
                <div className="overlay">
                  <div className="details">
                    <h3> website build using React</h3>
                    <div className="btn-group">
                      <a href="/">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="https://attendance-a-z.web.app/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="single"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={project2} alt="project1" />
                <div className="overlay">
                  <div className="details">
                    <h3>website build using React</h3>
                    <div className="btn-group">
                      <a href="/">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="https://weather-forecast-wp.web.app/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img src={work} alt="m" />
                <div className="overlay">
                  <div className="details">
                    <h3>Psd design</h3>
                    <div className="btn-group">
                      <a href="/">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="single"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <img src={work} alt="" />
                <div className="overlay">
                  <div className="details">
                    <h3>Custom website build</h3>
                    <div className="btn-group">
                      <a href="/">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-center container">
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
                Note: we can't spam you with lots of messages. We hate to send
                spam messages of our valuable clients.
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
                        placeholder="Name"
                        required
                        name="name"
                      />
                    </div>
                    <div className="field email">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      name="subject"
                    />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
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
