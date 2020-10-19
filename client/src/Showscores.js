import React,{useState, useEffect} from 'react'
import axios from "axios"

function Showscores(props) {
    var [score10, setScore10] = useState([])
    

  
   
    useEffect(() => {
        axios
        .get("/api/scores")
        .then(res => {
            setScore10(res.data.slice(0,10))
            if (res.data.length > 10){
                let remove = res.data.slice(10)
                remove.map((data) => {
                    axios
                    .delete(`/api/scores/${data._id}`)
                    .then()
                    .catch(err =>{
                        console.log(err)
                    })
                })
            }
           
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

        

    return (
        <div>
            <div className='modal-bg'>
                <div className="victory">
                <ol>
                    {score10.map(person => <li key={person._id}>Name: {person.name}, Score: {person.score}, Date: {person.date.slice(0,10)}</li>)}
                </ol>
                <button className='continueButton' onClick={props.scoreboard}>
                X
              </button>
                </div>
            </div>
        </div>
    )
}

export default Showscores