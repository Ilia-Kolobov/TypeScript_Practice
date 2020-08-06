import { IFighter } from "./interfaces/IFighter";

export function fight(firstFighter: IFighter, secondFighter: IFighter): IFighter {
  // return winner
  let firstFighterHelth:number = firstFighter.health; 
  let secondFighterHelth:number = secondFighter.health;
  let winner: IFighter;
  console.log("Бой начался...");
  let damage:number;
  while(true)
  {
    damage = getDamage(firstFighter,secondFighter);
    secondFighterHelth -= damage;
    console.log(`(${firstFighter.name}) Удар -${damage}`);

    if(secondFighterHelth<=0)
    {
      winner = firstFighter;
      break;
    }

    damage = getDamage(secondFighter,firstFighter);
    firstFighterHelth -= damage;
    console.log(`(${secondFighter.name}) Удар -${damage}`);

    if(firstFighterHelth<=0)
    {
      winner = secondFighter;
      break;
    }
  }
  
  return winner;
}

export function getDamage(attacker:IFighter, enemy:IFighter): number {
  // damage = hit - block
  // return damage 
  let damage: number = getHitPower(attacker) - getBlockPower(enemy);
  return (damage>0)?damage:0;
}

export function getHitPower(fighter: IFighter): number {
  // return hit power
  let criticalHitChance: number = getRandomNumberBetween(1,2);
  return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter: IFighter): number {
  // return block power
  let dodgeChance: number = getRandomNumberBetween(1,2);
  return fighter.defense * dodgeChance;
}

function getRandomNumberBetween(min:number,max:number): number{
  return Math.random() * (max - min) + min;
}