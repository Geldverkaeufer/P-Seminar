import kaboom from "./libs/kaboom.mjs"
import { INTRO } from "./utils/Intro.js";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    stretch: true,
    letterbox: true,
    background: [0, 0, 0],
    font: "apl386"
})

//debug.inspect = true

load.assets()


const scenes = {
    intro: () => {
        INTRO.Zeitung()
    },

    raum1: () => {
        uiManager.displayRaum1();
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Willkommen im ersten Raum! Ich bin Herr Polizist.\nIch bin immer da, falls du einen Tipp brauchst,\nklick mich einfach an!")})
        let nachricht = 0
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
        
                nachricht += 1;
        
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(true, "Hörst du das? Ich glaube die Luft wird herausgezogen!\nWir müssen schnell eine Sauerstoffzufuhr finden bevor uns die Luft ausgeht...");
                });
        
            } else if (nachricht === 1) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
        
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(false, "laweiuf");
                    uiManager.areaGasflaschen();
                });
        
                uiManager.vergroesserPolmann("Wir sind hier in einem Chemie-Labor!\nBestimmt finden wir irgendwo Gasflaschen...");
                uiManager.displayGlühbirne();
                uiManager.verkleinerPolmann();
        
                onClick("kreis", () => {
                    go("r1t1");
                });
        
                nachricht += 1;
            }
        });
        
    },

    r1t1: () => {
        uiManager.raum1t1()
        onKeyPress("space",() => {go("raum2")})
    },

    r1t3: () => {

    },

    
    
    raum2: () => {
       
        uiManager.displayKollegenNachricht(false,"raum2")
        uiManager.verkleinerPolmann()  
        uiManager.areaWärmematteRaum2()
        uiManager.displayRaum2();
        wait(0.5, () => { uiManager.displayKollegenNachricht(true,"Auf dem Bildschirm finden wir sicherlich Hilfreiche Informationen um aus dem Raum zu gelangen")})
        let nachricht = 0
        // Erster Klick
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
                nachricht += 1;
    
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(true,"wir könnten durch eine Säurme base Reaktion Wärme erzeugen um den BIldschirm Batterie ...");
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
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Starte den Versuch indem du darauf klickst");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
                onClick("kreis", () => { go("r2t1"); });
    
                nachricht += 1; // Falls du noch weitere Schritte hinzufügen willst
            }
        });
        onClick("kreis", () => { go("r2t1"); });
    },

    
    r2t1: () => {
        uiManager.displayRaum2()
        uiManager.raum2t1()
        uiManager.areaProtokollRaum2()
        onClick("kreis", () => { go("r2t1_2"); });
        
    },

    
    r2t1_2:() => {
        uiManager.displayRaum2()
        uiManager.raum2t1_2()
        uiManager.displayRaum2_2()
        uiManager.displayKollegenNachricht(true,"super ! Der monitor ist angegangen, lass uns schauen \nwas der Dieb uns hinterlassen hat\n");;
        uiManager.areaMonitorRaum2()
        onClick("kreis", () => { go("r2t2"); });
    },

    
    r2t2: () => {
        uiManager.raum2t2()
        onKeyPress("space",() => {go("raum3")})
    },
    

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

go("intro")
console.log(height(),width())
