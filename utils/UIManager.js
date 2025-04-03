class UIManager {
    displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            area(),
            scale(width() / 1492, height() / 811), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);
        onKeyPress("space",() => {go("raum1")})
    }

    displayPolizeiRevier() {
        add([
            sprite("bgpolizeiRevier"),
            area(),
            scale(width() / 1600, height() / 1138), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "PolizeiRevierBG"
        ]);
        onKeyPress("space",() => {go("polizeiMap")})
    }

    areaGasflaschen() {
        add([
            sprite("kreis"),
            area(),
            pos(width()/10*8,height()/10*5),
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
            scale(width() / 1574, height() / 908), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum1BG"
        ])
    }

    raum1t1() {
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
        this.displayKollegenNachricht(true,"Sehr gut, du hast die Gasflaschen gefunden!\nAber die Beschriftung fehlt.\nLass uns schnell herausfinden in welcher sich der Sauerstoff befindet!")
        let circles = [
            { x: width() / 10 * 2.5, y: height() / 2, tag: "flasche1", message: "Das ist Flasche 1.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!", link: "https://learningapps.org/view40123185" },
            { x: width() / 2, y: height() / 2, tag: "flasche2", message: "Das ist Flasche 2.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!", link: "https://learningapps.org/watch?v=p9jyrv20t25" },
            { x: width() / 10 *7.5, y: height() / 2, tag: "flasche3", message: "Das ist Flasche 3.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!", link: "https://learningapps.org/watch?v=pj58et2rc25" }
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
                wait(0.1,()=>{if (["flasche1", "flasche2", "flasche3"].every(tag => angeschaut.includes(tag))) {  this.raum1t1_2("Du hast alle drei Versuche gesehen.\nJetzt wähle die Flasche mit dem Sauerstoff aus,\ndamit wir endlich wieder Luft bekommen!") } })
            });
            this.verkleinerPolmann()
            this.vergroesserPolmann("Sehr gut, du hast die Gasflaschen gefunden!\nAber die Beschriftung fehlt.\nLass uns schnell herausfinden in welcher sich der Sauerstoff befindet!")
        });
        
    }
    raum1t1_2(nachricht) {
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
        
        this.displayKollegenNachricht(true,nachricht)
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
                this.displayNachricht(`Bist du dir sicher, dass du Flasche ${tag} öffnen willst?`, height() / 20 * 8);
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
                            go("raum3"); 
                    } else {wait(0.01,()=>{
                        destroyAll("*")
                        this.raum1t1_2("Das war nicht die richtige Flasche! Versuche es noch einmal.")
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
                            this.raum1t1_2("Du hast alle drei Versuche gesehen.\nJetzt wähle die Flasche mit dem Sauerstoff aus,\ndamit wir endlich wieder Luft bekommen!"); // Szene neu laden
                        })
                    })
                })
            })
        })
    }

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(width() / 1727, height() / 987), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG"
        ])
        onKeyPress("space",() => {go("polizeiMap")})
    }
    
    displayKollegenNachricht (big,content) {
        if (big){
            add([
                sprite("Sprechblase"), 
                pos(width()/2,height()/10*9), 
                area(),
                scale(width() / 1046/1.3, height() /177/5.5), 
                anchor("center"),
                z(19),
                "Sprechblase"
            ]);
        
            add([
                text(content, {
                    size: height()/37,  
                }),
                color(0, 0, 0),
                anchor("center"),
                pos(width()/10*5, height()/10*9),
                z(19),
                "nachricht"
            ]);
            
            add([
                sprite("Polmann"), 
                pos(width(), height()), 
                area(),
                scale(Math.max(width() / 800/6, height() / 1600/5)), 
                anchor("botright"), 
                z(20),
                "Polmann"
            ])
        }
        else {
            add([
                sprite("Polmann"), 
                pos(width(), height()), 
                area(),
                scale(Math.max(width() / 800/6/3, height() / 1600/5/3)), 
                anchor("botright"),
                "miniPolmann"
        ])
        }
    }   

    displayNachricht(content,y) {
        add([
            sprite("Sprechblase"), 
            pos(width()/2,height()/2), 
            area(),
            scale(width() / 1046/1.3, height() /177/1.6), 
            anchor("center"),
            "Textfeld"
        ]);

        wait(0.01, () => { 
            ["Polmann","Sprechblase","nachricht"].forEach(destroyAll);;
            uiManager.displayKollegenNachricht(false, "Raum3");
        });

        add([
            text(content, {
                size: height()/37,  
            }),
            color(0, 0, 0),
            anchor("center"),
            pos(width()/2,y),
            "Nachricht"
        ]);
    }

    verkleinerPolmann () {
        onClick("Polmann", () => {
            wait(0.01, () => { 
                ["Polmann","Sprechblase","nachricht"].forEach(destroyAll);;
                uiManager.displayKollegenNachricht(false, "Raum3");
            });
        });
    }

    vergroesserPolmann(content) {
        onClick("miniPolmann", () => {
            destroyAll("miniPolmann");  
            wait(0.01, () => {  
                uiManager.displayKollegenNachricht(true, content)})
            }
        )
    }

    displayGlühbirne() {
        add([
            sprite("Glühbirne"),
            area(),
            scale(0.15), 
            pos(width() /100*91, height() / 100*90), 
            anchor("center"),
            fixed(),
            "Glühbirne"
        ])
    }

    openLink (sprite,link) {
        onClick(sprite, () => {
            window.open(link, "_blank");
         })
    }
    }


export const uiManager = new UIManager()
