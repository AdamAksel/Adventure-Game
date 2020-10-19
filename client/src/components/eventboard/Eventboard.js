import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EventboardJumpOff1 from './EventboardJumpOff1';
import EventboardJumpOff2 from './EventboardJumpOff2';
import EventboardEvent1 from './EventboardEvent1';
import EventboardEvent2 from './EventboardEvent2';
import EventboardEvent3 from './EventboardEvent3';
import EventboardCombat1 from './EventboardCombat1';
import EventboardCombat2 from './EventboardCombat2';
import Victory from './Victory';
import {
  incrementHealth,
  incrementExp,
  rewardReducer,
  incrementDex,
  incrementStr,
  incrementInt,
  incrementItemCounter,
  worldNumberReducer,
  incrementArmorPoints,
} from '../../actions';

function Eventboard() {
  const dispatch = useDispatch();
  const worldNumber = useSelector((state) => state.worldNumber);
  const dex = useSelector((state) => state.dex);
  const health = useSelector((state) => state.health);
  const maxHealth = useSelector((state) => state.maxHealth);
  var [pathChooser, setPathChooser] = useState(false);
  var [encounter, setEncounter] = useState(false);
  var [combat, setCombat] = useState(false);
  var [goLeft, setGoLeft] = useState();
  var [goForward, setGoForward] = useState();
  var [goRight, setGoRight] = useState();
  var [path, setPath] = useState();
  var [roll, setRoll] = useState();
  var [monsterRoll, setMonsterRoll] = useState();
  var [interactOrFlee, setInteractOrFlee] = useState(false);
  var [interactOutcome, setInteractOutcome] = useState(false);
  var [combatScreen, setCombatScreen] = useState(false);
  var [turnCounter, setTurnCounter] = useState(0);

  const jumpOff = {
    jungle: {
      img: (
        <img
          alt='Jungle'
          className='img'
          src={require('./img/jungle.jpg')}
        ></img>
      ),
      description: 'The Jungle stretches before you.',
      continueButton: (
        <button className='continueButton' onClick={funcContinue}>
          Continue
        </button>
      ),
      combatButton: (
        <button className='continueButton' onClick={funcCombatScreen}>
          MurderTime!
        </button>
      ),
      leftButton: (
        <button className='buttonLeft' onClick={funcGoLeft}>
          L
        </button>
      ),
      forwardButton: (
        <button className='buttonForward' onClick={funcGoForward}>
          F
        </button>
      ),
      rightButton: (
        <button className='buttonRight' onClick={funcGoRight}>
          R
        </button>
      ),
      actionButtons: (
        <div className='buttons'>
          <button className='buttonLeft' onClick={funcCombat}>
            Attack
          </button>
          <button className='buttonForward' onClick={funcInteract}>
            Interact
          </button>
          <button className='buttonRight' onClick={funcFlee}>
            RUN!!!
          </button>
        </div>
      ),
      combatButton2: (
        <button className='continueButton' onClick={funcCombat}>
          Actions have Consequences!
        </button>
      )
    },
    caves: {
      img: (
        <img alt='caves' className='img' src={require('./img/caves.jpg')}></img>
      ),
      description: 'The caves run deep and dark.',
    },
    caveentrance: {
      img: (
        <img alt='caveentrance' className='img' src={require('./img/caveentrance.png')}></img>
      ),
      description: 'An Angel decends from heaven and heals your wounds! She says "Be Warned Hero, Inside Rests the Guardian of the Caves!"',
    },
    hell: {
      img: (
        <img alt='hell' className='img' src={require('./img/hell.jpg')}></img>
      ),
      description:
        'Hell smells nicer than you thought, still not a nice place.',
    },
    gatesofhell: {
      img: (
        <img
          alt='gatesofhell'
          className='img'
          src={require('./img/gatestohell.jpg')}
        ></img>
      ),
      description:
        'An Angel again descends and heals you! "Know, Hero, You now enter hell, I can not help you there!"',
    },
    finalboss: {
      img: (
        <img
          alt='finalboss'
          className='img'
          src={require('./img/finalboss.jpg')}
        ></img>
      ),
      description:
        'In the Distance you see Satan! Your journey is near its End!.',
    },
  };

  const events = {
    lep: {
      img: (
        <img
          alt='Lep'
          className='img'
          src={require('./img/Events/jungle/lep.jpg')}
        ></img>
      ),
      description:
        'A small creature with a stack of gold oogles you, it is very intoxicated',
      peek: "something shimmers",
      attack: '1. Kill the little drunkard!',
      interact: '2. Take his gold and leave.',
      flee: '3. Run away because you are a coward!',
      interactDescription:
        'you stole some gold, it turns to dust soon after but you find an item in the remains',
      reward: incrementItemCounter(1),
      fleeDescription: 'you ran like a coward!',
      str: 2,
      dex: 4,
      health: 30,
      exp: 1,
    },
    beholder: {
      img: (
        <img
          alt='beholder'
          className='img'
          src={require('./img/Events/jungle/beholder.jpg')}
        ></img>
      ),
      description: 'A floating squid with one giant angry eye stares at you',
      peek: 'you feel you are being watched',
      attack: '1. Make him behold no more!',
      interact: '2. Cut a Tentacle and Run!',
      flee: '3. Run away because you are a coward!',
      interactDescription:
        'The tentacle starts melding with your skin, it feels great!',
      reward: incrementHealth(10),
      fleeDescription: 'you ran like a coward!',
      str: 6,
      dex: 2,
      health: 40,
      exp: 1,
    },
    troll: {
      img: (
        <img
          alt='troll'
          className='img'
          src={require('./img/Events/jungle/troll.png')}
        ></img>
      ),
      description: 'A giant troll with corpses hanging from his belt',
      peek: 'you feel a tremor in the ground',
      attack: '1. Make the smasher the smashee!',
      interact: '2. Take one of the corpses and run!',
      flee: '3. Run away because you are sensible!',
      interactDescription: 'You loot the corpse for items',
      reward: incrementItemCounter(Math.floor(Math.random() * 3) + 1),
      fleeDescription: 'you ran like a genius!',
      str: 16,
      dex: 4,
      health: 80,
      exp: 3,
    },
    cavegolem: {
      img: (
        <img
          alt='golem'
          className='img'
          src={require('./img/Events/caveentrance/cavegolem.png')}
        ></img>
      ),
      description: 'A small mountain guards the cave entrance',
      peek: 'Your path has been decided for you',
      attack: '1. Time to go forward into the caves!',
      interact: '2. steal his club',
      flee: '3. Run away because you are sensible!',
      interactDescription: 'Golem is a required boss',
      reward: incrementStr(5),
      fleeDescription: 'Golem is a required boss',
      str: 26,
      dex: 10,
      health: 100,
      exp: 10,
    },
    naga: {
      img: (
        <img
          alt='golem'
          className='img'
          src={require('./img/Events/caves/naga.png')}
        ></img>
      ),
      description:
        'A humanoid snake blocks your path and seems overly ready to fight!',
      peek: 'a slithering sound is heard',
      attack: '1. Channel your inner Mongoose!',
      interact: '2. Steal one of its items',
      flee: '3. Run away because you are a coward!',
      interactDescription: 'You get away with one of the many items',
      reward: incrementItemCounter(1),
      fleeDescription: 'You ran like a coward',
      str: 20,
      dex: 20,
      health: 100,
      exp: 4,
    },
    serpent: {
      img: (
        <img
          alt='golem'
          className='img'
          src={require('./img/Events/caves/serpent.png')}
        ></img>
      ),
      description: 'A serpent with a face wants to eat you',
      peek: 'a slithering sound is heard',
      attack: '1. Channel your inner Mongoose!',
      interact: '2. Break of a scale and make snake soup',
      flee: '3. Run away because you are a coward!',
      interactDescription: 'The scale-soup was surprisingly tasty',
      reward: incrementDex(5),
      fleeDescription: 'You ran like a coward',
      str: 10,
      dex: 30,
      health: 100,
      exp: 4,
    },
    cyclops: {
      img: (
        <img
          alt='cyclops'
          className='img'
          src={require('./img/Events/jungle/cyclops.jpg')}
        ></img>
      ),
      description: 'A cyclops, or a giant with a birth defect?',
      peek: 'a feeling of being watched',
      attack: '1. Sword, meet eye!',
      interact: '2. Try to cut some fur',
      flee: '3. Run away because you are a coward!',
      interactDescription: 'The fur melds with your body making you stronger!?',
      reward: incrementStr(2),
      fleeDescription: 'You ran like a coward',
      str: 20,
      dex: 6,
      health: 80,
      exp: 3,
    },
    wizard: {
      img: (
        <img
          alt='wizard'
          className='img'
          src={require('./img/Events/jungle/wizard.jpg')}
        ></img>
      ),
      description: `A wizard that can't use magic because of the combat system`,
      peek: 'a magic sparkle',
      attack: '1. Wizard + no magic = death',
      interact: '2. Steal a potion',
      flee: '3. Run away because you are a coward!',
      interactDescription: `You drink a potion labled "For female company"` ,
      reward: incrementExp(2),
      fleeDescription: 'You ran like a coward',
      str: 4,
      dex: 10,
      health: 50,
      exp: 2,
    },
    spiderjungle: {
      img: (
        <img
          alt='spiderjungle'
          className='img'
          src={require('./img/Events/jungle/spiderjungle.jpg')}
        ></img>
      ),
      description: `A giant spider, it looks hungry`,
      peek: 'dead trees and danger',
      attack: '1. Feed the spider your sword',
      interact: `2. Make a cup from it's chitin`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You are now protected from kicks to the groin, you feel safer already` ,
      reward: incrementArmorPoints(2),
      fleeDescription: 'You ran like a coward',
      str: 20,
      dex: 20,
      health: 60,
      exp: 3,
    },
    orcjungle: {
      img: (
        <img
          alt='orcjungle'
          className='img'
          src={require('./img/Events/jungle/orcjungle.jpg')}
        ></img>
      ),
      description: `A walking junkyard with an orc underneath`,
      peek: 'a clanking of metal',
      attack: '1. My sword shall be named "Can Opener"',
      interact: `2. Reach into the mass of metal and pull something out`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You found an item under all the junk!` ,
      reward: incrementItemCounter(1),
      fleeDescription: 'You ran like a coward',
      str: 15,
      dex: 1,
      health: 50,
      exp: 2,
    },
    goblin: {
      img: (
        <img
          alt='goblin'
          className='img'
          src={require('./img/Events/jungle/goblin.png')}
        ></img>
      ),
      description: `A goblin is angry because of the copyrighted images!`,
      peek: 'a muttering about "royalties"',
      attack: '1. IP law is a scam!',
      interact: `2. Gain a better understanding of the goblins point of view`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `IP law is still BS but now you feel you understand the arguments` ,
      reward: incrementInt(3),
      fleeDescription: 'You ran like a coward',
      str: 4,
      dex: 8,
      health: 30,
      exp: 1,
    },
    dwarfjungle: {
      img: (
        <img
          alt='dwarfjungle'
          className='img'
          src={require('./img/Events/jungle/dwarfjungle.jpg')}
        ></img>
      ),
      description: `A dwarf in a jungle? maybe there is a cave entrance nearby?`,
      peek: 'something short and angry',
      attack: '1. Toss him!',
      interact: `2. Study his lack of footwork`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `Now you know how not to move in a fight` ,
      reward: incrementDex(2),
      fleeDescription: 'You ran like a coward',
      str: 14,
      dex: 1,
      health: 60,
      exp: 2,
    },
    caveorc: {
      img: (
        <img
          alt='caveorc'
          className='img'
          src={require('./img/Events/caves/caveorc.jpg')}
        ></img>
      ),
      description: `An orc in a cave, how original`,
      peek: 'a whisper *moo...ri...a*',
      attack: '1. Kill him',
      interact: `2. Ask him to train your pecs before the fight`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `That was an intense workout` ,
      reward: incrementStr(3),
      fleeDescription: 'You ran like a coward',
      str: 30,
      dex: 10,
      health: 70,
      exp: 4,
    },
    cavespider: {
      img: (
        <img
          alt='cavespider'
          className='img'
          src={require('./img/Events/caves/cavespider.jpg')}
        ></img>
      ),
      description: `A giant spider, it looks hungry`,
      peek: 'a sticky substance coats the wall',
      attack: '1. Feed it your sword!',
      interact: `2. Run a crossfit course between is's legs`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `That was an intense workout` ,
      reward: incrementDex(3),
      fleeDescription: 'You ran like a coward',
      str: 40,
      dex: 20,
      health: 50,
      exp: 5,
    },
    cavedwarf: {
      img: (
        <img
          alt='cavedwarf'
          className='img'
          src={require('./img/Events/caves/cavedwarf.jpg')}
        ></img>
      ),
      description: `A dwarf in his natural element`,
      peek: 'a short, stocky figure',
      attack: '1. Trim his beard!',
      interact: `2. Study his lack of grace`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You download data on how not to move` ,
      reward: incrementDex(3),
      fleeDescription: 'You ran like a coward',
      str: 50,
      dex: 10,
      health: 80,
      exp: 5,
    },
    drow: {
      img: (
        <img
          alt='drow'
          className='img'
          src={require('./img/Events/caves/drow.png')}
        ></img>
      ),
      description: `An ebony elf riding a spider`,
      peek: 'A Centaur with too many legs',
      attack: '1. Kill them both!',
      interact: `2. Study how the Elf commands the Spider`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You study hard` ,
      reward: incrementInt(3),
      fleeDescription: 'You ran like a coward',
      str: 40,
      dex: 30,
      health: 60,
      exp: 5,
    },
    reddragon: {
      img: (
        <img
          alt='reddragon'
          className='img'
          src={require('./img/Events/caves/reddragon.jpg')}
        ></img>
      ),
      description: `A Giant Red Dragon!`,
      peek: 'Fire and Death!',
      attack: '1. Onward Sancho!',
      interact: `2. Eat one of its Eggs`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `Tasty Egg, angry Dragon!` ,
      reward: incrementStr(10),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 30,
      health: 100,
      exp: 6,
    },
    blackdragon: {
      img: (
        <img
          alt='blackdragon'
          className='img'
          src={require('./img/Events/caves/blackdragon.jpg')}
        ></img>
      ),
      description: `A Giant Black Dragon!`,
      peek: 'Fire and Death!',
      attack: '1. Onward Sancho!',
      interact: `2. Eat one of its Eggs`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `Tasty Egg, angry Dragon!` ,
      reward: incrementDex(10),
      fleeDescription: 'You ran like a coward',
      str: 80,
      dex: 50,
      health: 100,
      exp: 6,
    },
    whitedragon: {
      img: (
        <img
          alt='whitedragon'
          className='img'
          src={require('./img/Events/caves/whitedragon.jpg')}
        ></img>
      ),
      description: `A Giant Black Dragon!`,
      peek: 'Fire and Death!',
      attack: '1. Onward Sancho!',
      interact: `2. Eat one of its Eggs`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `Tasty Egg, angry Dragon!` ,
      reward: incrementInt(10),
      fleeDescription: 'You ran like a coward',
      str: 80,
      dex: 50,
      health: 100,
      exp: 6,
    },
    demonprince: {
      img: (
        <img
          alt='demonprince'
          className='img'
          src={require('./img/Events/gatesofhell/demonprince.png')}
        ></img>
      ),
      description: `A Demon with a regal aura`,
      peek: 'Your path has been decided!',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 20,
    },
    birddemon: {
      img: (
        <img
          alt='birddemon'
          className='img'
          src={require('./img/Events/hell/birddemon.png')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    demongoat: {
      img: (
        <img
          alt='demongoat'
          className='img'
          src={require('./img/Events/hell/demongoat.jpg')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    demonmanyarms: {
      img: (
        <img
          alt='demonmanyarms'
          className='img'
          src={require('./img/Events/hell/demonmanyarms.png')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    firewhip: {
      img: (
        <img
          alt='firewhip'
          className='img'
          src={require('./img/Events/hell/firewhip.png')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    glabrezu: {
      img: (
        <img
          alt='glabrezu'
          className='img'
          src={require('./img/Events/hell/glabrezu.jpg')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    imp: {
      img: (
        <img
          alt='imp'
          className='img'
          src={require('./img/Events/hell/imp.jpg')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    orcus: {
      img: (
        <img
          alt='orcus'
          className='img'
          src={require('./img/Events/hell/orcus.jpg')}
        ></img>
      ),
      description: `A Demon!`,
      peek: 'a demon, of course',
      attack: '1. Smite the Demon!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 100,
      dex: 40,
      health: 200,
      exp: 10,
    },
    finalboss: {
      img: (
        <img
          alt='finalboss'
          className='img'
          src={require('./img/Events/finalboss/finalboss.jpg')}
        ></img>
      ),
      description: `Satan, King of Hell, Your Final Test!`,
      peek: 'Your path is decided!',
      attack: '1. For Glory!',
      interact: `2. Sell your Soul for Power`,
      flee: '3. Run away because you are a coward!',
      interactDescription: `You gain power, now the Demon wants your Soul!` ,
      reward: incrementExp(5),
      fleeDescription: 'You ran like a coward',
      str: 200,
      dex: 50,
      health: 400,
      exp: 0,
    },
  };

  const jumpOffArray = [
    jumpOff.jungle,
    jumpOff.caveentrance,
    jumpOff.caves,
    jumpOff.gatesofhell,
    jumpOff.hell,
    jumpOff.finalboss,
  ];
  const eventArray = [
    [events.lep, events.beholder, events.troll, events.wizard, events.spiderjungle, events.cyclops, events.orcjungle, events.dwarfjungle, events.goblin],
    [events.cavegolem],
    [events.naga, events.serpent, events.caveorc, events.cavespider, events.cavedwarf, events.drow, events.reddragon, events.blackdragon, events.whitedragon],
    [events.demonprince],
    [events.birddemon, events.firewhip, events.orcus, events.imp, events.demonmanyarms, events.demongoat, events.glabrezu],
    [events.finalboss]
  ];

  function funcContinue() {
    if(turnCounter === 9 || turnCounter === 19){
      dispatch(worldNumberReducer(1));
      let healthDiff = maxHealth - health;
      dispatch(incrementHealth(healthDiff));
    }
    if (turnCounter === 10 || turnCounter === 20 || turnCounter === 24) {
      dispatch(worldNumberReducer(1));
  }
    if (health > maxHealth) {
      let healthDiff = health - maxHealth;
      dispatch(incrementHealth(-healthDiff));
    }
    console.log(turnCounter);
    console.log(worldNumber)
    setEncounter((encounter = false));
    setCombat((combat = false));
    setInteractOrFlee((interactOrFlee = false));
    setInteractOutcome((interactOutcome = false));
    setCombatScreen((combatScreen = false));
    setPathChooser((pathChooser = true));
    setGoLeft(
      (goLeft =
        eventArray[worldNumber][
          Math.floor(Math.random() * eventArray[worldNumber].length)
        ])
    );
    setGoForward(
      (goForward =
        eventArray[worldNumber][
          Math.floor(Math.random() * eventArray[worldNumber].length)
        ])
    );
    setGoRight(
      (goRight =
        eventArray[worldNumber][
          Math.floor(Math.random() * eventArray[worldNumber].length)
        ])
    ); 
}



  function funcCombatScreen() {
    setCombatScreen((combatScreen = true));
  }
  function funcGoLeft() {
    setTurnCounter((turnCounter = turnCounter + 1));
    setEncounter((encounter = true));
    return setPath((path = goLeft));
  }
  function funcGoForward() {
    setTurnCounter((turnCounter = turnCounter + 1));
    setEncounter((encounter = true));
    return setPath((path = goForward));
  }
  function funcGoRight() {
    setTurnCounter((turnCounter = turnCounter + 1));
    setEncounter((encounter = true));
    return setPath((path = goRight));
  }
  function funcCombat() {
    setCombat((combat = true));
  }

  function funcInteract() {
    setRoll((roll = dex + Math.floor(Math.random() * 10)));
    setMonsterRoll((monsterRoll = path.dex + Math.floor(Math.random() * 10)));
    if (monsterRoll > roll) {
      setInteractOrFlee((interactOrFlee = true));
      return funcCombat();
    } else {
      setInteractOutcome((interactOutcome = true));
      setInteractOrFlee((interactOrFlee = true));
      dispatch(rewardReducer(-1));
    }
  }
  function funcFlee() {
    if (turnCounter === 24) {
      setInteractOrFlee((interactOrFlee = true));
      return funcCombat();
    }
    setRoll((roll = dex + Math.floor(Math.random() * 10)));
    setMonsterRoll((monsterRoll = path.dex + Math.floor(Math.random() * 10)));
    if (monsterRoll > roll) {
      setInteractOrFlee((interactOrFlee = true));
      return funcCombat();
    } else {
      setInteractOrFlee((interactOrFlee = true));
    }
  }

  if (!encounter && !combat) {
    return (
      <React.Fragment>
        {turnCounter === 26 ? <Victory /> : null}
        {!pathChooser ? (
          <EventboardJumpOff1
            worldImg={jumpOffArray[worldNumber].img}
            worldDescription={jumpOffArray[worldNumber].description}
            worldContinue={jumpOffArray[0].continueButton}
          />
        ) : (
          <EventboardJumpOff2
            worldImg={jumpOffArray[worldNumber].img}
            worldDescription={jumpOffArray[worldNumber].description}
            goLeftPeek={goLeft.peek}
            goForwardPeek={goForward.peek}
            goRightPeek={goRight.peek}
            worldLeftButton={jumpOffArray[0].leftButton}
            worldForwardButton={jumpOffArray[0].forwardButton}
            worldRightButton={jumpOffArray[0].rightButton}
          />
        )}
      </React.Fragment>
    );
  }
  // EVENTS GO HERE
  else if (encounter && !combat) {
    return (
      <React.Fragment>
        {!interactOrFlee ? (
          <EventboardEvent1
            img={path.img}
            description={path.description}
            attack={path.attack}
            interact={path.interact}
            flee={path.flee}
            worldActionButtons={jumpOffArray[0].actionButtons}
          />
        ) : interactOutcome ? (
          <EventboardEvent2
            img={path.img}
            description={path.description}
            interactDescription={path.interactDescription}
            reward={path.reward}
            combatButton2={jumpOffArray[0].combatButton2}
          />
        ) : (
          <EventboardEvent3
            img={path.img}
            description={path.description}
            fleeDescription={path.fleeDescription}
            worldContinue={jumpOffArray[0].continueButton}
          />
        )}
      </React.Fragment>
    );
  }
  //COMBAT GOES HERE
  else if (encounter && combat) {
    return (
      <React.Fragment>
        {!interactOrFlee ? (
          <EventboardCombat1
            combatScreen={combatScreen}
            img={path.img}
            description={path.description}
            worldCombat={jumpOffArray[0].combatButton}
            worldContinue={jumpOffArray[0].continueButton}
            monsterDex={path.dex}
            monsterStr={path.str}
            monsterHealth={path.health}
            monsterExp={path.exp}
          />
        ) : (
          <EventboardCombat2
            combatScreen={combatScreen}
            img={path.img}
            description={path.description}
            worldCombat={jumpOffArray[0].combatButton}
            worldContinue={jumpOffArray[0].continueButton}
            monsterDex={path.dex}
            monsterStr={path.str}
            monsterHealth={path.health}
            monsterExp={path.exp}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Eventboard;
