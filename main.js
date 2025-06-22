import kaboom from "./libs/kaboom.mjs"
import { INTRO } from "./utils/Intro.js";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { Raum1 } from "./utils/raum1.js";
import { Raum3 } from "./utils/raum3.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    stretch: true,
    letterbox: true,
    background: [0, 0, 0],
})

//debug.inspect = true


load.assets()


const scenes = {
    intro: () => {
        INTRO.Zeitung()
        onKeyPress("1",()=>go("raum1"))
        onKeyPress("2",()=>go("raum2"))
        onKeyPress("3",()=>go("raum3"))
    },

    raum1: () => {
        Raum1.displayRaum1();
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
                    Raum1.areaGasflaschen();
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
        Raum1.t1()
        
    },

    r1t2:()=>{
        uiManager.displayRaum1()
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, " auffälliges/box?")})
        uiManager.verkleinerPolmann() 
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("auf tisch");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }
        });
        uiManager.areaBoxRaum1()
        onClick("kreis", () => { go("r1t2_2"); });
    },

    r1t2_2:()=>{
        uiManager.boxRaum1()
        uiManager.areaNotizRaum1()
        uiManager.displayKollegenNachricht(true,"Notiz?")
        uiManager.verkleinerPolmann() 
        let nachricht = 0
        // Erster Klick
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("unten links zerknüllt");
                
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
                onClick("kreis", () => {  window.open("https://learningapps.org/watch?v=po2e570r525", "_blank"); 
                    //go("r1t3")
                });
    
    
            }
        });
        //onClick("kreis", () => { destroyAll("*"), go("r1t3");});
        onClick("kreis", () => {  window.open("https://learningapps.org/watch?v=po2e570r525", "_blank"); 
            go("r1t3")
        });
    
    },

    r1t3:()=>{
        Raum1.t2zu3()
    },

    raum2: () => {
       
        uiManager.displayKollegenNachricht(false,"raum2")
        uiManager.verkleinerPolmann()  
        uiManager.areaWärmematteRaum2()
        uiManager.displayRaum2();
        wait(0.5, () => { uiManager.displayKollegenNachricht(true,"Auf dem Bildschirm finden wir")})
        let nachricht = 0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("wir könnten durch eine Säurme base Reaktion ...");
                //uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }else if (nachricht == 1) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("wir könnten durch eine Säurme base Reaktion ...");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
    
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
        //onKeyPress("space",() => {go("raum3")})
    },

    r2t2_2: () => {
        uiManager.raum2t2_2()
        //onKeyPress("space",() => {go("raum3")})
    },

    r2zu3 : () => {
        uiManager.displayRaum2_2()
        uiManager.areaTurRaum2()
        onClick("kreis", () => { go("r2zu3_2"); });
    },

    r2zu3_2 :()=>{
        uiManager.displayTurRaum2()
        uiManager.raum2zu3();
    },


    raum3: () => {
        Raum3.displayRaum3()
        Raum3.bildschirmLogik("text")
        //Raum3.areaTürRaum3()
        onClick("kreis", () => { go("r3_2"); });  
    },
    
    r3_2:()=>{
        uiManager.displayRaum3_2() 
        
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Tür zu")})
        let nachricht = 0
        // Erster Klick
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
                nachricht += 1;
    
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(true, "wo ist etwas für flüssigkeit für auge ?");
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
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");uiManager.areaTischRaum3_2();})
                uiManager.vergroesserPolmann("klicke tisch");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
                onClick("kreis", () => {  window.open("https://learningapps.org/watch?v=p4pi0w5kk25", "_blank"); go("r3_2t1") });
    
                nachricht += 1; // Falls du noch weitere Schritte hinzufügen willst
            }
        });
    

    },

    r3_2t1:()=>{
        //uiManager.raum3_2t1();
        uiManager.displayRaum3_tisch();
        uiManager.displayProtokolle();
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "super wähle jetzt das Protokoll aus das nötig ist")})
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("hover over für zoom / man braucht rote lsg");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }
        });
        
       
        onClick("PFehling2", () => { go("r3_2t2") });
        onClick("PSilberspiegel2", () => { go("r3_2t1_2") });
       

    },

    r3_2t1_2:()=>{
        uiManager.displayRaum3_tisch();
        uiManager.displayProtokolle();
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "falsches Protokoll")})
        uiManager.verkleinerPolmann() 
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("man braucht rote lsg");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }
        });


        onClick("PFehling2", () => { go("r3_2t2") });
        onClick("PSilberspiegel2", () => { go("r3_2t1_2") });

    },

    r3_2t2: () => {
        destroyAll("*");
        uiManager.raum3_2t2();
        uiManager.displayRaum3_2();
        
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "in auge füllen")})
        uiManager.verkleinerPolmann() 
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("mit drag and drop");
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }
        });
        uiManager.areaAuge (); 
        uiManager.initFillEye();
        uiManager.areaTürRaum3_2();
        onClick("kreis", () => { go("end") });

    },
    end: () => {
        onKeyPress("space",()=>{go("intro")})
        add([
            text("Endscreen", { size: height() / 35 }),
            color(255, 255, 255),
            anchor("center"),
            pos(width() / 10 * 5.6, height() / 3.2),
            area(),
        ]);
    },
}

for (const key in scenes) {
    scene(key,scenes[key])
}
onKeyPress("d",() => {debug.inspect = true})
onKeyPress("f",()=>{debug.inspect = false})


go("intro")
console.log(height(),width())
