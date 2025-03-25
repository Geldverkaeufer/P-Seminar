import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    stretch: true,
    letterbox: true,
    background: [0, 0, 0]
})

load.assets()

const scenes = {
    polizeiMap: () => {
        uiManager.displayPolizeiMap()
    },

    raum1: () => {
        uiManager.displayRaum1()
        uiManager.displayKollegenNachricht(false,"Raum1")
        onClick("miniPolmann", () => {
            destroyAll("miniPolmann");  
            wait(0.01, () => {  
                uiManager.displayKollegenNachricht(true, "Raum1")})
            }
        )

        onClick("Polmann", () => {
            wait(0.01, () => {
                ["Polmann","Sprechblase","nachricht"].forEach(destroyAll);;
                uiManager.displayKollegenNachricht(false, "Raum3");
            });
        });    
    },

    raum2: () => {},

    raum3: () => {
        uiManager.displayRaum3()
        uiManager.displayKollegenNachricht(false,"Raum3")
        onClick("miniPolmann", () => {
            destroyAll("miniPolmann");  
            wait(0.01, () => { 
                uiManager.displayKollegenNachricht(true, "Raum3")})
            }
        )

        onClick("Polmann", () => {
            wait(0.01, () => { 
                ["Polmann","Sprechblase","nachricht"].forEach(destroyAll);;
                uiManager.displayKollegenNachricht(false, "Raum3");
            });
        });
        
            },
    slideshow: () => {},

    end: () => {},
}

for (const key in scenes) {
    scene(key,scenes[key])
}

go("polizeiMap")
