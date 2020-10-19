import React, {useState} from 'react';
import Layout from './components/Layout';
import Showscores from "./Showscores"
import Rules from "./Rules"
import './App.css';

function App() {
  var [showScore, setShowScore] = useState(false)
  var [rules, setRules] = useState(false)

  function scoreBoard(){
    if(showScore === false){
      setShowScore(showScore = true)
    } else {
      setShowScore(showScore = false)
    }
  }
  function funcRules(){
    if (rules === false){
      setRules(rules = true)
    } else {
      setRules(rules = false)
    }
  }

  return (
    <React.Fragment>
      <div className="topDiv">
        <h1>Adventure Game</h1>
      {!showScore ? <h1 className="showScore" onClick={scoreBoard}>High Scores</h1> : <Showscores scoreboard={scoreBoard} />}
      {!rules ? <h1 className="rules" onClick={funcRules}>Rules</h1> : <Rules rules={funcRules} />}
      </div>
      <Layout />
    </React.Fragment>
  );
}

export default App;
