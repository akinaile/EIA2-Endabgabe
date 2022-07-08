namespace garden {
    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hideScreen1);
    }

// hide screen 1 and show screen 2
    function hideScreen1(): void {
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1");
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }

        // create fields
    function createFields(): void { 

            //iterate through rows
        for (let index: number = 0; index < 7; index++) { //zählt die felder bis 7, selektiert die reihen 
            document.querySelector("row" + index);
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index);
    
    
            //erstellt einzelne felder in reihen
            for (let index: number = 0; index < 9; index++) { // erstellt 7 Reihen
                let field: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                //erstellt für die fields jeweils eine progessbar, die den state abbilden
                let stateScreen: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                stateScreen.classList.add("state");
                field.appendChild(stateScreen);
                }
            }
        }

} // namespace klammer
