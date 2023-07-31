import React from "react";
import styles from "./Main.module.css";
import auth from "../assests/auth.svg";
const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1>
            GPT-4 is OpenAI’s most advanced system, producing safer and more
            useful responses
          </h1>
          <br />
          <div className={styles.btns}>
            <div className={styles.lbtn}>
              <span className={styles.span}>Try On ChatGPT Plus</span>
              <button className={styles.button}>
                <img src={auth} style={{ height: "25px" }} alt="..." />
              </button>
            </div>
            <div className={styles.rbtn}>
              <span
                className={styles.span}
                style={{
                  textDecoration: "underline",
                  textUnderlinePosition: "under",
                }}
              >
                View GPT-4 research
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vid}>
        <iframe
          src="https://player.vimeo.com/video/807698838?h=30a7b63cdf"
          className={styles.vide}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.stroke}>
        <hr />
        <h1>
          GPT-4 can solve difficult problems with greater accuracy, thanks to
          its broader general knowledge and problem solving abilities.
        </h1>
      </div>
      <div className={styles.subheading}></div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <ul className={styles.list}>
            <li className={styles.firstele}>Creativity</li>
            <li>Visual Input</li>
            <li>Longer Context</li>
          </ul>
          <hr
            style={{
              width: "97.8%",
              backgroundColor: "red",
              borderBottom: "0.5px solid darkgrey",
            }}
          />
        </div>
        <div className={styles.fcont}>
          <div className={styles.lt}>
            <p>
            GPT-4 is more creative and collaborative than ever before. It can
            generate, edit, and iterate with users on creative and technical
            writing tasks, such as composing songs, writing screenplays, or
            learning a user’s writing style.
            </p>
          </div>
          <div className={styles.rtt}>
            <div className={styles.topbox}>
              <p className={styles.input}>
                <b style={{ color: "grey" }}>Input</b>
              </p>
              <p
                className={styles.input}
                style={{ color: "rgb(156, 153, 153)" }}
              >
                Explain the plot of Cinderella in a sentence where each word has
                to begin with the next letter in the alphabet from A to Z,
                without repeating any letters.
              </p>
              <div style={{ borderTop: "0.5px solid rgb(156, 153, 153)" }}>
                <p className={styles.input}>
                  <b>Output</b>
                </p>
                <p className={styles.typewriter}>
                  A beautiful Cinderella, dwelling eagerly, finally gains
                  happiness; inspiring jealous kin, love magically nurtures
                  opulent prince; quietly rescues, slipper triumphs, uniting
                  very wondrously, xenial youth zealously
                  <span className={styles.spant}>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
