"use strict";
var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        // selektieren der einzelnden Images
        let salad = document.getElementById("salad");
        let carrot = document.getElementById("carrot");
        let potato = document.getElementById("potato");
        let eggplant = document.getElementById("eggplant");
        let garlic = document.getElementById("garlic");
        let dung = document.getElementById("dung");
        let pesticide = document.getElementById("pesticide");
        // ruft die Bilder auf, fügt click event hinzu bei click auf ein item um funktion des kaufens auszulösen
        salad.addEventListener("click", buySalad);
        carrot.addEventListener("click", buyCarrot);
        potato.addEventListener("click", buyPotato);
        eggplant.addEventListener("click", buyEggplant);
        garlic.addEventListener("click", buyGarlic);
        dung.addEventListener("click", buyDung);
        pesticide.addEventListener("click", buyPesticide);
    }
    // hide screen 1 and show screen 2
    function hideScreen1() {
        let screen1 = document.getElementById("Screen1"); //nimmt das Div element aus der html und gibt ihn einen namen
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none"; //startseite unsichtbar machen, mit dem namen den wir vorher gegeben haben
        screen2.style.display = "unset"; //unset ist quasi das gegenteil von none, also sichtbar machen
        createFields(); //wenn screen getauscht werden, dannwird die funtion zum erstellen der felder gestartet
    }
    // create fields
    function createFields() {
        for (let index = 0; index < 7; index++) { //zählt die felder bis 7, selektiert die reihen 
            document.querySelector("row" + index); //ID wird aus der HTML geholt
            let rows = document.getElementById("row" + index); //ID wird einen Namen gegeben und selektiert
            //erstellt einzelne felder in reihen
            for (let index = 0; index < 7; index++) { // erstellt 7 Reihen
                let field = document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field); //rows ist das parent von field, weil die felder in den reihen liegen
                //erstellt für die fields jeweils eine progessbar, die den state abbilden
                let stateScreen = document.createElement("div");
                stateScreen.classList.add("state");
                field.appendChild(stateScreen); //field ist das parent von statescreen (progessbar anezige), um es fest an die einzelnen Felder zu binden
            }
        }
        readData(); //nachdem das feld geladen ist, werden die daten aus dem settingsmenü (form) angewendet
    }
    // read formdata
    function readData() {
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "Price":
                    garden.priceVariation = Number(entry[1]);
                    console.log(garden.priceVariation); //funktioniert nicht?
                    break;
                case "Startcapital":
                    garden.capital = Number(entry[1]);
            }
        }
        // show entry in div
        let capitalDiv = document.getElementById("capital");
        capitalDiv.innerHTML = "TOTAL: " + garden.capital.toString();
    }
    // Variables für the vegetables counters
    let counterSalad = 0; // die Counter sind zunächst bei 0, bis buy function durch click aktiviert wird
    let counterCarrot = 0;
    let counterPotato = 0;
    let counterEggplant = 0;
    let counterGarlic = 0;
    let counterDung = 0;
    let counterPesticide = 0;
    // functions to buy vegetables - salad
    function buySalad() {
        let saladcounter = document.getElementById("saladCounter"); //selektiert den salad counter
        counterSalad++; // bei click = counter +1 im storage
        saladcounter.innerHTML = counterSalad.toString(); // sagt, dass es innerhalb der HTML geändert werden muss
    }
    // functions to buy vegetables - carrot
    function buyCarrot() {
        let carrotcounter = document.getElementById("carrotCounter");
        counterCarrot++;
        carrotcounter.innerHTML = counterCarrot.toString();
    }
    // functions to buy vegetables - potato
    function buyPotato() {
        let potatocounter = document.getElementById("potatoCounter");
        counterPotato++;
        potatocounter.innerHTML = counterPotato.toString();
    }
    // functions to buy vegetables - eggplant
    function buyEggplant() {
        let eggplantcounter = document.getElementById("eggplantCounter");
        counterEggplant++;
        eggplantcounter.innerHTML = counterEggplant.toString();
    }
    // functions to buy vegetables - garlic
    function buyGarlic() {
        let garliccounter = document.getElementById("garlicCounter");
        counterGarlic++;
        garliccounter.innerHTML = counterGarlic.toString();
    }
    // functions to buy dung 
    function buyDung() {
        let dungcounter = document.getElementById("dungCounter");
        counterDung++;
        dungcounter.innerHTML = counterDung.toString();
    }
    // functions to buy pesticide
    function buyPesticide() {
        let pesticidecounter = document.getElementById("pesticideCounter");
        counterPesticide++;
        pesticidecounter.innerHTML = counterPesticide.toString();
    }
})(garden || (garden = {})); // namespace klammer
//# sourceMappingURL=main.js.map