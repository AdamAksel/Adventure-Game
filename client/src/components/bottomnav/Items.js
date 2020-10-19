import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tippy from '@tippyjs/react';
import {
  incrementItemCounter,
  incrementArmorPoints,
  incrementDex,
  incrementStr,
  incrementInt,
} from '../../actions';

function Items() {
  const modalFunc = () => {
    if (!modal) {
      setModal((modal = true));
    } else {
      setModal((modal = false));
    }
  };

  const equipmentObject = {
    armor: {
      armor1: {
        img: (
          <img
            className='equipmentImg'
            alt='Armor1'
            src={require('../eventboard/img/Armors/Armor1.gif')}
          ></img>
        ),
        name: 'Tunic of Mismatched Background',
        ArmorPoints: 2,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      armor2: {
        img: (
          <img
            className='equipmentImg'
            alt='Armor2'
            src={require('../eventboard/img/Armors/Armor2.gif')}
          ></img>
        ),
        name: 'Beerkeg Breastplate',
        ArmorPoints: 4,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      armor3: {
        img: (
          <img
            className='equipmentImg'
            alt='Armor3'
            src={require('../eventboard/img/Armors/Armor3.gif')}
          ></img>
        ),
        name: 'Chainmail',
        ArmorPoints: 6,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      armor4: {
        img: (
          <img
            className='equipmentImg'
            alt='Armor4'
            src={require('../eventboard/img/Armors/Armor4.gif')}
          ></img>
        ),
        name: 'Plate Mail',
        ArmorPoints: 8,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      armorMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='ArmorMagic1'
            src={require('../eventboard/img/Armors/ArmorMagic1.gif')}
          ></img>
        ),
        name:
          'Underwhelming Armor of Screwing With ToolTip Length JFADIGFOAIHFGALKFWDFAJDLJVNSCVPSAVJD',
        ArmorPoints: 6,
        reqInt: 10,
        dex: 4,
        str: 4,
        int: 0,
      },
      armorMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='ArmorMagic2'
            src={require('../eventboard/img/Armors/ArmorMagic2.gif')}
          ></img>
        ),
        name: 'The Rock',
        ArmorPoints: 12,
        reqInt: 30,
        str: 20,
        dex: 20,
        int: 0,
      },
    },

    belt: {
      belt1: {
        img: (
          <img
            className='equipmentImgBelt'
            alt='Belt1'
            src={require('../eventboard/img/Belts/Belt1.gif')}
          ></img>
        ),
        name: 'Simple Sash',
        ArmorPoints: 1,
        reqInt: 0,
        str: 0,
        dex: 1,
        int: 0,
      },
      belt2: {
        img: (
          <img
            className='equipmentImgBelt'
            alt='Belt2'
            src={require('../eventboard/img/Belts/Belt2.gif')}
          ></img>
        ),
        name: 'Double Fashion',
        ArmorPoints: 2,
        reqInt: 0,
        str: 0,
        dex: 2,
        int: 0,
      },
      belt3: {
        img: (
          <img
            className='equipmentImgBelt'
            alt='Belt3'
            src={require('../eventboard/img/Belts/Belt3.gif')}
          ></img>
        ),
        name: 'Caveman Fashion',
        ArmorPoints: 3,
        reqInt: 0,
        str: 0,
        dex: 3,
        int: 0,
      },
      beltMagic1: {
        img: (
          <img
            className='equipmentImgBelt'
            alt='BeltMagic1'
            src={require('../eventboard/img/Belts/BeltMagic1.gif')}
          ></img>
        ),
        name: 'Light-urple',
        ArmorPoints: 2,
        reqInt: 10,
        dex: 12,
        int: 0,
        str: 0,
      },
      beltMagic2: {
        img: (
          <img
            className='equipmentImgBelt'
            alt='BeltMagic2'
            src={require('../eventboard/img/Belts/BeltMagic2.gif')}
          ></img>
        ),
        name: '"I-can-not-believe-it-is-not-hindering"',
        ArmorPoints: 4,
        reqInt: 30,
        dex: 30,
        str: 0,
        int: 0,
      },
    },

    boots: {
      boot1: {
        img: (
          <img
            className='equipmentImg'
            alt='Boot1'
            src={require('../eventboard/img/Boots/Boot1.gif')}
          ></img>
        ),
        name: 'Comforties',
        ArmorPoints: 1,
        reqInt: 0,
        str: 0,
        dex: 1,
        int: 0,
      },
      boot2: {
        img: (
          <img
            className='equipmentImg'
            alt='Boot2'
            src={require('../eventboard/img/Boots/Boot2.gif')}
          ></img>
        ),
        name: 'Striders',
        ArmorPoints: 2,
        reqInt: 0,
        str: 0,
        dex: 2,
        int: 0,
      },
      boot3: {
        img: (
          <img
            className='equipmentImg'
            alt='Boot3'
            src={require('../eventboard/img/Boots/Boot3.gif')}
          ></img>
        ),
        name: 'Chafers',
        ArmorPoints: 3,
        reqInt: 0,
        str: 0,
        dex: 3,
        int: 0,
      },
      bootMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='BootMagic1'
            src={require('../eventboard/img/Boots/BootMagic1.gif')}
          ></img>
        ),
        name: 'Bring-Thick-Socks',
        ArmorPoints: 2,
        reqInt: 10,
        dex: 12,
        str: 0,
        int: 0,
      },
      bootMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='BootMagic2'
            src={require('../eventboard/img/Boots/BootMagic2.gif')}
          ></img>
        ),
        name: 'Light-urple',
        ArmorPoints: 4,
        reqInt: 30,
        dex: 30,
        str: 0,
        int: 0,
      },
      bootMagic3: {
        img: (
          <img
            className='equipmentImg'
            alt='BootMagic3'
            src={require('../eventboard/img/Boots/BootMagic3.gif')}
          ></img>
        ),
        name: 'Green-Skin',
        ArmorPoints: 6,
        reqInt: 40,
        dex: 40,
        str: 0,
        int: 0,
      },
    },

    glove: {
      glove1: {
        img: (
          <img
            className='equipmentImg'
            alt='Glove1'
            src={require('../eventboard/img/Gloves/Glove1.gif')}
          ></img>
        ),
        name: 'Kid-Skin',
        ArmorPoints: 1,
        reqInt: 0,
        str: 1,
        dex: 0,
        int: 0,
      },
      glove2: {
        img: (
          <img
            className='equipmentImg'
            alt='Glove2'
            src={require('../eventboard/img/Gloves/Glove2.gif')}
          ></img>
        ),
        name: 'Woolen Comfort',
        ArmorPoints: 2,
        reqInt: 0,
        str: 2,
        dex: 0,
        int: 0,
      },
      glove3: {
        img: (
          <img
            className='equipmentImg'
            alt='Glove3'
            src={require('../eventboard/img/Gloves/Glove3.gif')}
          ></img>
        ),
        name: 'Sir Wanks-A-Lot',
        ArmorPoints: 3,
        reqInt: 0,
        str: 3,
        dex: 0,
        int: 0,
      },
      glove4: {
        img: (
          <img
            className='equipmentImg'
            alt='Glove4'
            src={require('../eventboard/img/Gloves/Glove4.gif')}
          ></img>
        ),
        name: 'Barfighters Delight',
        ArmorPoints: 4,
        reqInt: 0,
        str: 4,
        dex: 0,
        int: 0,
      },
      gloveMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='GloveMagic1'
            src={require('../eventboard/img/Gloves/GloveMagic1.gif')}
          ></img>
        ),
        name: 'Light-urple',
        ArmorPoints: 2,
        reqInt: 10,
        str: 12,
        dex: 0,
        int: 0,
      },
      gloveMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='GloveMagic2'
            src={require('../eventboard/img/Gloves/GloveMagic2.gif')}
          ></img>
        ),
        name: 'Dragon Scales',
        ArmorPoints: 4,
        reqInt: 30,
        str: 30,
        dex: 0,
        int: 0,
      },
    },

    helm: {
      helm1: {
        img: (
          <img
            className='equipmentImg'
            alt='Helm1'
            src={require('../eventboard/img/Helmets/Helm1.gif')}
          ></img>
        ),
        name: 'Deer Hunter',
        ArmorPoints: 1,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 1,
      },
      helm2: {
        img: (
          <img
            className='equipmentImg'
            alt='Helm2'
            src={require('../eventboard/img/Helmets/Helm2.gif')}
          ></img>
        ),
        name: 'Dude, METAL!',
        ArmorPoints: 2,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 2,
      },
      helm3: {
        img: (
          <img
            className='equipmentImg'
            alt='Helm3'
            src={require('../eventboard/img/Helmets/Helm3.gif')}
          ></img>
        ),
        name: 'The Sauron Cosplay',
        ArmorPoints: 3,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 3,
      },
      helmMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='HelmMagic1'
            src={require('../eventboard/img/Helmets/HelmMagic1.gif')}
          ></img>
        ),
        name: 'King Diamond',
        ArmorPoints: 2,
        reqInt: 10,
        str: 0,
        dex: 0,
        int: 12,
      },
      helmMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='HelmMagic2'
            src={require('../eventboard/img/Helmets/HelmMagic2.gif')}
          ></img>
        ),
        name: 'Papa Smurf',
        ArmorPoints: 4,
        reqInt: 30,
        int: 30,
        str: 0,
        dex: 0,
      },
    },

    amulet: {
      amulet1: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Amulet1'
            src={require('../eventboard/img/Amulets/Amulet1.gif')}
          ></img>
        ),
        name: 'Made-Of-Tin',
        ArmorPoints: 8,
        reqInt: 10,
        str: 0,
        dex: 0,
        int: 0,
      },
      amulet2: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Amulet2'
            src={require('../eventboard/img/Amulets/Amulet2.gif')}
          ></img>
        ),
        name: 'Simba!',
        ArmorPoints: 12,
        reqInt: 30,
        str: 5,
        dex: 5,
        int: 5,
      },
      amulet3: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Amulet3'
            src={require('../eventboard/img/Amulets/Amulet3.gif')}
          ></img>
        ),
        name: '"Am I A Baddie?"',
        ArmorPoints: 50,
        reqInt: 40,
        str: 0,
        dex: 0,
        int: 0,
      },
    },

    ring: {
      ring1: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Ring1'
            src={require('../eventboard/img/Rings/Ring1.gif')}
          ></img>
        ),
        name: 'Ring of Strenth',
        ArmorPoints: 0,
        reqInt: 10,
        str: 10,
        dex: 0,
        int: 0,
      },
      ring2: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Ring2'
            src={require('../eventboard/img/Rings/Ring2.gif')}
          ></img>
        ),
        name: 'Ring of Agility',
        ArmorPoints: 0,
        reqInt: 10,
        str: 0,
        dex: 10,
        int: 0,
      },
      ring3: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Ring3'
            src={require('../eventboard/img/Rings/Ring3.gif')}
          ></img>
        ),
        name: 'Ring of Youtube-Tutorials',
        ArmorPoints: 0,
        reqInt: 10,
        str: 0,
        dex: 0,
        int: 10,
      },
      ring4: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Ring4'
            src={require('../eventboard/img/Rings/Ring4.gif')}
          ></img>
        ),
        name: 'Ring of No Imagination',
        ArmorPoints: 0,
        reqInt: 30,
        str: 10,
        dex: 10,
        int: 10,
      },
      ring5: {
        img: (
          <img
            className='equipmentImgRiNe'
            alt='Ring5'
            src={require('../eventboard/img/Rings/Ring5.gif')}
          ></img>
        ),
        name: 'The All-Rounder',
        ArmorPoints: 0,
        reqInt: 40,
        str: 20,
        dex: 20,
        int: 20,
      },
    },

    shield: {
      shield1: {
        img: (
          <img
            className='equipmentImg'
            alt='Shield1'
            src={require('../eventboard/img/Shields/Shield1.gif')}
          ></img>
        ),
        name: 'Painted Wood',
        ArmorPoints: 2,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      shield2: {
        img: (
          <img
            className='equipmentImg'
            alt='Shield2'
            src={require('../eventboard/img/Shields/Shield2.gif')}
          ></img>
        ),
        name: 'Dude, METAL!',
        ArmorPoints: 4,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      shield3: {
        img: (
          <img
            className='equipmentImg'
            alt='Shield3'
            src={require('../eventboard/img/Shields/Shield3.gif')}
          ></img>
        ),
        name: 'Valor of Khabib',
        ArmorPoints: 6,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      shield4: {
        img: (
          <img
            className='equipmentImg'
            alt='Shield4'
            src={require('../eventboard/img/Shields/Shield4.gif')}
          ></img>
        ),
        name: 'Penile Extension',
        ArmorPoints: 8,
        reqInt: 0,
        str: 0,
        dex: 0,
        int: 0,
      },
      shieldMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='ShieldMagic1'
            src={require('../eventboard/img/Shields/ShieldMagic1.gif')}
          ></img>
        ),
        name: 'Magic Painted Wood',
        ArmorPoints: 4,
        reqInt: 10,
        str: 0,
        dex: 0,
        int: 10,
      },
      shieldMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='ShieldMagic2'
            src={require('../eventboard/img/Shields/ShieldMagic2.gif')}
          ></img>
        ),
        name: 'Cosplay',
        ArmorPoints: 8,
        reqInt: 30,
        str: 0,
        dex: 0,
        int: 30,
      },
    },

    sword: {
      sword1: {
        img: (
          <img
            className='equipmentImg'
            alt='Sword1'
            src={require('../eventboard/img/Swords/Sword1.gif')}
          ></img>
        ),
        name: 'Useless Stick',
        ArmorPoints: 0,
        reqInt: 0,
        str: 6,
        dex: 0,
        int: 0,
      },
      sword2: {
        img: (
          <img
            className='equipmentImg'
            alt='Sword2'
            src={require('../eventboard/img/Swords/Sword2.gif')}
          ></img>
        ),
        name: 'Ever-Present',
        ArmorPoints: 0,
        reqInt: 0,
        str: 10,
        dex: 0,
        int: 0,
      },
      sword3: {
        img: (
          <img
            className='equipmentImg'
            alt='Sword3'
            src={require('../eventboard/img/Swords/Sword3.gif')}
          ></img>
        ),
        name: 'Giant Toothpick',
        ArmorPoints: 0,
        reqInt: 0,
        str: 14,
        dex: 0,
        int: 0,
      },
      sword4: {
        img: (
          <img
            className='equipmentImg'
            alt='Sword4'
            src={require('../eventboard/img/Swords/Sword4.gif')}
          ></img>
        ),
        name: 'SuperSword Replica',
        ArmorPoints: 0,
        reqInt: 0,
        str: 18,
        dex: 0,
        int: 0,
      },
      swordMagic1: {
        img: (
          <img
            className='equipmentImg'
            alt='SwordMagic1'
            src={require('../eventboard/img/Swords/SwordMagic1.gif')}
          ></img>
        ),
        name: 'Glowing Death',
        ArmorPoints: 0,
        reqInt: 10,
        str: 30,
        dex: 0,
        int: 0,
      },
      swordMagic2: {
        img: (
          <img
            className='equipmentImg'
            alt='SwordMagic2'
            src={require('../eventboard/img/Swords/SwordMagic2.gif')}
          ></img>
        ),
        name: 'SuperSword',
        ArmorPoints: 0,
        reqInt: 30,
        str: 50,
        dex: 0,
        int: 0,
      },
    },
  };
  var equipmentArray = [
    [
      equipmentObject.armor.armor1,
      equipmentObject.armor.armor2,
      equipmentObject.armor.armor3,
      equipmentObject.armor.armor4,
      equipmentObject.armor.armorMagic1,
      equipmentObject.armor.armorMagic2,
    ],
    [
      equipmentObject.sword.sword1,
      equipmentObject.sword.sword2,
      equipmentObject.sword.sword3,
      equipmentObject.sword.sword4,
      equipmentObject.sword.swordMagic1,
      equipmentObject.sword.swordMagic2,
    ],
    [
      equipmentObject.helm.helm1,
      equipmentObject.helm.helm2,
      equipmentObject.helm.helm3,
      equipmentObject.helm.helmMagic1,
      equipmentObject.helm.helmMagic2,
    ],
    [
      equipmentObject.ring.ring1,
      equipmentObject.ring.ring2,
      equipmentObject.ring.ring3,
      equipmentObject.ring.ring4,
      equipmentObject.ring.ring5,
    ],
    [
      equipmentObject.amulet.amulet1,
      equipmentObject.amulet.amulet2,
      equipmentObject.amulet.amulet3,
    ],
    [
      equipmentObject.belt.belt1,
      equipmentObject.belt.belt2,
      equipmentObject.belt.belt3,
      equipmentObject.belt.beltMagic1,
      equipmentObject.belt.beltMagic2,
    ],
    [
      equipmentObject.glove.glove1,
      equipmentObject.glove.glove2,
      equipmentObject.glove.glove3,
      equipmentObject.glove.glove4,
      equipmentObject.glove.gloveMagic1,
      equipmentObject.glove.gloveMagic2,
    ],
    [
      equipmentObject.boots.boot1,
      equipmentObject.boots.boot2,
      equipmentObject.boots.boot3,
      equipmentObject.boots.bootMagic1,
      equipmentObject.boots.bootMagic2,
      equipmentObject.boots.bootMagic3,
    ],
    [
      equipmentObject.shield.shield1,
      equipmentObject.shield.shield2,
      equipmentObject.shield.shield3,
      equipmentObject.shield.shield4,
      equipmentObject.shield.shieldMagic1,
      equipmentObject.shield.shieldMagic2,
    ],
  ];

  const int = useSelector((state) => state.int);
  const worldNumber = useSelector((state) => state.worldNumber);
  const itemCount = useSelector((state) => state.itemCount);
  const dispatch = useDispatch();
  const worldNumberItem = worldNumber - 3;

  var [emptyItem] = useState({
    img: (
      <img
        className='equipmentImgEmpty'
        alt='empty'
        src={require('../eventboard/img/emptyitemslot.jpg')}
        key='empty'
      ></img>
    ),
    name: 'empty',
    ArmorPoints: 0,
    reqInt: 0,
    str: 0,
    dex: 0,
    int: 0,
  });

  var [backpackArray, setBackpackArray] = useState([
    equipmentObject.sword.sword1,
    equipmentObject.shield.shield1,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
  ]);

  var [modal, setModal] = useState(false);
  var [currentEquipArray, setCurrentEquipArray] = useState([
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
  ]);

  var [equipIndex, setEquipIndex] = useState([
    1,
    8,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  var [currentEquipIndex, setCurrentEquipIndex] = useState(new Array(9));

  function itemRandomizer() {
    let randomNum = Math.floor(Math.random() * 9);
    let itemFind = equipmentArray[randomNum].length + worldNumberItem;
    if (itemFind < 0) {
      itemFind = 0;
    } else if (itemFind > equipmentArray[randomNum].length){
      itemFind = equipmentArray[randomNum].length
    }
    let selectedItem =
      equipmentArray[randomNum][Math.floor(Math.random() * itemFind)];
    let emptySpace = backpackArray.findIndex(
      (position) => position === emptyItem
    );
    let newArray = [...equipIndex];
    newArray[emptySpace] = randomNum;
    if (emptySpace !== -1) {
      setEquipIndex((equipIndex = newArray));
    }
    let newArray2 = [...backpackArray];
    newArray2[emptySpace] = selectedItem;
    if (emptySpace !== -1) {
      setBackpackArray((backpackArray = newArray2));
    }
    dispatch(incrementItemCounter(-1));
  }
  var [totalStr, setTotalStr] = useState(0);
  var [totalDex, setTotalDex] = useState(0);
  var [totalInt, setTotalInt] = useState(0);
  var [totalAP, setTotalAP] = useState(0);

  function calculateAttributes() {
    let result = currentEquipArray.reduce((a, b) => ({ str: a.str + b.str }));
    let calc = result.str - totalStr;
    setTotalStr((totalStr = totalStr + calc));
    dispatch(incrementStr(calc));
    result = currentEquipArray.reduce((a, b) => ({ dex: a.dex + b.dex }));
    calc = result.dex - totalDex;
    setTotalDex((totalDex = totalDex + calc));
    dispatch(incrementDex(calc));
    result = currentEquipArray.reduce((a, b) => ({ int: a.int + b.int }));
    calc = result.int - totalInt;
    setTotalInt((totalInt = totalInt + calc));
    dispatch(incrementInt(calc));
    result = currentEquipArray.reduce((a, b) => ({
      ArmorPoints: a.ArmorPoints + b.ArmorPoints,
    }));
    calc = result.ArmorPoints - totalAP;
    setTotalAP((totalAP = totalAP + calc));
    dispatch(incrementArmorPoints(calc));
  }

  function equipItem(e) {
    let idTarget = e.target.parentNode.id;
    let idInteger = parseInt(idTarget, 10);
    let idInteger2 = idInteger - 12;
    let selectedItem = currentEquipArray[idInteger2];
    let idToEquip = equipIndex[idInteger];
    if (idInteger > 11) {
      let emptySpace = backpackArray.findIndex(
        (position) => position === emptyItem
      );
      console.log(emptySpace);
      if (emptySpace === -1) {
        return undefined;
      } else {
        let newArray7 = [...equipIndex];
        newArray7[emptySpace] = currentEquipIndex[idInteger2];
        setEquipIndex((equipIndex = newArray7));
        let newArray8 = [...currentEquipIndex];
        newArray8[idInteger2] = undefined;
        setCurrentEquipIndex((currentEquipIndex = newArray8));
        let newArray2 = [...backpackArray];
        newArray2[emptySpace] = selectedItem;
        if (emptySpace !== -1) {
          setBackpackArray((backpackArray = newArray2));
        }
        let newArray3 = [...currentEquipArray];
        newArray3[idInteger2] = emptyItem;
        setCurrentEquipArray((currentEquipArray = newArray3));
        calculateAttributes();
      }
    } else {
      if (
        currentEquipArray[equipIndex[idInteger]] === emptyItem &&
        backpackArray[idInteger].reqInt <= int
      ) {
        let newArray = [...currentEquipArray];
        newArray[idToEquip] = backpackArray[idInteger];
        setCurrentEquipArray((currentEquipArray = newArray));
        newArray = [...backpackArray];
        newArray.splice(idInteger, 1, emptyItem);
        setBackpackArray((backpackArray = newArray));
        newArray = [...currentEquipIndex];
        newArray[idToEquip] = idToEquip;
        setCurrentEquipIndex((currentEquipIndex = newArray));
        newArray = [...equipIndex];
        newArray[idInteger] = undefined;
        setEquipIndex((equipIndex = newArray));
        calculateAttributes();
      } else {
        return undefined;
      }
    }
  }
  var [del, setDel] = useState(false);

  function delCondition() {
    if (del === false) {
      setDel((del = true));
    } else {
      setDel((del = false));
    }
  }
  function delItem(e) {
    let idTarget = e.target.parentNode.id;
    let idInteger = parseInt(idTarget, 10);
    let newArray = [...backpackArray];
    newArray.splice(idInteger, 1, emptyItem);
    setBackpackArray((backpackArray = newArray));
    newArray = [...equipIndex];
    newArray.splice(idInteger, 1, undefined);
    setEquipIndex((equipIndex = newArray));
    setDel((del = false));
  }

  if (!modal) {
    return (
      <React.Fragment>
        <div>
          <button
            className={itemCount === 0 ? 'ItemsButton' : 'ItemsButtonFlashing'}
            onClick={modalFunc}
          >
            Items
          </button>
        </div>
      </React.Fragment>
    );
  } else if (modal && !del) {
    return (
      <React.Fragment>
        <div>
          <button className='ItemsButton' onClick={modalFunc}>
            Items
          </button>
        </div>
        <div className='modal-bg'>
          <div className='ItemsModal'>
            <img
              src={require('../eventboard/img/daVinciMan.jpg')}
              alt='daVinciMan'
            ></img>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[0].name}
                  <br />
                  Armor Points: {currentEquipArray[0].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[0].str}
                  <br />
                  Dex: {currentEquipArray[0].dex}
                  <br />
                  Int: {currentEquipArray[0].Int}
                  <br />
                  Required Int: {currentEquipArray[0].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='12' className='armor'>
                {currentEquipArray[0].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[1].name}
                  <br />
                  Armor Points: {currentEquipArray[1].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[1].str}
                  <br />
                  Dex: {currentEquipArray[1].dex}
                  <br />
                  Int: {currentEquipArray[1].int}
                  <br />
                  Required Int: {currentEquipArray[1].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='13' className='weapon'>
                {currentEquipArray[1].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[2].name}
                  <br />
                  Armor Points: {currentEquipArray[2].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[2].str}
                  <br />
                  Dex: {currentEquipArray[2].dex}
                  <br />
                  Int: {currentEquipArray[2].int}
                  <br />
                  Required Int: {currentEquipArray[2].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='14' className='helmet'>
                {currentEquipArray[2].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[3].name}
                  <br />
                  Armor Points: {currentEquipArray[3].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[3].str}
                  <br />
                  Dex: {currentEquipArray[3].dex}
                  <br />
                  Int: {currentEquipArray[3].int}
                  <br />
                  Required Int: {currentEquipArray[3].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='15' className='ring'>
                {currentEquipArray[3].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[4].name}
                  <br />
                  Armor Points: {currentEquipArray[4].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[4].str}
                  <br />
                  Dex: {currentEquipArray[4].dex}
                  <br />
                  Int: {currentEquipArray[4].int}
                  <br />
                  Required Int: {currentEquipArray[4].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='16' className='necklace'>
                {currentEquipArray[4].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[5].name}
                  <br />
                  Armor Points: {currentEquipArray[5].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[5].str}
                  <br />
                  Dex: {currentEquipArray[5].dex}
                  <br />
                  Int: {currentEquipArray[5].int}
                  <br />
                  Required Int: {currentEquipArray[5].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='17' className='belt'>
                {currentEquipArray[5].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[6].name}
                  <br />
                  Armor Points: {currentEquipArray[6].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[6].str}
                  <br />
                  Dex: {currentEquipArray[6].dex}
                  <br />
                  Int: {currentEquipArray[6].int}
                  <br />
                  Required Int: {currentEquipArray[6].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='18' className='gloves'>
                {currentEquipArray[6].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[7].name}
                  <br />
                  Armor Points: {currentEquipArray[7].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[7].str}
                  <br />
                  Dex: {currentEquipArray[7].dex}
                  <br />
                  Int: {currentEquipArray[7].int}
                  <br />
                  Required Int: {currentEquipArray[7].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='19' className='boots'>
                {currentEquipArray[7].img}
              </div>
            </Tippy>
            <Tippy
              className='tippyToolTip'
              content={
                <span>
                  {currentEquipArray[8].name}
                  <br />
                  Armor Points: {currentEquipArray[8].ArmorPoints}
                  <br />
                  Str: {currentEquipArray[8].str}
                  <br />
                  Dex: {currentEquipArray[8].dex}
                  <br />
                  Int: {currentEquipArray[8].int}
                  <br />
                  Required Int: {currentEquipArray[0].reqInt}
                </span>
              }
            >
              <div onClick={equipItem} id='20' className='shield'>
                {currentEquipArray[8].img}
              </div>
            </Tippy>
            <div className='totalAttributes'>
              Total Ap: {totalAP}
              <br />
              Total Str: {totalStr}
              <br />
              Total Dex: {totalDex}
              <br />
              Total Int: {totalInt}
            </div>

            <div className='sixItemsInBackpack'>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[0].name}
                    <br />
                    Armor Points: {backpackArray[0].ArmorPoints}
                    <br />
                    Str: {backpackArray[0].str}
                    <br />
                    Dex: {backpackArray[0].dex}
                    <br />
                    Int: {backpackArray[0].int}
                    <br />
                    Required Int: {backpackArray[0].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='0' className='backpackItem'>
                  {backpackArray[0].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[1].name}
                    <br />
                    Armor Points: {backpackArray[1].ArmorPoints}
                    <br />
                    Str: {backpackArray[1].str}
                    <br />
                    Dex: {backpackArray[1].dex}
                    <br />
                    Int: {backpackArray[1].int}
                    <br />
                    Required Int: {backpackArray[1].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='1' className='backpackItem'>
                  {backpackArray[1].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[2].name}
                    <br />
                    Armor Points: {backpackArray[2].ArmorPoints}
                    <br />
                    Str: {backpackArray[2].str}
                    <br />
                    Dex: {backpackArray[2].dex}
                    <br />
                    Int: {backpackArray[2].int}
                    <br />
                    Required Int: {backpackArray[2].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='2' className='backpackItem'>
                  {backpackArray[2].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[3].name}
                    <br />
                    Armor Points: {backpackArray[3].ArmorPoints}
                    <br />
                    Str: {backpackArray[3].str}
                    <br />
                    Dex: {backpackArray[3].dex}
                    <br />
                    Int: {backpackArray[3].int}
                    <br />
                    Required Int: {backpackArray[3].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='3' className='backpackItem'>
                  {backpackArray[3].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[4].name}
                    <br />
                    Armor Points: {backpackArray[4].ArmorPoints}
                    <br />
                    Str: {backpackArray[4].str}
                    <br />
                    Dex: {backpackArray[4].dex}
                    <br />
                    Int: {backpackArray[4].int}
                    <br />
                    Required Int: {backpackArray[4].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='4' className='backpackItem'>
                  {backpackArray[4].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[5].name}
                    <br />
                    Armor Points: {backpackArray[5].ArmorPoints}
                    <br />
                    Str: {backpackArray[5].str}
                    <br />
                    Dex: {backpackArray[5].dex}
                    <br />
                    Int: {backpackArray[5].int}
                    <br />
                    Required Int: {backpackArray[5].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='5' className='backpackItem'>
                  {backpackArray[5].img}
                </div>
              </Tippy>
            </div>

            <div className='sixItemsInBackpack'>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[6].name}
                    <br />
                    Armor Points: {backpackArray[6].ArmorPoints}
                    <br />
                    Str: {backpackArray[6].str}
                    <br />
                    Dex: {backpackArray[6].dex}
                    <br />
                    Int: {backpackArray[6].int}
                    <br />
                    Required Int: {backpackArray[6].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='6' className='backpackItem'>
                  {backpackArray[6].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[7].name}
                    <br />
                    Armor Points: {backpackArray[7].ArmorPoints}
                    <br />
                    Str: {backpackArray[7].str}
                    <br />
                    Dex: {backpackArray[7].dex}
                    <br />
                    Int: {backpackArray[7].int}
                    <br />
                    Required Int: {backpackArray[7].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='7' className='backpackItem'>
                  {backpackArray[7].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[8].name}
                    <br />
                    Armor Points: {backpackArray[8].ArmorPoints}
                    <br />
                    Str: {backpackArray[8].str}
                    <br />
                    Dex: {backpackArray[8].dex}
                    <br />
                    Int: {backpackArray[8].int}
                    <br />
                    Required Int: {backpackArray[8].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='8' className='backpackItem'>
                  {backpackArray[8].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[9].name}
                    <br />
                    Armor Points: {backpackArray[9].ArmorPoints}
                    <br />
                    Str: {backpackArray[9].str}
                    <br />
                    Dex: {backpackArray[9].dex}
                    <br />
                    Int: {backpackArray[9].int}
                    <br />
                    Required Int: {backpackArray[9].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='9' className='backpackItem'>
                  {backpackArray[9].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[10].name}
                    <br />
                    Armor Points: {backpackArray[10].ArmorPoints}
                    <br />
                    Str: {backpackArray[10].str}
                    <br />
                    Dex: {backpackArray[10].dex}
                    <br />
                    Int: {backpackArray[10].int}
                    <br />
                    Required Int: {backpackArray[10].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='10' className='backpackItem'>
                  {backpackArray[10].img}
                </div>
              </Tippy>
              <Tippy
                className='tippyToolTip'
                content={
                  <span>
                    {backpackArray[11].name}
                    <br />
                    Armor Points: {backpackArray[11].ArmorPoints}
                    <br />
                    Str: {backpackArray[11].str}
                    <br />
                    Dex: {backpackArray[11].dex}
                    <br />
                    Int: {backpackArray[11].int}
                    <br />
                    Required Int: {backpackArray[11].reqInt}
                  </span>
                }
              >
                <div onClick={equipItem} id='11' className='backpackItem'>
                  {backpackArray[11].img}
                </div>
              </Tippy>
            </div>
            <button className='ItemsButton2' onClick={modalFunc}>
              Return
            </button>
            {itemCount > 0 &&
            backpackArray.findIndex((position) => position === emptyItem) !==
              -1 ? (
              <div className='modal-bg'>
                <button className='conItemButton' onClick={itemRandomizer}>
                  Claim Item! <br /> {itemCount}
                </button>
              </div>
            ) : undefined}

            <button onClick={delCondition}>DeleteItem</button>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className='modal-bg'>
          <div className='ItemsModal'>
            <img
              src={require('../eventboard/img/daVinciMan.jpg')}
              alt='daVinciMan'
            ></img>
            <div onClick={equipItem} id='12' className='armor'>
              {currentEquipArray[0].img}
            </div>
            <div onClick={equipItem} id='13' className='weapon'>
              {currentEquipArray[1].img}
            </div>
            <div onClick={equipItem} id='14' className='helmet'>
              {currentEquipArray[2].img}
            </div>
            <div onClick={equipItem} id='15' className='ring'>
              {currentEquipArray[3].img}
            </div>
            <div onClick={equipItem} id='16' className='necklace'>
              {currentEquipArray[4].img}
            </div>
            <div onClick={equipItem} id='17' className='belt'>
              {currentEquipArray[5].img}
            </div>
            <div onClick={equipItem} id='18' className='gloves'>
              {currentEquipArray[6].img}
            </div>
            <div onClick={equipItem} id='19' className='boots'>
              {currentEquipArray[7].img}
            </div>
            <div onClick={equipItem} id='20' className='shield'>
              {currentEquipArray[8].img}
            </div>
            <div className='sixItemsInBackpack'>
              <div onClick={delItem} id='0' className='backpackItemred'>
                {backpackArray[0].img}
              </div>
              <div onClick={delItem} id='1' className='backpackItemred'>
                {backpackArray[1].img}
              </div>
              <div onClick={delItem} id='2' className='backpackItemred'>
                {backpackArray[2].img}
              </div>
              <div onClick={delItem} id='3' className='backpackItemred'>
                {backpackArray[3].img}
              </div>
              <div onClick={delItem} id='4' className='backpackItemred'>
                {backpackArray[4].img}
              </div>
              <div onClick={delItem} id='5' className='backpackItemred'>
                {backpackArray[5].img}
              </div>
            </div>
            <div className='sixItemsInBackpack'>
              <div onClick={delItem} id='6' className='backpackItemred'>
                {backpackArray[6].img}
              </div>
              <div onClick={delItem} id='7' className='backpackItemred'>
                {backpackArray[7].img}
              </div>
              <div onClick={delItem} id='8' className='backpackItemred'>
                {backpackArray[8].img}
              </div>
              <div onClick={delItem} id='9' className='backpackItemred'>
                {backpackArray[9].img}
              </div>
              <div onClick={delItem} id='10' className='backpackItemred'>
                {backpackArray[10].img}
              </div>
              <div onClick={delItem} id='11' className='backpackItemred'>
                {backpackArray[11].img}
              </div>
            </div>
            <button onClick={delCondition}>DeleteItem</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Items;
