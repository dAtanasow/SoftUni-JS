// Create a function, which creates a register for heroes, with their names, level, and items (if they have such).

// The input comes as an array of strings. Each element holds data for a hero, in the following format:

// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:

// Hero: {heroName}

// level => {heroLevel}

// Items => {item1}, {item2}, {item3}

function inventory(arr) {
    let heroes = []
    arr.forEach((heroInfo) => {
        let [name, level, items] = heroInfo.split(' / ')
        level = Number(level)
        
        let hero = {
            name: name,
            level: level,
            items: items
        }
        heroes.push(hero)
        
    });
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nItems => ${hero.items}`);
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])