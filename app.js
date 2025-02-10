// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman


/*
1- npm init
2 - npm i express
3- creo il file .gitignore
4- impostiamo l'importazione di express
5- attiviamo la chiamata al server con porta :3000
6- impostato la rotta "/api/pizze" per ottenere i dati come api
7- aggiornato packagejson : con
    "start": "node app.js",
    "watch": "node --watch app.js"
8- attivato da terminale il server con: npm run watch
9- controlliamo la rotta su postman
10- creo la cartella public
*/

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {

    res.send(`Server del mio blog`);

})

//attivazione del server: http:localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



const posts = [
    {
        titolo: "Titolo del primo post",
        contenuto: "Contenuto del primo post",
        immagine: "url/dell/immagine1.jpg",
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        titolo: "Titolo del secondo post",
        contenuto: "Contenuto del secondo post",
        immagine: "url/dell/immagine2.jpg",
        tags: ["tag4", "tag5"]
    },
    {
        titolo: "Titolo del terzo post",
        contenuto: "Contenuto del terzo post",
        immagine: "url/dell/immagine3.jpg",
        tags: ["tag6", "tag7", "tag8", "tag9"]
    },
    {
        titolo: "Titolo del quarto post",
        contenuto: "Contenuto del quarto post",
        immagine: "url/dell/immagine4.jpg",
        tags: ["tag10", "tag11"]
    },
    {
        titolo: "Titolo del quinto post",
        contenuto: "Contenuto del quinto post",
        immagine: "url/dell/immagine5.jpg",
        tags: ["tag12"]
    }
];