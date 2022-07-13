namespace garden {
    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hideScreen1);

        // selektieren der einzelnden Images
        let salad: HTMLImageElement = <HTMLImageElement>document.getElementById("salad");
        let carrot: HTMLImageElement = <HTMLImageElement>document.getElementById("carrot");
        let potato: HTMLImageElement = <HTMLImageElement>document.getElementById("potato");
        let eggplant: HTMLImageElement = <HTMLImageElement>document.getElementById("eggplant");
        let garlic: HTMLImageElement = <HTMLImageElement>document.getElementById("garlic");
        let dung: HTMLImageElement = <HTMLImageElement>document.getElementById("dung");
        let pesticide: HTMLImageElement = <HTMLImageElement>document.getElementById("pesticide");
        
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
    function hideScreen1(): void {
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1"); //nimmt das Div element aus der html und gibt ihn einen namen
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none"; //startseite unsichtbar machen, mit dem namen den wir vorher gegeben haben
        screen2.style.display = "unset"; //unset ist quasi das gegenteil von none, also sichtbar machen
        createFields(); //wenn screen getauscht werden, dannwird die funtion zum erstellen der felder gestartet
    }

// create fields
    function createFields(): void { 

        for (let index: number = 0; index < 7; index++) { //zählt die felder bis 7, selektiert die reihen 
            document.querySelector("row" + index); //ID wird aus der HTML geholt
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index); //ID wird einen Namen gegeben und selektiert
    
    
            //erstellt einzelne felder in reihen
            for (let index: number = 0; index < 7; index++) { // erstellt 7 Reihen
                let field: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field); //rows ist das parent von field, weil die felder in den reihen liegen
                
                //erstellt für die fields jeweils eine progessbar, die den state abbilden
                let stateScreen: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                stateScreen.classList.add("state");
                field.appendChild(stateScreen); //field ist das parent von statescreen (progessbar anezige), um es fest an die einzelnen Felder zu binden
                }
            }
        readData(); //nachdem das feld geladen ist, werden die daten aus dem settingsmenü (form) angewendet
        }

    // Variables for formdata 
    export let priceVariation: number; //export, weil die variablen bereits außerhalb der funktion existiern
    export let capital: number;

    // read formdata = für das auslesen der eigebenen Werte der settings
    function readData(): void {
        let formdata: FormData = new FormData(document.forms[0]);

        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "Price":
                    priceVariation = Number(entry[1]);
                    break;
                case "Startcapital":
                    capital = Number(entry[1]);
                    console.log(capital);
            }
        }
        // show entry in div
        let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
        capitalDiv.innerHTML = capital.toString();
    }
        
    // Variables für the vegetables counters
    let counterSalad: number = 0; // die Counter sind zunächst bei 0, bis buy function durch click aktiviert wird
    let counterCarrot: number = 0; 
    let counterPotato: number = 0;
    let counterEggplant: number = 0;
    let counterGarlic: number = 0;
    let counterDung: number = 0;
    let counterPesticide: number = 0;

    // functions to buy vegetables - salad
    function buySalad(): void { //function wird bei click aufgerufen
        let saladcounter: HTMLDivElement = <HTMLDivElement>document.getElementById("saladCounter"); //selektiert den salad counter
        counterSalad++; // bei click = counter +1 im storage
        saladcounter.innerHTML = counterSalad.toString(); // sagt, dass es innerhalb der HTML geändert werden muss
    }

    // functions to buy vegetables - carrot
    function buyCarrot(): void {
        let carrotcounter: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
        counterCarrot++;
        carrotcounter.innerHTML = counterCarrot.toString();
    }

    // functions to buy vegetables - potato
    function buyPotato(): void {
        let potatocounter: HTMLDivElement = <HTMLDivElement>document.getElementById("potatoCounter");
        counterPotato++;
        potatocounter.innerHTML = counterPotato.toString();
    }

    // functions to buy vegetables - eggplant
    function buyEggplant(): void {
        let eggplantcounter: HTMLDivElement = <HTMLDivElement>document.getElementById("eggplantCounter");
        counterEggplant++;
        eggplantcounter.innerHTML = counterEggplant.toString();
    }

    // functions to buy vegetables - garlic
    function buyGarlic(): void {
        let garliccounter: HTMLDivElement = <HTMLDivElement>document.getElementById("garlicCounter");
        counterGarlic++;
        garliccounter.innerHTML = counterGarlic.toString();
    }

    // functions to buy dung 
    function buyDung(): void {
        let dungcounter: HTMLDivElement = <HTMLDivElement>document.getElementById("dungCounter");
        counterDung++;
        dungcounter.innerHTML = counterDung.toString();
    }

    // functions to buy pesticide
    function buyPesticide(): void {
        let pesticidecounter: HTMLDivElement = <HTMLDivElement>document.getElementById("pesticideCounter");
        counterPesticide++;
        pesticidecounter.innerHTML = counterPesticide.toString();
    }

} // namespace klammer
