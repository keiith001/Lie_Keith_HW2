import gryffindorCrest from '../images/gryffindor-crest.webp';
import hufflepuffCrest from '../images/hufflepuff-crest.webp';
import ravenclawCrest from '../images/ravenclaw-crest.webp';
import slytherinCrest from '../images/slytherin-crest.webp';

class Houses{
    constructor(
        crest,
        name,
        founder,
        ghost,
        symbol,
        colours,
        description,
        commonroom
    ) {
        this.crest = crest;
        this.name = name;
        this.founder = founder;
        this.ghost = ghost;
        this.symbol = symbol;
        this.colours = colours;
        this.description = description;
        this.commonroom = commonroom;
    }

    // Generate House Crests 
    generateCrest() {
        const img = document.createElement("img");
        img.src = this.crest;
        img.alt = `${this.name} Crest`;
        img.classList.add("houses-crest");
        return img;
    }

    // Generate Details
    generateDetails() {
        return `
            <h4>${this.name}</h4>
            <p><strong>Founder:</strong> ${this.founder}</p>
            <p><strong>House Ghost:</strong> ${this.ghost}</p>
            <p><strong>Symbol:</strong> ${this.symbol}</p>
            <p><strong>Colours:</strong> ${this.colours}</p>
            <p><strong>Description:</strong> ${this.description}</p>
            <p><strong>Common Room:</strong> ${this.commonroom}</p>
        `;
    }
}

// Sub Class
class Gryffindor extends Houses {
    constructor() {
        super(
            gryffindorCrest, 
            "Gryffindor", 
            "Godric Gryffindor", 
            "Nearly Headless Nick", 
            "Lion", 
            "Deep red and gold", 
            "Well known for courage, bravery, daring, nerve, and chivalry",
            "The entrance to the common room was on the seventh floor hidden behind a portrait of the Fat Lady. To enter, the correct password must be provided."
        );
    }
}

class Hufflepuff extends Houses {
    constructor() {
        super(
            hufflepuffCrest, 
            "Hufflepuff", 
            "Helga Hufflepuff", 
            "Fat Friar", 
            "Badger", 
            "Yellow and Black", 
            "Well known for loyalty, patience, hard work, fair-play, honesty, and tolerance.",
            "Located near the kitchens. To enter, one must tap a fake barrel in the rhythm 'Helga Hufflepuff.' It was the only common room to have a way to keep students from other houses out (by dumping vinegar on them)."
        );
    }
}

class Ravenclaw extends Houses {
    constructor() {
        super(
            ravenclawCrest, 
            "Ravenclaw", 
            "Rowena Ravenclaw", 
            "The Grey Lady", 
            "Eagle", 
            "Blue and bronze", 
            "Values intelligence, wit, cleverness, creativity, and wisdom.",
            "Located in a high tower, and the interior was decorated with blue and bronze. To enter, one must answer a riddle from an eagle door knocker."
        );
    }
}

class Slytherin extends Houses {
    constructor() {
        super(
            slytherinCrest, 
            "Slytherin", 
            "Salazar Slytherin", 
            "The Bloody Baron", 
            "Serpent", 
            "Green and silver", 
            "Values ambition, leadership, cunning, determination, and resourcefulness.",
            "Located in the dungeons, underneath the Black Lake, and hidden behind a stone wall. To enter, the correct password must be provided."
        );
    }
}

export {Gryffindor, Hufflepuff, Ravenclaw, Slytherin};