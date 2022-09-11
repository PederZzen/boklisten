// console.log("Boklisten");
// const output = document.querySelector(".output");
// const sorterÅrKnapp = document.querySelector(".sorterÅr");
// const sorterTittelKnapp = document.querySelector(".sorterTittel");
// const sorterNavnOgTittelKnapp = document.querySelector(".sorterNavnOgTittel");

// class bok {
//     constructor ( f, e, t, å ) {
//         this.fornavnForfatter = f;
//         this.etternavnForfatter = e;
//         this.tittel = t;
//         this.år = å;
//     }

//     toString() {
//         return `${this.fornavnForfatter} ${this.etternavnForfatter}: ${this.tittel} (${this.år})`
//     }

//     static sammenlignÅr ( a, b ) { return b.år - a.år }

//     static sammenlignTittel ( a, b ) {

//         let aTittel = a.tittel.toLowerCase();
//         let bTittel = b.tittel.toLowerCase();

//         if (aTittel < bTittel) return -1; 
//         if (aTittel > bTittel) return 1;
        
//         return 0;
//     }

//     static sammenlignNavnOgTittel ( a, b ) {
//         let aEtternavn = a.etternavnForfatter.toLowerCase();
//         let bEtternavn = b.etternavnForfatter.toLowerCase();

//         let aFornavn = a.fornavnForfatter.toLowerCase();
//         let bFornavn = b.fornavnForfatter.toLowerCase();

//         let aTittel = a.tittel.toLowerCase();
//         let bTittel = b.tittel.toLowerCase();

//         if (aEtternavn < bEtternavn) return -1;
//         if (aEtternavn > bEtternavn) return 1;

//         if (aFornavn < bFornavn) return -1;
//         if (aFornavn > bFornavn) return 1;

//         if (aTittel < bTittel) return -1; 
//         if (aTittel > bTittel) return 1;

//         return 0;
//     }
// }

// const bøker = [
//     new bok("J. R. R.", "Tolkien", "Ringenes Herre", 1954),
//     new bok("J. R. R.", "Tolkien", "Hobbiten", 1937),
//     new bok("J. R. R.", "Tolkien", "Silmarillion", 1977),
//     new bok("Bill", "Bryson", "A Walk In The Woods", 1998),
//     new bok("Bill", "Bryson", "Down Under", 2000),
//     new bok("Yuval Noah", "Harari", "Sapiens: A Brief History of Humankind", 2011),
//     new bok("Yuval Noah", "Harari", "Homo Deus", 2015),
//     new bok("Terry", "Hayes", "I Am Pilgrim", 2013),
//     new bok("George R. R.", "Martin", "A Game of Thrones", 1996),
//     new bok("George R. R.", "Martin", "A Clash of Kings", 1998),
// ]

// let listBøker = () => {
//     output.innerHTML = "";

//     for (let bok of bøker) {
//         console.log(bok.toString());
//         output.innerHTML += `<p>${bok.toString()}</p>`;
//     }    
// }

// listBøker();

// sorterÅrKnapp.addEventListener("click", () => {
//     bøker.sort(bok.sammenlignÅr);
//     listBøker();
// })

// sorterTittelKnapp.addEventListener("click", () => {
//     bøker.sort(bok.sammenlignTittel);
//     listBøker();
// })

// sorterNavnOgTittelKnapp.addEventListener("click", () => {
//     bøker.sort(bok.sammenlignNavnOgTittel);
//     listBøker();
// })

//-----------------------------

console.log("Boklisten");
const output = document.querySelector(".output");
const sorterÅrKnapp = document.querySelector(".sorterÅr");
const sorterTittelKnapp = document.querySelector(".sorterTittel");
const sorterNavnOgTittelKnapp = document.querySelector(".sorterNavnOgTittel"); 

class bok {
    constructor ( f, l, t, y ) {
        this.firstName = f,
        this.lastName = l,
        this.title = t;
        this.year = y;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (${this.title}), ${this.year}`
    }

    static sortByYear ( a, b ) {
        return b.year - a.year
    }

    static sortByTitle ( a, b ) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    static sortByAuthor ( a, b ) {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;

        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;

        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }
}

const bøker = [
    new bok("J. R. R.", "Tolkien", "Ringenes Herre", 1954),
    new bok("J. R. R.", "Tolkien", "Hobbiten", 1937),
    new bok("J. R. R.", "Tolkien", "Silmarillion", 1977),
    new bok("Bill", "Bryson", "A Walk In The Woods", 1998),
    new bok("Bill", "Bryson", "Down Under", 2000),
    new bok("Yuval Noah", "Harari", "Sapiens: A Brief History of Humankind", 2011),
    new bok("Yuval Noah", "Harari", "Homo Deus", 2015),
    new bok("Terry", "Hayes", "I Am Pilgrim", 2013),
    new bok("George R. R.", "Martin", "A Game of Thrones", 1996),
    new bok("George R. R.", "Martin", "A Clash of Kings", 1998),
]


const listStuff = () => {
    output.innerHTML = "";

    for (let bok of bøker) {
        console.log(bok);
        output.innerHTML += `<p>${bok.toString()}</p>`;
    }    
}

listStuff();

sorterÅrKnapp.addEventListener("click", () => {
    bøker.sort(bok.sortByYear);
    listStuff();
})

sorterTittelKnapp.addEventListener("click", () => {
    bøker.sort(bok.sortByTitle);
    listStuff();
})

sorterNavnOgTittelKnapp.addEventListener("click", () => {
    bøker.sort(bok.sortByAuthor);
    listStuff();
})