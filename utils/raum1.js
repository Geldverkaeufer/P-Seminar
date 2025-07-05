import { uiManager } from "./UIManager.js"

//bei t2zu3 noch ändern dass man nicht raum wechselt onclick tür UND polmann
//bei t3 muss am anfang polmann aufploppen
// t3 erklären dass lampe


class RAUM1 {

    areaGasflaschen() {
        add([
            sprite("kreis"),
            area(),
            pos(width()/10*8,height()/10*5.5),
            anchor("center"),
            scale(0.7),
            opacity(0),
            "kreis"
        ])
    }

    displayRaum1() {
        add([
            sprite("bgRaum1"),
            area(),
            scale(width() / 1493, height() / 1067), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum1BG"
        ])
    }


    t1() {
        let angeschaut = []
        add([
            sprite("bg1t1"),
            area(),
            scale(width() / 27, height() / 23), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "GasflaschenBG"
        ])
        uiManager.displayKollegenNachricht(true,"Sehr gut, du hast die Gasflaschen gefunden!\nAber die Beschriftung fehlt...\nLass uns schnell herausfinden in welcher sich der Sauerstoff befindet!")
        let circles = [
            { x: width() / 10 * 2.5, y: height() / 2, tag: "flasche1", message: "Das ist Flasche 1.\nSchaue dir auf der learning app den Gasnachweis an, den wir hier durchgeführt haben, an!", link: "https://learningapps.org/watch?v=p9jyrv20t25" },
            { x: width() / 2, y: height() / 2, tag: "flasche2", message: "Das ist Flasche 2.\nSchaue dir auf der learning app den Gasnachweis an, den wir hier durchgeführt haben, an!", link:  "https://learningapps.org/view40123185"},
            { x: width() / 10 *7.5, y: height() / 2, tag: "flasche3", message: "Das ist Flasche 3.\nSchaue dir auf der learning app den Gasnachweis an, den wir hier durchgeführt haben, an!", link: "https://learningapps.org/watch?v=pj58et2rc25" }
        ];
        
        circles.forEach(({ x, y, tag, message, link }) => {
            add([
                sprite("Flasche"),
                scale(width() /553/7, height() /1614/1.5),                                          
                area(),
                pos(x, y),
                anchor("center"),
                tag 
            ]);

            onHover(tag, () => {
                get(tag).forEach(obj => obj.opacity = 0)
                add([
                    sprite("Flasche.2"),
                    scale(width() /553/5, height() /1614/1.2),                                         
                    area(),
                    pos(x, y),
                    anchor("center"),
                    `${tag}.2` 
                ])
            })
            onHoverEnd(tag, () => {
                get(tag).forEach(obj => obj.opacity = 1)
                destroyAll(`${tag}.2`)
            })
        
            onClick(tag, () => {
                destroyAll("miniPolmann")
                uiManager.displayKollegenNachricht(true, message);
                window.open(link, "_blank")
                angeschaut.push(tag)
                wait(0.1,()=>{if (["flasche1", "flasche2", "flasche3"].every(tag => angeschaut.includes(tag))) {  this.t1_2("Du hast alle drei Versuche gesehen.\nJetzt wähle die Flasche mit dem Sauerstoff aus,\ndamit wir endlich wieder Luft bekommen!") } })
            });
        });
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2()

    }

    t1_2(nachricht) {
        destroyAll("*")
        add([
            sprite("bg1t1"),
            area(),
            scale(width() / 27, height() / 23), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "GasflaschenBG"
        ])
        
        uiManager.displayKollegenNachricht(true,nachricht)
        add([
            text("<- zurück zu den Nachweisen", {
                size: height()/37,  
            }),
            color(0, 0, 0),
            anchor("center"),
            pos(width()/10*1.2, height()/10*0.5),
            z(19),
            area(),
            "zurück"
        ]);
        onClick("zurück",()=>{destroyAll("*",go("r1t1"))})
        let flaschen = [
            { x: width() / 10 * 2.5, y: height() / 2, tag: "1"},
            { x: width() / 2, y: height() / 2, tag: "2"},
            { x: width() / 10 * 7.5, y: height() / 2, tag: "3"}
        ];
        let korrekteFlasche = "3"
        let disableHover = false;
        let aktuelleFlasche = null;

        flaschen.forEach(({ x, y, tag }) => {
            add([
                sprite("Flasche"),
                scale(width() /553/7, height() /1614/1.5),
                area(),
                pos(x, y),
                anchor("center"),
                tag 
            ]);

            onHover(tag, () => {
                if (disableHover) return; 
                get(tag).forEach(obj => obj.opacity = 0);
                add([
                    sprite("Flasche.2"),
                    scale(width() /553/5, height() /1614/1.2),
                    area(),
                    pos(x, y),
                    anchor("center"),
                    `${tag}.2` 
                ]);
            });

            onHoverEnd(tag, () => {
                if (disableHover) return; 
                get(tag).forEach(obj => obj.opacity = 1);
                destroyAll(`${tag}.2`);
            });

            onClick(tag, () => {wait(0.1,()=>{
                disableHover = true; 
                aktuelleFlasche = tag;
                uiManager.displayNachricht(`Bist du dir sicher, dass du Flasche ${tag} öffnen willst?`, height() / 20 * 8);
                destroyAll("ja");
                destroyAll("nein");
                    add([
                        sprite("ja"),
                        scale(width() /1600/7, height() /797/7),                                          
                        area(),
                        pos(width()/10*3.3,height()/10*6.3),
                        anchor("center"),
                        "ja" 
                    ])
                    add([
                        sprite("nein"),
                        scale(width() /1600/7, height() /797/7),                                         
                        area(),
                        pos(width()/10*6.6,height()/10*6.3),
                        anchor("center"),
                        "nein" 
                    ])
                    onHover("ja",() => {
                        add([
                            sprite("ja2"),
                            scale(width() /1600/6, height() /797/6),                                         
                            area(),
                            pos(width()/10*3.3,height()/10*6.3),
                            anchor("center"),
                            "ja2" 
                        ])
                    })
                    onHover("nein",() => {
                        add([
                            sprite("nein2"),
                            scale(width() /1060/6, height() /537/6),                                        
                            area(),
                            pos(width()/10*6.6,height()/10*6.3),
                            anchor("center"),
                            "nein2" 
                        ])
                    })
                    onHoverEnd("ja",() => {
                        destroyAll("ja2")
                        destroyAll("ja")
                        add([
                            sprite("ja"),
                            scale(width() /1600/7, height() /797/7),                                          
                            area(),
                            pos(width()/10*3.3,height()/10*6.3),
                            anchor("center"),
                            "ja" 
                        ])
                    })
                    onHoverEnd("nein",() => {
                        destroyAll("nein2")
                        destroyAll("nein")
                        add([
                            sprite("nein"),
                            scale(width() /1600/7, height() /797/7),                                         
                            area(),
                            pos(width()/10*6.6,height()/10*6.3),
                            anchor("center"),
                            "nein" 
                        ])
                    })
                    onClick("ja", () => {
                        if (aktuelleFlasche === korrekteFlasche) {
                            destroyAll("*"); 
                            go("r1t2"); 
                    } else {wait(0.01,()=>{
                        destroyAll("*")
                        this.t1_2("Das war nicht die richtige Flasche! Versuche es noch einmal.")
                    })}
                    
                    });
                
                    onClick("nein", () => {
                        aktuelleFlasche = null
                        disableHover = false; 
                        destroyAll("ja");
                        destroyAll("nein"); 
                        destroyAll("ja2"); 
                        destroyAll("nein2"); 
                        wait(0.1, () => { 
                            this.t1_2("Du hast alle drei Versuche gesehen.\nJetzt wähle die Flasche mit dem Sauerstoff aus,\ndamit wir endlich wieder Luft bekommen!"); 
                        })
                    })
                })
            })
        })
        uiManager.vergroesserPolmann2()
    }
    
    t2zu3() {
        destroyAll("*")
        this.displayRaum1()
        uiManager.displayKollegenNachricht(true,"Sehr gut, wir haben die Aufgaben gelöst.\nLass uns schnell in den nächsten Raum gehen!")
        add([
            sprite("kreis"),
            area(),
            pos(width()/10*9,height()/10*5.7),
            anchor("center"),
            scale(1.3, 2.5),
            opacity(0),
            "tür"
        ])
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2()
        
        wait(1.3,()=>{add([
                    sprite("kreis"),
                    area(),
                    pos(width()/2,height()/10*4.5),
                    anchor("center"),
                    scale(width()/1500,height()/1550),
                    opacity(0),
                    "map"
                ])})
        onClick("map",()=>go("raum1_Map",{ nummer: 3 }))

        onClick("tür", () => {destroyAll("*");this.t3()})
    }
    
    t3() {
        add([
            sprite("Schloss"),
            area(),
            scale(width()/1600* 1, height()/998* 1.22),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "schloss"
        ]);
        
        this.t3_Zettel()
        uiManager.displayKollegenNachricht(true, "Sieht so aus als wär die Tür noch mit einem Schloss verriegelt?\nLass uns herausfinden was der Code ist")
        uiManager.verkleinerPolmann()
        uiManager.displayGlühbirne()
        uiManager.vergroesserPolmann("Vielleicht finden wir ja auf dem Zettel einen Tipp...")

        let enteredCode = "";
        let fehlerText = null; 

        const codeDisplay = add([
            text("", { size: height() / 30 }),
            color(0, 0, 0),
            anchor("topleft"),
            pos(width() / 10* 4.47, height() / 10* 1.8),
            "Nachricht"
        ]);

        const eingabeText = add([
            text("OK", { size: height() / 35 }),
            color(0, 0, 0),
            anchor("center"),
            pos(width() / 10 * 5.6, height() / 3.2),
            area(),
            "eingabetext"
        ]);

        eingabeText.onClick(() => {
            if (enteredCode === "225" || enteredCode === "22" || enteredCode === "23")  {
                go("raum2");
            } else {
                if (fehlerText) destroy(fehlerText);
                fehlerText = add([
                    text("Das war leider\nder falsche Code", {
                        size: height() / 37,
                    }),
                    color(0, 0, 0),
                    anchor("topleft"),
                    pos(width() / 10* 4.47, height() / 10* 1.8),
                    "Nachricht"
                ]);
                enteredCode = "";
                codeDisplay.text = "";
            }
        });

        function createBtn(x, y, label) {
            const btn = add([
                rect(width() /38.4, width() /38.4),
                pos(x, y),
                anchor("center"),
                area(),
                opacity(0),
                "button",
                { label }
            ]);

            btn.onClick(() => {
                if (label === "DEL") {
                    enteredCode = enteredCode.slice(0, -1);
                } else {
                    if (enteredCode.length <= 12) enteredCode += label;

                    if (fehlerText) {
                        destroy(fehlerText);
                        fehlerText = null;
                    }
                }

                codeDisplay.text = enteredCode;
            });
        }

        const offsetX = width()/ -24;
        const offsetY = height()/ -9.947109375;

        // Ziffernfeld
        createBtn(width() / 2 + offsetX, height() / 2 + offsetY, "1");
        createBtn(width() / 2 + width()/ 21.33 + offsetX, height() / 2 + offsetY, "2");
        createBtn(width() / 2 + width()/ 10.66 + offsetX, height() / 2 + offsetY, "3");

        createBtn(width() / 2 + offsetX, height() / 2 + height()/ 15.75 + offsetY, "4");
        createBtn(width() / 2 + width()/ 21.33 + offsetX, height() / 2 + height()/15.75 + offsetY, "5");
        createBtn(width() / 2 + width()/ 10.66 + offsetX, height() / 2 + height()/15.75 + offsetY, "6");

        createBtn(width() / 2 + offsetX, height() / 2 + height()/7.875 + offsetY, "7");
        createBtn(width() / 2 + width()/ 21.33 + offsetX, height() / 2 + height()/7.875 + offsetY, "8");
        createBtn(width() / 2 + width()/ 10.66 + offsetX, height() / 2 + height()/7.875 + offsetY, "9");

        createBtn(width() / 2 + width()/ 21.33 + offsetX, height() / 2 + height()/5.25 + offsetY, "0");

        // "DEL"-Taste rechts unten
        createBtn(width() / 2 + width()/ 10.66 + offsetX, height() / 2 + height()/5.25 + offsetY, "DEL");
    }

    t3_Zettel() {
        let aktuellerZettel = null;
        let glühbirne = null;
        let istZettel1Aktiv = true;

        function displayZettel1() {
            aktuellerZettel = add([
                sprite("r1Zettel1"),
                scale(0.3), 
                pos(width() / 4, height() / 2), 
                area(),
                anchor("center"),
                fixed(),
                "zettel"
            ]);
        }

        function displayZettel2() {
            aktuellerZettel = add([
                sprite("r1Zettel2"),
                scale(0.6), 
                pos(width() / 4, height() / 2), 
                area(),
                anchor("center"),
                fixed(),
                "zettel"
            ]);

            displayGlühbirne2();
        }

        function displayGlühbirne2() {
            glühbirne = add([
                sprite("Glühbirne"),
                area(),
                scale(0.15), 
                pos(width() / 4, height() / 2 + width()/ 19.2), 
                anchor("center"),
                fixed(),
                "gluehbirne"
            ]);
            wait(0.3, () => {
                glühbirne.onClick(() => {
                    window.open("https://learningapps.org/watch?v=pvm56qkfn25", "_blank")
                });
            });
        }

        function toggleZettel() {
            destroy(aktuellerZettel);
            if (glühbirne) {
                destroy(glühbirne);
                glühbirne = null;
            }

            istZettel1Aktiv = !istZettel1Aktiv;

            if (istZettel1Aktiv) {
                displayZettel1();
            } else {
                displayZettel2();
            }

            wait(0.3, () => {
                aktuellerZettel.onClick(toggleZettel);
            });
        }

        displayZettel1();
        aktuellerZettel.onClick(toggleZettel);
    }

}



export const Raum1 = new RAUM1();
