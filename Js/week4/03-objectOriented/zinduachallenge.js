class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

class Superhero extends Character {
    constructor(name, health, strength, specialAbility) {
        super(name, health, strength);
        this.specialAbility = specialAbility;
    }

    useSpecialAbility() {
        console.log(`${this.name} uses their special ability: ${this.specialAbility}`);
    }
}

class IronMan extends Superhero {
    constructor(name, health, strength, specialAbility, suitType) {
        super(name, health, strength, specialAbility);
        this.suitType = suitType;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} with their ${this.suitType} suit`);
        target.takeDamage(this.strength * 2);
    }
}

class CaptainAmerica extends Superhero {
    constructor(name, health, strength, specialAbility, shieldType) {
        super(name, health, strength, specialAbility);
        this.shieldType = shieldType;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} with their ${this.shieldType} shield`);
        target.takeDamage(this.strength);
    }
}

class SpiderMan extends Superhero {
    constructor(name, health, strength, specialAbility, webType) {
        super(name, health, strength, specialAbility);
        this.webType = webType;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} with their ${this.webType} web`);
        target.takeDamage(this.strength / 2);
    }
}

const ironMan = new IronMan('Iron Man', 100, 10, 'Repulsor Ray', 'Mark III');
const captainAmerica = new CaptainAmerica('Captain America', 90, 8, 'Star-Spangled Shield', 'Vibranium');
const spiderMan = new SpiderMan('Spider-Man', 80, 6, 'Web Slinging', 'Organic Web');

ironMan.attack(captainAmerica); 
captainAmerica.useSpecialAbility(); 
spiderMan.attack(ironMan); 
