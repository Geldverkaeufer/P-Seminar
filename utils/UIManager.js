let gespeicherterPolmannText = ""

class UIManager {
    /*displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            area(),
            scale(width() / 1492, height() / 811), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);
    }*/
    
     displayRaum2() {
        add([
            sprite("bgRaum2"),
            area(),
            scale(width()/1727 , height()/987 ), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "Raum2BG"
        ])
        
    }
   
    areaWärmematteRaum2() {
        add([
            sprite("kreis"),
            area(),
            pos(width()/1.74,height()/1.25),
            anchor("center"),
            scale(0.35,0.45),
            opacity(0),
            "kreis"
        ])
    }

    areaProtokollRaum2() {
        add([
            sprite("kreis"),
            area(),
            pos(width()/2.05,height()/1.24),
            anchor("center"),
            scale(0.25,0.3),
            opacity(0),
            "kreis"
        ])
    }

    raum2t1(){ 
            window.open("https://learningapps.org/watch?v=p6i7jkchk25");
        
    }
    raum2t1_2(){
        window.open("https://learningapps.org/watch?v=pcs8rbghk25");

    }

    displayRaum2_2() {
        add([
            sprite("bgRaum2_2"),
            area(),
            scale(width()/1727 , height()/987 ), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "Raum2_2"
        ])
        
    }
   
    areaMonitorRaum2() {
        add([
            sprite("kreis"),
            area(),
            pos(width()/1.65,height()/1.85),
            anchor("center"),
            scale(0.7,0.6),
            opacity(0),
            "kreis"
        ])
    }
    raum2t2 (){

        destroyAll("*")
        
        add([
            sprite("monitorRaum2"),
            area(),
            scale(width()/1025 , height()/712), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "Raum2Monitor"    
        ])
       
        let enteredCode = "";
        function createButton(x, y, label) {
            const btn = add([
                rect(40, 40),
                pos(x , y),
                anchor("center"),
                area(),
                outline(2),
                "button",
               {label }
            ]);
            btn.add([
                text(label, { size: 18 }),
                anchor("center"),
                pos(0,0), 
                color(0, 0, 0),
            ]);
        
            btn.onClick(() => {
                enteredCode += label;
                //debug.log(enteredCode);
            });

   
        }
        const offsetX = -50; 
        const offsetY = -50; 
       
        createButton(width()/2 + offsetX , height()/2 + offsetY , "0");
        createButton((width()/2)+50 + offsetX , height()/2 + offsetY , "1");
        createButton((width()/2)+100 + offsetX, height()/2 + offsetY , "2");
        
        createButton(width()/2 + offsetX , (height()/2)+50 + offsetY , "3");
        createButton((width()/2)+50 + offsetX , (height()/2)+50 + offsetY , "4"); 
        createButton((width()/2)+100 + offsetX , (height()/2)+50 + offsetY , "5");
        
        createButton(width()/2 + offsetX , (height()/2)+100 + offsetY, "6");
        createButton((width()/2)+50 + offsetX, (height()/2)+100 + offsetY, "7");
        createButton((width()/2)+100 + offsetX , (height()/2)+100 + offsetY, "8");
        
        createButton((width()/2)+50 + offsetX , (height()/2)+150 + offsetY, "OK");
        
        onClick("button", (b) => {
            if (enteredCode.length==1){
            add([
                text("*", {
                    size: height()/37,  
                }),
                color(0, 0, 0),
                anchor("center"), 
                pos(width()/2-14,height()/2.8),
                "Nachricht"
            ]);
        }
        if (enteredCode.length==2){
            add([
                text("    *", {
                    size: height()/37,  
                }),
                color(0, 0, 0),
                anchor("center"), 
                pos(width()/2-14,height()/2.8),
                "Nachricht"
            ]);
        }
        if (enteredCode.length==3){
            add([
                text("        *", {
                    size: height()/37,  
                }),
                color(0, 0, 0),
                anchor("center"), 
                pos(width()/2-14,height()/2.8),
                "Nachricht"
            ]);
        }

        });
        
        onClick("button", (b) => {
            if (b.label === "OK") {
                if (enteredCode === "163OK") {
                    //debug.log("Richtig!"),
                    this.raum2t2_2();
                } else {
                    //debug.log("Falsch, versuch's nochmal!");
                    add([
                        text("Falsch, versuch's nochmal!", {
                            size: height()/37,  
                        }),
                        color(0, 0, 0),
                        anchor("center"), 
                        pos(width()/2,height()/2.8),
                        "Nachricht"
                    ]);
                    enteredCode = "";
                }
            }
        });
       
    }

    raum2t2_2 (){
        destroyAll("*");

        add([
            sprite("monitorRaum2"),
            area(),
            scale(width()/1025 , height()/712 ), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "Raum2Monitor"    
        ])

        add([
            sprite("1Herausforderung"), 
            scale(width() / 1616/ 5, height() / 835 / 5),
            area(),
            pos(width() / 2, height() / 2),
            anchor("center"),
            "1Herausforderung"
        ]);
        
        onHover("1Herausforderung", () => {
            get("1Herausforderung").forEach(obj => obj.opacity = 0); 
        
            add([
                sprite("1Herausforderung2"), 
                scale(width() / 1616/ 4, height() / 835 / 4),
                area(),
                pos(width() / 2, height() / 2),
                anchor("center"),
                "1Herausforderung2"
            ]);
        });

        onHoverEnd("1Herausforderung", () => {
            get("1Herausforderung").forEach(obj => obj.opacity = 1); 
            destroyAll("1Herausforderung2"); 
        });
        
        
        onClick("1Herausforderung2", () => {
            window.open("https://learningapps.org/watch?v=pa02p7wsc25", "_blank");
            add([
                sprite("Molekül1Raum2"), 
                scale(width() / 226/14, height() / 187/ 14),
                area(),
                pos(width() / 1.5, height() / 1.3),
                anchor("center"),
                "m1r2"
            ]);
    
            onHover("m1r2", () => {
                get("m1r2").forEach(obj => obj.opacity = 0); 
            
                add([
                    sprite("Molekül1Raum2"), 
                    scale(width() / 226/12, height() /187/12 ),
                    area(),
                    pos(width() / 1.5, height() / 1.3),
                    anchor("center"),
                    "m1_2r2"
                ]);
            });
    
            onHoverEnd("m1r2", () => {
                get("m1r2").forEach(obj => obj.opacity = 1); 
                destroyAll("m1_2r2"); 
            });
    
            add([
                sprite("Molekül2Raum2"), 
                scale(width() / 226/20, height() / 187/20),
                area(),
                pos(width() / 1.79, height() / 1.3),
                anchor("center"),
                "m2r2"
            ]);
    
            onHover("m2r2", () => {
                get("m2r2").forEach(obj => obj.opacity = 0); 
            
                add([
                    sprite("Molekül2Raum2"), 
                    scale(width() / 226/18, height() /187/18 ),
                    area(),
                    pos(width() /1.79, height() / 1.3),
                    anchor("center"),
                    "m2_2r2"
                ]);
            });
    
            onHoverEnd("m2r2", () => {
                get("m2r2").forEach(obj => obj.opacity = 1); 
                destroyAll("m2_2r2"); 
            });
    
            add([
                sprite("Molekül3Raum2"), 
                scale((width() / 160)/10, (height() / 133)/ 10),
                area(),
                pos(width() /2.25, height() / 1.3),
                anchor("center"),
                "m3r2"
            ]);
    
            onHover("m3r2", () => {
                get("m3r2").forEach(obj => obj.opacity = 0); 
            
                add([
                    sprite("Molekül3Raum2"), 
                    scale((width() / 160)/8, (height() /133)/8 ),
                    area(),
                    pos(width() /2.25, height() / 1.3),
                    anchor("center"),
                    "m3_2r2"
                ]);
            });
    
            onHoverEnd("m3r2", () => {
                get("m3r2").forEach(obj => obj.opacity = 1); 
                destroyAll("m3_2r2"); 
            });
    
            add([
                sprite("Molekül4Raum2"), 
                scale(width() / 522/10, height() /297/ 10),
                area(),
                pos(width() /3.05, height() / 1.3),
                anchor("center"),
                "m4r2"
            ]);
    
            onHover("m4r2", () => {
                get("m4r2").forEach(obj => obj.opacity = 0); 
            
                add([
                    sprite("Molekül4Raum2"), 
                    scale(width() /522/8, height() /297/8 ),
                    area(),
                    pos(width() /3.05, height() / 1.3),
                    anchor("center"),
                    "m4_2r2"
                ]);
            });
    
            onHoverEnd("m4r2", () => {
                get("m4r2").forEach(obj => obj.opacity = 1); 
                destroyAll("m4_2r2"); 
            }); 
        })
        const expectedOrder = ["m1_2r2", "m2_2r2", "m3_2r2", "m4_2r2"];
        let clickedOrder = [];
        let numbers = []; // speichert die angezeigten Nummern
        
        // Jetzt klicken erkennen:
        onClick("m1_2r2", () => handleClick("m1_2r2", width() / 1.5, height() / 1.3));
        onClick("m2_2r2", () => handleClick("m2_2r2", width() / 1.79, height() / 1.3));
        onClick("m3_2r2", () => handleClick("m3_2r2", width() / 2.25, height() / 1.3));
        onClick("m4_2r2", () => handleClick("m4_2r2", width() / 3.05, height() / 1.3));
        
        function handleClick(spriteName, x, y) {
            clickedOrder.push(spriteName);
        
            // Text mit Nummer erstellen (Position leicht unter y)
            const num = add([
                text(clickedOrder.length.toString(), { size: 20 }),
                pos(x, y + 40), // 40 Pixel unter dem Sprite
                anchor("center"),
                color(0, 0, 0), 
            ]);
        
            numbers.push(num); // merken, damit wir später aufräumen können
        
            if (clickedOrder.length === expectedOrder.length) {
                if (arraysMatch(clickedOrder, expectedOrder)) {
                   
                   destroyAll("*");
                
                        add([
                            sprite("monitorRaum2"),
                             area(),
                             scale(width()/1025 , height()/712 ), 
                             pos(width()/2 , height()/2 ), 
                             anchor("center"),
                             fixed(),
                              "Raum2Monitor"     
                        ]);  
                
                        add([
                            sprite("2Herausforderung"), 
                            scale(width() / 1616/ 5, height() / 835 / 5),
                            area(),
                            pos(width() / 2, height() / 2),
                            anchor("center"),
                            "2Herausforderung"
                        ]);
                        onHover("2Herausforderung", () => {
                            get("2Herausforderung").forEach(obj => obj.opacity = 0); 
                        
                            add([
                                sprite("2Herausforderung2"), 
                                scale(width() / 1616/ 4, height() / 835 / 4),
                                area(),
                                pos(width() / 2, height() / 2),
                                anchor("center"),
                                "2Herausforderung2"
                            ]);
                        });
                        
                        onHoverEnd("2Herausforderung", () => {
                            get("2Herausforderung").forEach(obj => obj.opacity = 1); 
                            destroyAll("2Herausforderung2"); 
                        });

                        onClick("2Herausforderung2", () => {

                            add([
                                sprite("1teil"), 
                                scale(width() / 676/ 11, height() / 448 / 11),
                                area(),
                                pos(width() / 2-80, height() / 2+150),
                                anchor("center"),
                                "1teil"
                            ]);
                            onHover("1teil", () => {
                                get("1teil").forEach(obj => obj.opacity = 0); 
                            
                                add([
                                    sprite("1teil2"), 
                                    scale(width() / 459/10, height() /304 / 10),
                                    area(),
                                    pos(width() / 2-80, height() / 2+150),
                                    anchor("center"),
                                    "1teil2"
                                ]);
                            });
                            
                            onHoverEnd("1teil", () => {
                                get("1teil").forEach(obj => obj.opacity = 1); 
                                destroyAll("1teil2"); 
                            });

                            add([
                                sprite("2teil"), 
                                scale(width() / 676/ 11, height() / 448 / 11),
                                area(),
                                pos(width() / 2+80, height() / 2+150),
                                anchor("center"),
                                "2teil"
                            ]);
                            onHover("2teil", () => {
                                get("2teil").forEach(obj => obj.opacity = 0); 
                            
                                add([
                                    sprite("2teil2"), 
                                    scale(width() / 459/10, height() /304 / 10),
                                    area(),
                                    pos(width() / 2+80, height() / 2+150),
                                    anchor("center"),
                                    "2teil2"
                                ]);
                            });
                            
                            onHoverEnd("2teil", () => {
                                get("2teil").forEach(obj => obj.opacity = 1); 
                                destroyAll("2teil2"); 
                            });
                            onClick("1teil2", () => {
                                window.open("https://learningapps.org/watch?v=pgbaob0c525", "_blank");
                                
                            }); 
                            onClick("2teil2", () => {
                                window.open("https://learningapps.org/watch?v=pydivz9cn25", "_blank");
                            }); 
                
                        
                        }); 
                    
                    
                    
                } else {
                    // Falsch -> Alles zurücksetzen
                    //console.log("Falsche Reihenfolge!");
                    add([
                        text("Falsch, versuch's nochmal!", {
                            size: height()/37,  
                        }),
                        color(0, 0, 0),
                        anchor("center"), 
                        pos(width()/2, height()/1.55) ,
                        "Nachricht"
                    ]);
                    wait(1, () => { destroyAll("Nachricht")
                    })
                    wait(0.5, () => {resetClicks();
                    })
                }
            }
        }
        
        function arraysMatch(a, b) {
            return a.length === b.length && a.every((val, index) => val === b[index]);
        }
        
        function resetClicks() {
            clickedOrder = [];
            // Alle Nummern zerstören
            numbers.forEach(n => destroy(n));
            numbers = [];
        }
        
         
    }
    

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(width() / 1600, height() / 909), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG"
        ])
        onKeyPress("space",() => {go("intro")})
    }
    
    displayKollegenNachricht(big, content) {
        if (big) {
            gespeicherterPolmannText = content; 
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
            ]);
        }
        else {
            add([
                sprite("Polmann"), 
                pos(width(), height()), 
                area(),
                scale(Math.max(width() / 800/6/3, height() / 1600/5/3)), 
                anchor("botright"),
                "miniPolmann"
            ]);
        }
    }

    updateKollegenNachricht(content) {
        gespeicherterPolmannText = content
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
    vergroesserPolmann2() {
        onClick("miniPolmann", () => {
            destroyAll("miniPolmann");  
            wait(0.01, () => {  
                uiManager.displayKollegenNachricht(true, gespeicherterPolmannText); 
            });
        });
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
