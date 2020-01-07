import React, { useState } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import * as animates from './animate'
import logo from './logo.svg';
import './App.css';

function App() {
  // const [ scrolled, setScrolled ] = useState('false')
  const [ keyframe, setKeyframe ] = useState('bounce')
  const [ keyframeDistance, setKeyframeDistance ] = useState('30px')
  const [ animated, setAnimated ] = useState('animated')
  const [ animateDuration, setAnimateDuration ] = useState(0.5)
  const [ animateDelay, setAnimateDelay ] = useState(0.5)
  const [ animateInfinite, setAnimateInfinite ] = useState('1')

  const keyframeStyle = animates[keyframe]({
    name: keyframe,
    distance: keyframeDistance
  });
  const animatedStyle = animates['animated']({
    animated: 'animated',
    duration: animateDuration,
    delay: animateDelay,
    infinite: animateInfinite
  });
  const [ code, setCode ] = useState(`${keyframeStyle}${animatedStyle}`)
  const [ scrolled, setScrolled ] = useState('false')
  
  return (
    <div className="App">
      {scrolled ==='true' && <div className="App-left scroll-pages">
        <div>
          {[0, 1, 2, 3, 4, 5].map((v, k) => {
            return <div className={`scroll-page ${keyframe} ${animated} wow`} key={k}>
              <img src={logo} className={`App-logo`} alt="logo" />
            </div>
          })}
        </div>
      </div>}
      <div className="App-middle scroll-animates">
        <img src={logo} className={`App-logo ${keyframe} ${animated}`} alt="logo" />
        <p>
          Edit <code>scroll-animate</code> and copy code.
        </p>
        <div className="scroll-animate">
          <div>
            <span>scrolled: </span>
            <label><input type="radio" name="scrolled" checked={scrolled === 'true'} value={'true'} onChange={(e) => setScrolled(e.target.value)}/>true</label>
            <label><input type="radio" name="scrolled" checked={scrolled === 'false'} value={'false'} onChange={(e) => setScrolled(e.target.value)}/>false</label>
          </div>
        </div>
        <div className="scroll-animate">
          <div>
            <span>Animate keyframes</span>
            <select
              onChange={(e) => {
                setKeyframe(e.target.value)
              }}
              value={keyframe}
            >
              {Object.keys(animates).map((val, key) => {
                return <option key={key} value={val}>{val}</option>
              })}
            </select>
          </div>
          <div>
            <span>keyframes Distance</span>
            <input value={keyframeDistance} onChange={(e) => setKeyframeDistance(e.target.value)} />
          </div>
        </div>
        <div className="scroll-animate">
          <div>
            <span>Animate Duration</span>
            <input value={animateDuration} onChange={(e) => setAnimateDuration(e.target.value)} />
          </div>
          <div>
            <span>Animate Delay</span>
            <input value={animateDelay} onChange={(e) => setAnimateDelay(e.target.value)} />
          </div>
          <div>
            <span>Animate Infinite</span>
            <input value={animateInfinite} onChange={(e) => setAnimateInfinite(e.target.value)} />
          </div>
        </div>
      </div>
    
      <div className="App-right">
        <CodeMirror
          value={`${keyframeStyle}${animatedStyle}`}
          options={{
            mode: 'css',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            // console.log('editor, data, value', editor, data, value)
            setCode(value)
          }}
          style={{
            height: '100%'
          }}
        />
      </div>
      <style>
        {code}
      </style>
    </div>
  );
}

export default App;
