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

//debug.inspect = true

load.assets()


const scenes = {
    polizeiMap: () => {
        uiManager.displayPolizeiMap()
    },

    raum1: () => {
        uiManager.displayRaum1();
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Willkommen im ersten Raum! Ich bin Herr Polizist.\nIch bin immer da, falls du einen Tipp brauchst,\nklick mich einfach an!")})
        let nachricht = 0
        // Erster Klick
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
                nachricht += 1;
    
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(true, "Hörst du das? Ich glaube die Luft wird herausgezogen!\nWir müssen schnell eine Sauerstoffzufuhr finden bevor uns die Luft ausgeht...");
                });
            }
        });
        // Zweiter Klick
        onClick("Polmann", () => {
            if (nachricht === 1) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");uiManager.areaGasflaschen()})
                uiManager.vergroesserPolmann("Wir sind hier in einem Chemie-Labor!\nBestimmt finden wir irgendwo Gasflaschen...");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
                onClick("kreis", () => { go("r1t1"); });
    
                nachricht += 1; // Falls du noch weitere Schritte hinzufügen willst
            }
        });
    },

    r1t1: () => {
        uiManager.raum1t1()
        uiManager.openLink("circle1","https://learningapps.org/watch?v=pvm56qkfn25")
        onKeyPress("space",() => {go("raum3")})
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
        uiManager.verkleinerPolmann()  
    },

    slideshow: () => {},

    end: () => {},
}

for (const key in scenes) {
    scene(key,scenes[key])
}

go("polizeiMap")
