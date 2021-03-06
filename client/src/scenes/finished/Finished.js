import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import congratulations from "./../../images/congratulations.gif";
import applause from "./../../audio/applause.mp3";
import Styles from "./finished.css";

class GeneralFinished extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="finished">
        <div className="inner-wrap">
          <div className="description">
            <pre className="ascii-image">
              ̿ ̿’ ̿’\̵͇̿̿\з=(•̪●)=ε/̵͇̿̿/’̿”̿ ̿
            </pre>
            <div className="congratulations-text">
              <span role="img" aria-label="balloons and party icons">
                🎉🎉🎈
              </span>
              <span>
                Congratulations! You finished all forty code questions!
              </span>
              <span role="img" aria-label="balloons and party icons">
                🎈🎉🎉
              </span>
            </div>

            <img
              className="congratulations-image"
              alt="The Great Gatsby Cheers"
              src={congratulations}
            />

            <div className="back">
              <Link to="/play">Try playing again?</Link>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default GeneralFinished;
