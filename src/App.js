import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import * as animates from "./animate";
import "./App.css";

function App() {
  // const [ scrolled, setScrolled ] = useState('false')
  const [keyframe, setKeyframe] = useState("fadeInUp");
  const [keyframeDistance, setKeyframeDistance] = useState("30px");
  const [animated, setAnimated] = useState("animated");
  const [animateDuration, setAnimateDuration] = useState(1);
  const [animateDelay, setAnimateDelay] = useState(1);
  const [animateInfinite, setAnimateInfinite] = useState("infinite");

  const keyframeStyle = animates[keyframe]({
    name: keyframe,
    distance: keyframeDistance
  });
  const animatedStyle = animates["animated"]({
    animated: "animated",
    duration: animateDuration,
    delay: animateDelay,
    infinite: animateInfinite
  });
  const [code, setCode] = useState(`${keyframeStyle}${animatedStyle}`);
  const [scrolled, setScrolled] = useState("false");
  return (
    <div className="app">
      <div className="app-top">
        <div className="app-left scroll-animates">
          <div className={`app-logo ${keyframe} ${animated}`}>animate editor</div>
          <p>
            Edit <code>animation</code> and copy code.
          </p>
          <div className="scroll-animate">
            <div>
              <span>scrolled: </span>
              <label>
                <input
                  type="radio"
                  name="scrolled"
                  checked={scrolled === "true"}
                  value={"true"}
                  onChange={e => {
                    setScrolled(e.target.value);
                  }}
                />
                true
              </label>
              <label>
                <input
                  type="radio"
                  name="scrolled"
                  checked={scrolled === "false"}
                  value={"false"}
                  onChange={e => {
                    setScrolled(e.target.value);
                  }}
                />
                false
              </label>
            </div>
          </div>
          <div className="scroll-animate">
            <div>
              <span>animation timing function</span>
              <select
                onChange={e => {
                  setKeyframe(e.target.value);
                  setScrolled("false");
                }}
                value={keyframe}
              >
                {Object.keys(animates)
                  .filter(v => v !== "animated")
                  .map((val, key) => {
                    return (
                      <option key={key} value={val}>
                        {val}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              <span>animation distance</span>
              <input
                value={keyframeDistance}
                onChange={e => {
                  setKeyframeDistance(e.target.value);
                  setScrolled("false");
                }}
              />
            </div>
          </div>
          <div className="scroll-animate">
            <div>
              <span>animation duration</span>
              <input
                value={animateDuration}
                onChange={e => {
                  setAnimateDuration(e.target.value);
                  setScrolled("false");
                }}
              />
            </div>
            <div>
              <span>animation delay</span>
              <input
                value={animateDelay}
                onChange={e => {
                  setAnimateDelay(e.target.value);
                  setScrolled("false");
                }}
              />
            </div>
            <div>
              <span>animation infinite count</span>
              <input
                value={animateInfinite}
                onChange={e => {
                  setAnimateInfinite(e.target.value);
                  setScrolled("false");
                }}
              />
            </div>
          </div>
        </div>

        <div className="app-right">
          <div className="app-css">
            <p>CSS</p>
            <CodeMirror
              value={`${keyframeStyle}${animatedStyle}`}
              options={{
                mode: "css",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, value) => {
                // console.log('editor, data, value', editor, data, value)
                setCode(value);
              }}
            />
          </div>
          {/* {scrolled === "true" && (<div className="app-js">
            <p>JavaScript</p>
            <CodeMirror
              value={`${keyframeStyle}${animatedStyle}`}
              options={{
                mode: "js",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, value) => {
                // console.log('editor, data, value', editor, data, value)
                setCode(value);
              }}
            />
          </div>)}
          {scrolled === "true" && (<div className="app-html">
            <p>HTML</p>
            <CodeMirror
              value={`${keyframeStyle}${animatedStyle}`}
              options={{
                mode: "html",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, value) => {
                // console.log('editor, data, value', editor, data, value)
                setCode(value);
              }}
            />
          </div>)} */}
      </div>
      
      </div>
      {scrolled === "true" && (
        <div className="app-down scroll-pages">
          <div>
            {[0, 1, 2, 3, 4, 5].map((v, k) => {
              return (
                <div className={`scroll-page`} key={k}>
                  <div className={`app-logo ${keyframe} ${animated} wow`}>
                    animate editor
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <style>{code}</style>
    </div>
  );
}

export default App;
