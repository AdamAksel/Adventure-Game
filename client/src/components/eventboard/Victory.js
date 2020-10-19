import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Highscores from "./Highscores"

function Victory() {
  const str = useSelector((state) => state.str);
  const dex = useSelector((state) => state.dex);
  const int = useSelector((state) => state.int);
  const [score] = useState(str + dex + int);
  var [name, setName] = useState();
  var [nextScreen, setNextScreen] = useState(false);

  function handleChange(event) {
    setName((name = event.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      score: score,
    };
    axios
      .post('/api/scores', data)
      .then(setNextScreen((nextScreen = true)))
      .catch((err) => console.log(err));
  }
if(!nextScreen){
  return (
    <React.Fragment>
      <div className='modal-bg'>
        <div className='victory'>
          
          <h2>You Defeated Satan</h2>
          <h2>Brought Peace to the World</h2>
          <h2>Your score was {score}</h2>
          <h3>Please record your name for posterity!</h3>
          <div>
            <form>
                <input
                  type='text'
                  id='name'
                  name='name'
                  maxLength='6'
                  onChange={handleChange}
                />
              <button type='submit' value='submit' onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
} else {
  return(
    <React.Fragment>
      <Highscores />
    </React.Fragment>
  )
}
}

export default Victory;
