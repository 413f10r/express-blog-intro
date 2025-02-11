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

//leggere la cartella public
app.use(express.static('public'));


app.get("/", (req, res) => {

    res.send(`Server del mio blog`);

})

app.get("/bacheca", (req, res) => {
    const posts = [
        {
            titolo: "Ciambellone della nonna",
            contenuto: "La ricetta del ciambellone più buono del mondo, perfetto per la colazione o la merenda.",
            immagine: "img/ciambellone.jpeg",
            tags: ["dolci", "cucina italiana", "ricette della nonna"]
        },
        {
            titolo: "Cracker di barbabietola fatti in casa",
            contenuto: "Croccanti e gustosi, questi cracker sono un'alternativa sana e sfiziosa agli snack confezionati.",
            immagine: "img/cracker_barbabietola.jpeg",
            tags: ["snack", "ricette salutari", "barbabietola"]
        },
        {
            titolo: "Pane fritto dolce: una delizia per il palato",
            contenuto: "Un dolce semplice e goloso, perfetto per concludere un pasto in bellezza.",
            immagine: "img/pane_fritto_dolce.jpeg",
            tags: ["dolci fritti", "ricette regionali", "cucina povera"]
        },
        {
            titolo: "Pasta alla barbabietola: un piatto colorato e gustoso",
            contenuto: "Un primo piatto originale e ricco di sapore, perfetto per una cena tra amici.",
            immagine: "img/pasta_barbabietola.jpeg",
            tags: ["primi piatti", "ricette vegetariane", "barbabietola"]
        },
        {
            titolo: "Torta paesana: un classico della cucina tradizionale",
            contenuto: "Un dolce rustico e genuino, perfetto per una merenda in campagna o un picnic all'aria aperta.",
            immagine: "img/torta_paesana.jpeg",
            tags: ["dolci tradizionali", "ricette regionali", "cucina italiana"]
        }
    ];



    res.json(posts);

})


//attivazione del server: http:localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




