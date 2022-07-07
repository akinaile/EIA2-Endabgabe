namespace garden {
    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        //img click 
        /*let img: HTMLImageElement = <HTMLImageElement>document.getElementById("img");
        img.addEventListener("click", hideScreen1);
        console.log("click");*/
    }

// hide screen 1 and show screen 2
    function hideScreen1(): void {
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1");
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
    }


} // namespace klammer
