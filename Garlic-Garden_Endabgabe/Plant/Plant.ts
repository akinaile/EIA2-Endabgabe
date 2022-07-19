/*
Gemüsegarten-Simulator
Aileen Akin, 266826, MKB2
In Zusammenarbeit mit Vanja Katharina Rau, 262452, MKB6
Teilweise Zusammenarbeit mit Ronja Burger, Joscha Reuther
*/

namespace farm {

    export class Plant {

        name: string;
        growthTime: number;
        waterNeed: number;
        waterNeedTime: number = 60;
        dungNeed: number;
        dungNeedTime: number = 70; 
        image: string;
        
        constructor(name: string, _growthTime: number, _waterNeed: number, _dungNeed: number, _image: string) {
            this.name = name;
            this.growthTime = _growthTime;
            this.waterNeed = _waterNeed;
            this.waterNeedTime = 60;
            this.dungNeed = _dungNeed;
            this.dungNeedTime = 70;   
            this.image = _image;
        }  

    }


}