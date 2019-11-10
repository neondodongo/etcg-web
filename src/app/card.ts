export class Card {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string; 
    imageUrlHiRes: string;
    types: string[];
    supertype: string;
    subtype: string;
    ability: Ability;
    ancientTrait: AncientTrait;
    hp: any;
    retreatCost: string[];
    convertedRetreatCost: number;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    text: string[];
    attacks: Attack[];
    weaknesses: Weakness[];
    evolvesFrom: string;
}

class Ability {
    name: string;
    text: string;
    type: string;
}

class AncientTrait {
    name: string;
    text: string;
}

class Attack {
    cost: string[];
    name: string;
    text: string;
    damage: any;
    convertedEnergyCost: number;
}

class Weakness {

}
