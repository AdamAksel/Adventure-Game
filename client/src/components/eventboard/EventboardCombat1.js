import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Defeat from "./Defeat"
import {
  incrementHealth,
  incrementExp,
  incrementItemCounter,
} from '../../actions';

function EventboardCombat1(props) {
  const armorP = useSelector((state) => state.armorP);
  const str = useSelector((state) => state.str);
  const dex = useSelector((state) => state.dex);
  const int = useSelector((state) => state.int);
  const health = useSelector((state) => state.health);
  const maxHealth = useSelector((state) => state.maxHealth);
  const dispatch = useDispatch();
  var [combatPredict, setCombatPredict] = useState(
    'You try figuring out the next attack'
  );
  var [combatAttack, setCombatAttack] = useState('X');
  var [combatDefend, setCombatDefend] = useState('X');
  var [roll, setRoll] = useState();
  var [monsterRoll, setMonsterRoll] = useState();
  var [monsterAttack, setMonsterAttack] = useState('X');
  var [combatProcess, setCombatProcess] = useState('Combat Begins!');
  var [currentMonsterHealth, setCurrentMonsterHealth] = useState(
    props.monsterHealth
  );
  var [rollResult, setRollResult] = useState();
  var [monsterRollResult, setMonsterRollResult] = useState();
  var [damageTaken, setDamageTaken] = useState();
  var [victory, setVictory] = useState(false);
  var [defeat, setDefeat] = useState(false)
  var [hit, setHit] = useState(0);
  var [monHit, setMonHit] = useState(0);
  var [damage, setDamage] = useState();
  var [monDamage, setMonDamage] = useState();
  const attackArray = [
    {
      attack: 'Overhand',
      attackValue: 1.5,
      attackChance: Math.round((50 + (dex - props.monsterDex)) / 1.5),
      monAttackChance:  Math.round((50 + (props.monsterDex - dex)) / 1.5),
    },
    {
      attack: 'Slash',
      attackValue: 1,
      attackChance: Math.round((50 + (dex - props.monsterDex))),
      monAttackChance:  Math.round((50 + (props.monsterDex - dex))),
    },
    {
      attack: 'Stab',
      attackValue: 0.7,
      attackChance: Math.round((50 + (dex - props.monsterDex)) * 1.5),
      monAttackChance:  Math.round((50 + (props.monsterDex - dex)) * 1.5),
    },
  ];

  function funcAttack(e) {
    let idTarget = parseInt(e.target.id, 10);
    setRoll((roll = Math.floor(Math.random() * 10)));
    setMonsterRoll((monsterRoll = Math.floor(Math.random() * 10)));
    setMonsterAttack((monsterAttack = Math.floor(Math.random() * 3)));
    setRollResult((rollResult = roll + int));
    setMonsterRollResult((monsterRollResult = monsterRoll + props.monsterDex));
    if (monsterRollResult > rollResult) {
      setCombatAttack((combatAttack = idTarget));
      setCombatPredict((combatPredict = "You can't predict your foe!"));
    } else {
      setCombatPredict(
        (combatPredict =
          'The enemy uses ' + attackArray[monsterAttack].attack)
      );
      setCombatAttack((combatAttack = idTarget));
    }
  }
  function funcDefend(e) {
    let idTarget = parseInt(e.target.id, 10);
    setCombatDefend((combatDefend = idTarget));
    setTimeout(() => {
      setCombatProcess(
        (combatProcess = 'You ' + attackArray[combatAttack].attack + ' your target!')
      );

      setRoll((roll = Math.floor(Math.random() * 100)));
      setRollResult(rollResult = attackArray[combatAttack].attackChance)
      if (rollResult < 25){
        setRollResult(rollResult = 25)
      } else if (rollResult > 90){
        setRollResult(rollResult = 90)
      }
      setTimeout(() => {
        if (roll <= rollResult ) {
          setCombatProcess((combatProcess = 'You hit your opponent!'));
         
          setHit((hit = 2));
          setDamage((damage = Math.round(str * attackArray[combatAttack].attackValue)));
          setCurrentMonsterHealth(
            (currentMonsterHealth = currentMonsterHealth - damage)
          );
          if (currentMonsterHealth <= 0) {
            dispatch(incrementExp(props.monsterExp));
            dispatch(incrementItemCounter(1));
            setVictory((victory = true));
            return setCombatProcess((combatProcess = 'You are Victorious!'));
          }
        } else {
          setCombatProcess((combatProcess = 'You miss your opponent!'));
          setHit((hit = 1));
        }
        setTimeout(() => {
          setCombatProcess(
            (combatProcess =
              'Your opponent ' +
              attackArray[monsterAttack].attack +
              ' you!')
          );
          setCombatPredict(
            (combatPredict =
              'The enemy uses ' + attackArray[monsterAttack].attack)
          );
          setRoll((roll = Math.floor(Math.random() * 100)));
          setRollResult(rollResult = attackArray[monsterAttack].monAttackChance)
          if (rollResult < 25){
            setRollResult(rollResult = 25)
          } else if (rollResult > 90){
            setRollResult(rollResult = 90)
          }

          setTimeout(() => {
            if (roll <= rollResult) {
              setCombatProcess(
                (combatProcess =
                  'The ' +
                  attackArray[monsterAttack].attack +
                  ' hits you!')
              );
              setMonHit((monHit = 2));
              setDamageTaken(
                (damageTaken = Math.round((props.monsterStr *
                  attackArray[monsterAttack].attackValue) - armorP
                ))
              );
              if (attackArray[combatDefend].attack === attackArray[monsterAttack].attack) {
                setDamageTaken((damageTaken = Math.round(damageTaken / 4))); 
              }
              if (damageTaken < 1) {
                setDamageTaken((damageTaken = 1));
              }
              setMonDamage((monDamage = damageTaken));
              dispatch(incrementHealth(-damageTaken));
            } else {
              setCombatProcess(
                (combatProcess = 'You nimbly dodge the attack!')
              );
              setMonHit((monHit = 1));
            }
            setTimeout(() => {
              setCombatProcess((combatProcess = 'New Combat Round'));
              setCombatAttack((combatAttack = 'X'));
              setCombatDefend((combatDefend = 'X'));
              setHit((hit = 0));
              setMonHit((monHit = 0));
              setCombatPredict(
                (combatPredict = 'You try figuring out the next attack')
              );
            }, 700);
          }, 700);
        }, 700);
      }, 700);
    }, 700);
  }

  function funcDefeat() {
    setDefeat(defeat = true);
  }

  if (!props.combatScreen) {
    return (
      <React.Fragment>
        <div className='eventBoard'>{props.img}</div>
        <div>
          <div className='eventText'>
            <h4 className='choosePath'>{props.description}</h4>

            <h4 className='choosePath'>Time to Fight!</h4>
          </div>
        </div>
        <div className='buttons'>{props.worldCombat}</div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {defeat === true ? <Defeat /> : null}
        {health <= 0 ? (
          <div className='deathScreen'>
            <div className='newGame'>
              <button className='continueButton' onClick={funcDefeat}>
                New Game?
              </button>
            </div>
          </div>
        ) : undefined}
        
        <div className='modal-bg'>
          <div className='combatModal'>
            <div className='combatHealth'>
              <i className='fa fa-heart'></i> {health}/{maxHealth}
            </div>
            <div
              className={
                combatAttack === 1
                  ? 'SwordSlash'
                  : combatAttack === 0
                  ? 'SwordOverhand'
                  : combatAttack === 2
                  ? 'SwordStab'
                  : 'NoAttack'
              }
            ></div>

            {monHit === 2 ? (
              <div className='HitBlood'>
                - {monDamage} <i className='fa fa-heart'></i>
              </div>
            ) : monHit === 1 ? (
              <div className='HitMiss'>X</div>
            ) : (
              <div className='HitNothing'></div>
            )}
            {hit === 2 ? (
              <div className='monHitBlood'>
                - {damage} <i className='fa fa-heart'></i>
              </div>
            ) : hit === 1 ? (
              <div className='monHitMiss'>X</div>
            ) : (
              <div className='monHitNothing'></div>
            )}

            <div className='combatprocess'>{combatProcess}</div>
            <div className='monStr'>Str {props.monsterStr}</div>
            <div className='monDex'>Dex {props.monsterDex}</div>
            <div className='playerStr'>Str {str}</div>
            <div className='playerDex'>Dex {dex}</div>
            <div className='playerAP'>Armor {armorP}</div>

            <div className='monsterCombatHealth'>
              <i className='fa fa-heart'></i> {currentMonsterHealth}/
              {props.monsterHealth}
            </div>
            <div
              className={
                combatPredict !== 'You try figuring out the next attack' &&
                combatPredict !== "You can't predict your foe!" &&
                attackArray[monsterAttack].attack === 'Slash'
                  ? 'monSwordSlash'
                  : combatPredict !== 'You try figuring out the next attack' &&
                    combatPredict !== "You can't predict your foe!" &&
                    attackArray[monsterAttack].attack === 'Overhand'
                  ? 'monSwordOverhand'
                  : combatPredict !== 'You try figuring out the next attack' &&
                    combatPredict !== "You can't predict your foe!" &&
                    attackArray[monsterAttack].attack === 'Stab'
                  ? 'monSwordStab'
                  : 'monNoAttack'
              }
            ></div>
            <div className='combatBoard'>
              <div className='playerAttack'>Attack {combatAttack === 0 ? "Overhand" : combatAttack === 1 ? "Slash" : combatAttack === 2 ? "Stab" : "X"}</div>
              <div className='playerDefend'>Defend {combatDefend === 0 ? "Overhand" : combatDefend === 1 ? "Slash" : combatDefend === 2 ? "Stab" : "X"}</div>
            </div>
            <div className='monsterCombatBoard'>
              <div className='monsterAttack'>{combatPredict}</div>
            </div>
            <div className='combatButtons'>
              {combatAttack === 'X' ? (
                <React.Fragment>
                  <button
                    className='slashButton'
                    id='1'
                    onClick={funcAttack}
                  >
                    Slash <br />
              {attackArray[1].attackChance < 25 ? "25" : attackArray[1].attackChance > 90 ? "90" : attackArray[1].attackChance} % <br />
                    Str
                  </button>
                  <button
                    className='smashButton'
                    id='0'
                    onClick={funcAttack}
                  >
                    Overhand
                    <br />
                    {attackArray[0].attackChance < 25 ? "25" : attackArray[0].attackChance > 90 ? "90" : attackArray[0].attackChance} %
                    <br />
                    Str*1.5
                  </button>
                  <button className='stabButton' id='2' onClick={funcAttack}>
                    Stab
                    <br />
                    {attackArray[2].attackChance < 25 ? "25" : attackArray[2].attackChance > 90 ? "90" : attackArray[2].attackChance} %
                    <br />
                    Str*0.7
                  </button>
                </React.Fragment>
              ) : combatDefend === 'X' ? (
                <React.Fragment>
                  <button
                    className='slashButton'
                    id='1'
                    onClick={funcDefend}
                  >
                    Defend Slash <br/>
                    {attackArray[1].monAttackChance < 25 ? "25" : attackArray[1].monAttackChance > 90 ? "90" : attackArray[1].monAttackChance} %
                  </button>
                  <button
                    className='smashButton'
                    id='0'
                    onClick={funcDefend}
                  >
                    Defend Overhand <br/>
                    {attackArray[0].monAttackChance < 25 ? "25" : attackArray[0].monAttackChance > 90 ? "90" : attackArray[0].monAttackChance} %
                  </button>
                  <button className='stabButton' id='2' onClick={funcDefend}>
                    Defend Stab <br/>
                    {attackArray[2].monAttackChance < 25 ? "25" : attackArray[2].monAttackChance > 90 ? "90" : attackArray[2].monAttackChance} %
                  </button>
                </React.Fragment>
              ) : !victory ? (
                <React.Fragment>
                  <button className='continueButton'>
                    Who Wins this Round?
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='continueButton'>{props.worldContinue}</div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventboardCombat1;
