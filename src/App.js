import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import alanBtn from "@alan-ai/alan-sdk-web";
import HashLoader from "react-spinners/HashLoader";
const App = () => {
  const abouts = useRef(null);
  const works = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 350px;
  `;
  let [color] = useState("#F71071");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
    alanBtn({
      key: "f81884a4bfd49056c493c96718f4b7dc2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "about") {
          window.scrollTo({
            top: abouts.current.offsetTop,
            behavior: "smooth",
          });
        } else if (commandData.command === "skills") {
          window.scrollTo({
            top: skill.current.offsetTop,
            behavior: "smooth",
          });
        } else if (commandData.command === "work") {
          window.scrollTo({
            top: works.current.offsetTop,
            behavior: "smooth",
          });
        } else if (commandData.command === "contact") {
          window.scrollTo({
            top: contact.current.offsetTop,
            behavior: "smooth",
          });
          if (commandData.id === 0) {
            setname(commandData.data);
          } else if (commandData.id === 1) {
            setEmail(commandData.data);
          } else if (commandData.id === 2) {
            setSubject(commandData.data);
          } else if (commandData.id === 3) {
            setMessage(commandData.data);
          }
        }
      },
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            {loading ? (
              <HashLoader
                css={override}
                color={color}
                loading={loading}
                size={120}
              />
            ) : (
              <Home
                goto={abouts}
                go={works}
                gos={skill}
                email={email}
                name={name}
                subject={subject}
                message={message}
                con={contact}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
