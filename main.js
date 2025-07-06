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
/*
in anfangsscreeen sagen man soll immer auf lösungswörter schauen
*/

load.assets()


const scenes = {
    intro: () => {
        INTRO.Zeitung()
        onKeyPress("1",()=>go("raum1"))
        onKeyPress("2",()=>go("raum2"))
        onKeyPress("3",()=>go("raum3"))
    },

    raum1: () => {
        let nachricht = 0
        Raum1.displayRaum1();
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Wir sind im ersten Raum angekommen\nFalls du mal nicht weiterkommen solltest, klick mich einfach an\nund ich versuche dir zu helfen!")})
   
        wait(1.3,()=>{add([
                    sprite("kreis"),
                    area(),
                    pos(width()/2,height()/10*4.5),
                    anchor("center"),
                    scale(width()/1500,height()/1550),
                    opacity(0),
                    "map"
                ])})
                onClick("map",()=>go("raum1_Map",{ nummer: 1 }))
        
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
    raum1_Map: ({ nummer } = {}) => {
        let ende = null
        if (nummer===1) {ende = () => go("raum1")}
        if (nummer===2) {ende = () => go("r1t2")}
        if (nummer===3) {ende = () => go("r1t3")}
        add([
            sprite("bgpolizei"),
            area(),
            scale(width() / 1492, height() / 811),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);
        
        uiManager.displayKollegenNachricht(false, "shdg")
        uiManager.vergroesserPolmann("Das ist wieder unsere Übersicht.\nBis jetzt sind wir nur bis zum ersten Raum gekommen...")
        uiManager.verkleinerPolmann()

        wait(1.3,()=>{
            add([
                sprite("kreis"),
                area(),
                pos(width()/10*5.85,height()/10*7.1),
                anchor("center"),
                scale(width()/1200,height()/1150),
                opacity(0),
                "zu1"
            ])
            add([
                sprite("kreis"),
                area(),
                pos(width()/10*5.3,height()/10*4.6),
                anchor("center"),
                scale(width()/1500,height()/650),
                opacity(0),
                "zu2"
            ])
            add([
                sprite("kreis"),
                area(),
                pos(width()/10*4.16,height()/10*4.57),
                anchor("center"),
                scale(width()/2200,height()/630),
                opacity(0),
                "zu3"
            ])
        })
        onClick("zu1",()=>{ende()})
        onClick("zu2",()=>{uiManager.displayKollegenNachricht(true,"Der zweite Raum ist leider noch versperrt.");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()})
        onClick("zu3",()=>{uiManager.displayKollegenNachricht(true,"Der dritte Raum ist leider noch versperrt.");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()})
        onKeyPress("escape",()=>{ende()})

        add([
            text("<- schließen", {
                size: height() / 37,
            }),
            color(20, 20, 120),
            anchor("center"),
            area(),
            pos(width() / 10 * 0.5, height() / 10 * 0.5),
            z(31),
            "schließen"
        ]);
        onClick("schließen",()=>{ende()})
    }, 

    r1t1: () => {
        Raum1.t1()   
    },

    r1t2:()=>{
        Raum1.displayRaum1()
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Vielleicht befindet sich in dem Raum ein Hinweis der uns weiterhilft .\nKlicke auf die Box auf dem Tisch.")})
        uiManager.verkleinerPolmann() 

        wait(1.3,()=>{add([
                    sprite("kreis"),
                    area(),
                    pos(width()/2,height()/10*4.5),
                    anchor("center"),
                    scale(width()/1500,height()/1550),
                    opacity(0),
                    "map"
                ])})
        onClick("map",()=>go("raum1_Map",{ nummer: 2 }))
        
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Klicke auf die Box auf dem Tisch.");
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
        uiManager.displayKollegenNachricht(true,"Gibt es hier ein Objekt das uns ein Hinweis geben kann?")
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
                uiManager.vergroesserPolmann("Klicke auf das zerknüllte Papier links unten.");
                
                uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann();;
                onClick("kreis", () => {  window.open("https://learningapps.org/watch?v=po2e570r525", "_blank"); 
                    //go("r1t3")
                });
    
    
            }
        });
        //onClick("kreis", () => { destroyAll("*"), go("r1t3");});
        onClick("kreis", () => {  window.open("https://learningapps.org/watch?v=po2e570r525", "_blank"); 
            go("r1t2_3")
        });
    
    },

    r1t2_3:()=>{
        add([
            sprite("bg1t1"),
            area(),
            scale(width() / 27, height() / 23), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "GasflaschenBG"
        ])

        uiManager.displayNachricht(`Um welches Gas wird es sich beim nächsten Versuch handeln?`, height() / 20 * 7);
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2
        const Gas = (x, y, label) => {
                const btn = add([
                    rect(width() / 10, width() / 30),
                    color(24, 55, 77),
                    outline(2, rgb(0, 0, 0)),
                    pos(x, y),
                    anchor("center"),
                    area(),
                    "button",
                    { label }
                ]);

                const txt = add([
                    text(label, { size: height() / 40 }),
                    pos(x, y),
                    anchor("center"),
                    color(255, 255, 255),
                ]);

                btn.onClick(() => {
                    if (btn.label === "CH₄") {
                        go("r1t3")
                    }
                    else {
                        uiManager.displayKollegenNachricht(true,"Das war das falsche Gas.")
                    }
                });

                btn.onHover(() => {
                    btn.scale = vec2(1.2);
                    txt.scale = vec2(1.2);
                });

                btn.onHoverEnd(() => {
                    btn.scale = vec2(1);
                    txt.scale = vec2(1);
                });
            };

            const startX = center().x - width() / 20 * 1.6;
            const startY = center().y - height()/ 40;
            const buttonSize = width() / 38.4;
            const paddingx = width() / 10 *1.3;
            const paddingy = width() / 35;            

            const labels = [
                ["Cl₂", "CH₄",],
                ["SO₂", "NH₃",],
            ];

            labels.forEach((row, rowIndex) => {
                row.forEach((label, colIndex) => {
                    if (!label) return;
                    const x = startX + colIndex * (buttonSize + paddingx);
                    const y = startY + rowIndex * (buttonSize + paddingy);
                    Gas(x, y, label);
                });
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
        wait(0.5, () => { uiManager.displayKollegenNachricht(true,"Wir können mit den Informationen auf dem Bildschirm bestimmt \nin den nächsten Raum kommen.")})
        let nachricht = 0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Doch zuerst müssen wir die Batterie aufladen.\nDies kann erfolgen durch Speicherung der Wärme in der \nWärmematte bei einer exothermen Reaktion.");
                //uiManager.displayGlühbirne()
                uiManager.verkleinerPolmann()
                nachricht += 1;
    
            }else if (nachricht == 1) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Doch zuerst müssen wir die Batterie aufladen.\nDies kann erfolgen durch Speicherung der Wärme in der Wärmematte bei einer exothermen Reaktion.");
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
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2()
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
        uiManager.displayKollegenNachricht(true,"Verlasse den Raum durch die Tür\n");;
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2()
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
        
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Beim Entnehmen des Diamanten ist leider die Tür zu gegangen.")})
        let nachricht = 0
        // Erster Klick
        onClick("Polmann", () => {
            if (nachricht === 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
                nachricht += 1;
    
                wait(0.01, () => {
                    uiManager.displayKollegenNachricht(true, "Können wir mit den Gegenständen auf dem Tisch eine rote Flüssigkeit herstellen?");
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
                uiManager.vergroesserPolmann("Klicke auf den Tisch.");
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
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Super ! Wähle jetzt das Protokoll aus das nötig ist.")})
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Gehe mit der Maus auf die Protokolle um sie zu lösen.");
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
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Das war leider das falsche Protokoll.")})
        uiManager.verkleinerPolmann() 
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Wähle das aus wo eine rote Flüssigkeit entsteht!");
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
        
        wait(0.5, () => {uiManager.displayKollegenNachricht(true, "Fülle jetzt die Flüssigkeit in das Auge.")})
        uiManager.verkleinerPolmann() 
        let nachricht=0
        onClick("Polmann", () => {
            if (nachricht == 0) {
                destroyAll("Sprechblase");
                destroyAll("nachricht");
                destroyAll("Polmann");
    
                // Jetzt den Rest ausführen
                wait(0.01,()=>{uiManager.displayKollegenNachricht(false,"laweiuf");})
                uiManager.vergroesserPolmann("Das umfüllen der Flüssigkeit ist möglich mit drag and drop.");
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
        add([
            sprite("bgpolizeiRevier"),
            scale(width() / 1600, height() / 900),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "PolizeiRevierBG"
        ]);
        wait(0.5,()=>{uiManager.displayKollegenNachricht(true,"Endlich haben wir den Fall gelöst und sind mit dem Diamanten entkommen!\nDanke für deine Mithilfe. Wenn wir das nächste Mal wieder chemische Fragen haben,\nwenden wir uns an dich!");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()})

    },
}

for (const key in scenes) {
    scene(key,scenes[key])
}
onKeyPress("d",() => {debug.inspect = true})
onKeyPress("f",()=>{debug.inspect = false})


go("intro")
console.log(height(),width())
