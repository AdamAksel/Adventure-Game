import React from 'react'


function Rules(props) {
    
    
        

    return (
        <div>
            <div className='modal-bg'>
                <div className="victory">
                <ul className="ruleslist">
                    <li>Str: Strength determines how hard you hit.</li>
                    <li>Dex: Dexterity determines your chance or interacting with enemies.</li>
                    <li>Int: Intelligence if for predicting attacks and equipping items</li>
                    <li>AP: Armor Points reduces damage taken</li>
                    <li>Exp: Experience lets you level up Str, Dex or Int.</li>
                </ul>
                <p>Good Luck, now go kill Satan!</p>
                <button className='continueButton' onClick={props.rules}>
                Kill Satan, got it!
              </button>
                </div>
            </div>
        </div>
    )
}

export default Rules