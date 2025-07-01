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

    displayRaum1() {
        add([
            sprite("bgRaum1"),
            area(),
            scale(width() / 1330, height() / 933), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum1BG"
        ])
    }
    
    boxRaum1 (){
        add([
            sprite("Raum1_box"),
            area(),
            scale(width()/1558 , height()/1083 ), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "boxRaum1"
        ])
    }
    
    areaBoxRaum1 (){
        add([
            sprite("kreis"),
            area(),
            pos(width()/1.55,height()/1.3),
            anchor("center"),
            scale(0.75,0.75),
            opacity(0),
            "kreis"
        ])
    }

    areaNotizRaum1 (){
        add([
            sprite("kreis"),
            area(),
            pos(width()/3.2,height()/1.55),
            anchor("center"),
            scale(0.55,0.55),
            opacity(0),
            "kreis"
        ])
    }

    raum1t2_3() {
        window.open("https://learningapps.org/watch?v=p6i7jkchk25");
    }


    
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
        
        add([
            sprite("monitorRaum2"),
            area(),
            scale(width()/1025 , height()/712), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "Raum2Monitor"    
        ])

        let bildschirme = [
            { x: width() / 10 * 1.2, y: height() / 10* 5.8, tag: "m1", message: "füge den passwort ein ", code: 163, link: "", scalex: 2.6, scaley: 1, r: 0 },
          ];
          bildschirme.forEach(({ x, y, tag, code, message, link, scalex, scaley, r}) => {
            add([
                sprite("kreis"),
                scale(width() /553/7 *scalex, height() /1614/1.5 *scaley),                                          
                area(),
                rotate(r),
                pos(x, y),
                anchor("center"),
                opacity(0),
                tag 
            ]);
            this.bildschirm(tag, code, message, link)

        
            /*onClick(tag, () => {
                destroyAll("*")
                this.bildschirm(tag, code, message, link)
            });*/

            onClick(tag, () => {
                destroyAll("*")
                
            });
        })

    }
    bildschirm ( tag, code, message, link) {


         // text
        add([
            text(message, {
                size: height()/30,  
                align: "center"
            }),
            color(0, 0, 0),
            anchor("center"),
            pos(width()/2, height()/10 * 2.5),
            "Nachricht"
        ]);

        // Kästchen für Code
        const codeField = add([
            rect(width() / 10, width() / 50),
            color(230, 230, 230),
            outline(3, rgb(100, 100, 100)),
            pos(center().x, height() / 10 * 4.2),
            anchor("center"),
            z(0),
            "codeField"
        ])


        // Zurück-Button
        add([
            text("<- zurück", {
                size: height() / 37,
            }),
            color(20, 20, 120),
            anchor("center"),
            area(),
            pos(width() / 10 * 2, height() / 10 * 8),
            z(31),
            "zurück"
        ])

        onClick("zurück" , () => {
            destroyAll("*");          
            this.displayRaum2_2();
            add([
                sprite("kreis"),
                area(),
                pos(width()/1.65,height()/1.85),
                anchor("center"),
                scale(0.7,0.6),
                opacity(0),
                "kreis"
            ])
            onClick("kreis", () => { this.raum2t2();});

            add([
                sprite("kreis"),
                area(),
                pos(width()/2.05,height()/1.24),
                anchor("center"),
                scale(0.25,0.3),
                opacity(0),
                "kreis2"
            ])
            onClick("kreis2", () => { this.raum2t1_2();});
            
        });

        onKeyPress("escape" , () => {
            destroyAll("*");          
            this.displayRaum2_2();
            add([
                sprite("kreis"),
                area(),
                pos(width()/1.65,height()/1.85),
                anchor("center"),
                scale(0.7,0.6),
                opacity(0),
                "kreis"
            ])
            onClick("kreis", () => { this.raum2t2();});

            add([
                sprite("kreis"),
                area(),
                pos(width()/2.05,height()/1.24),
                anchor("center"),
                scale(0.25,0.3),
                opacity(0),
                "kreis2"
            ])
            onClick("kreis2", () => { this.raum2t1_2();});
                 
        });

        
        add([
            sprite("Glühbirne"),
            scale(0.3),
            area(),
            anchor("center"),
            pos(width()/10 * 7, height() / 10 * 7),
            "hintButton"
        ])

        onClick("hintButton", () => {
            window.open("https://learningapps.org/watch?v=pcs8rbghk25"); 
        });
            



        let enteredCode = "";
        let fehlerText = null; 

        const codeDisplay = add([
            text("", { size: height() /43 }),
            color(0, 0, 0),
            anchor("center"),
            pos(width() / 2, height() / 10* 4.2),
            "Nachricht"
        ]);

        const eingabeText = add([
            text("OK", { size: height() / 50 }),
            color(0, 0, 0),
            anchor("center"),
            pos(width() / 10 * 5.65, height() / 10* 4.2),
            area(),
            "eingabetext"
        ]);

        eingabeText.onClick(() => {
            if (enteredCode === `${code}`) {
                destroyAll("*");
                //go("r2t2_2");
                this.raum2t2_2();
                //this.bildschirm();
                return;
            } else {
                if (fehlerText) destroy(fehlerText);
                fehlerText = add([
                    text("Das war leider der falsche Code", {
                        size: height() / 50,
                    }),
                    color(0, 0, 0),
                    anchor("center"),
                    pos(width() / 10* 5, height() / 10* 4.75),
                    "Nachricht"
                ]);
                enteredCode = "";
                codeDisplay.text = "";
                
                codeField.move(30, 0);
                wait(0.05, () => codeField.move(-60, 0));
                wait(0.1, () => codeField.move(30, 0));

            }
        })
       

        function createBtn(x, y, label) {
            const btn = add([
                rect(width() / 38.4, width() / 38.4),
                color(240, 240, 240),
                outline(2, rgb(50, 50, 50)),
                pos(x, y),
                anchor("center"),
                area(),
                "button",
                { label }
            ]);

            //onHover("button",()=>{btn.color = rgb(255,255,255)})

            add([
                text(label, {
                    size: height() / 40,
                }),
                pos(x, y),
                anchor("center"),
                color(0, 0, 0),
            ]);


            btn.onClick(() => {
                if (label === "Del") {
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

        const offsetX = width()/ - 20;
        const offsetY = width()/ 60;

        let startX = center().x - width() / 26.5;
        let startY = center().y + height() / 25;
        let buttonSize = width() / 38.4;
        let padding = width() / 100;

        let labels = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["", "0", "Del"]
        ];

        labels.forEach((row, rowIndex) => {
        row.forEach((label, colIndex) => {
            if (!label) return;
            let x = startX + colIndex * (buttonSize + padding);
            let y = startY + rowIndex * (buttonSize + padding);
            createBtn(x, y, label);
        });
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
            text("Damit du das Rätsel lösen kannst musst du erstmal \ndie Herausforderung meistern", {
                size: height()/30,  
                align: "center"
            }),
            color(0, 0, 0),
            anchor("center"),
            pos(width()/2, height()/10 * 2.5),
            "Nachricht"
        ]);

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
        const expectedOrder = ["m2_2r2", "m1_2r2", "m3_2r2", "m4_2r2"];
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
                            text("Damit du wirklich ein Experte bist und \nden Fall ohne Probleme lösen kannst \nmusst du noch 2 Herausforderungen überwinden.", {
                                size: height()/30,  
                                align: "center"
                            }),
                            color(0, 0, 0),
                            anchor("center"),
                            pos(width()/2, height()/10 * 2.5),
                            "Nachricht"
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
                                //pos(width() / 2-80, height() / 2+150),
                                pos(width() * 0.45, height() * 0.68),
                                anchor("center"),
                                "1teil"
                            ]);
                            onHover("1teil", () => {
                                get("1teil").forEach(obj => obj.opacity = 0); 
                            
                                add([
                                    sprite("1teil2"), 
                                    scale(width() / 459/10, height() /304 / 10),
                                    area(),
                                    //pos(width() / 2-80, height() / 2+150),
                                    pos(width() * 0.45, height() * 0.68),
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
                                //pos(width() / 2+80, height() / 2+150),
                                pos(width() * 0.55, height() * 0.68),
                                anchor("center"),
                                "2teil"
                            ]);
                            onHover("2teil", () => {
                                get("2teil").forEach(obj => obj.opacity = 0); 
                            
                                add([
                                    sprite("2teil2"), 
                                    scale(width() / 459/10, height() /304 / 10),
                                    area(),
                                    //pos(width() / 2+80, height() / 2+150),
                                    pos(width() * 0.55, height() * 0.68),
                                    anchor("center"),
                                    "2teil2"
                                ]);
                            });
                            
                            onHoverEnd("2teil", () => {
                                get("2teil").forEach(obj => obj.opacity = 1); 
                                destroyAll("2teil2"); 
                            });

                            let clicked1teil = false;
                            let clicked2teil = false;

                            onClick("1teil2", () => {
                                window.open("https://learningapps.org/watch?v=pgbaob0c525", "_blank"),
                                clicked1teil = true;  

                                if (clicked1teil==true && clicked2teil==true) {
                                    go("r2zu3");
                                    
                                }
                           
                            }); 
                            

                            onClick("2teil2", () => {
                                window.open("https://learningapps.org/watch?v=pydivz9cn25", "_blank"),
                                clicked2teil = true;

                                if (clicked1teil==true && clicked2teil==true) {
                                    go("r2zu3");
                                    
                                }

                            }); 

                            if (clicked1teil==true && clicked2teil==true) {
                                go("r2zu3");
                                
                            }

                            
                            
                        }); 
                    
                    
                    
                } else if (clickedOrder.length === expectedOrder.length){
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
                } else {

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

    displayTurRaum2(){
        add([
            sprite("Raum2_tur"),
            area(),
            scale(width() /2048, height() /1277), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum2_tur"
        ])

    }
    areaTurRaum2(){
        add([
            sprite("kreis"),
            area(),
            pos(width()/7,height()/1.6),
            anchor("center"),
            scale(0.9,3.3),
            opacity(0),
            "kreis"
        ])

    }

    raum2zu3(){

        let enteredCode = "";
        let fehlerText = null; 

        const codeDisplay = add([
            text("", { size: height() / 30 }),
            color(0, 0, 0),
            anchor("topleft"),
            pos(width() / 10* 4.47, height() / 10* 2.3),
            "Nachricht"
        ]);

        const eingabeText = add([
            text("OK", { size: height() / 35 }),
            color(0, 0, 0),
            anchor("center"),
            //pos(width() / 10 * 5.6, height() / 3.2),
            pos(width() / 10 * 5.6, height() / 2.9),
            area(),
            "eingabetext"
        ]);

        eingabeText.onClick(() => {
            if (enteredCode === "24")  {
                go("raum3");
            } else {
                if (fehlerText) destroy(fehlerText);
                fehlerText = add([
                    text("Das war leider\nder falsche Code", {
                        size: height() / 37,
                    }),
                    color(0, 0, 0),
                    anchor("topleft"),
                    pos(width() / 10* 4.47, height() / 10* 2.3),
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

        createBtn(width() / 2 + width()/ 21.33 + offsetX, height() / 2 + height()/5.4 + offsetY, "0");

        // "DEL"-Taste rechts unten
        createBtn(width() / 2 + width()/ 10.66 + offsetX, height() / 2 + height()/5.4 + offsetY, "DEL");
    }

    raum2Glühbirne(){

        add([
            sprite("Glühbirne"),
            area(),
            scale(0.3), 
            pos(width() /4, height() / 2), 
            anchor("center"),
            fixed(),
            "Glühbirne"
        ]);

        onClick("Glühbirne", () => {
            window.open("https://learningapps.org/watch?v=pgbaob0c525", "_blank"),
            window.open("https://learningapps.org/watch?v=pydivz9cn25", "_blank");
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
        
    }
    /*areaTürRaum3(){
        add([
            sprite("kreis"),
            area(),
            pos(width()/1.95,height()/3.3),
            anchor("center"),
            scale(0.7,0.55),
            opacity(0),
            "kreis"
        ])
       
    }*/

    

    displayRaum3_2() {
        add([
            sprite("bgRaum3_2"),
            area(),
            scale(width() / 1594, height() / 907), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG_2"
        ])
       
    }

    raum3t2 (){


    }

    areaTischRaum3_2(){
        add([
            sprite("kreis"),
            area(),
            pos(width()/1.22,height()/1.3),
            anchor("center"),
            scale(1.7,1),
            opacity(0),
            "kreis"
        ])

    }

    raum3_2t1() {
        window.open("https://learningapps.org/watch?v=p4pi0w5kk25", "_blank");

    }
    displayRaum3_tisch(){
        add([
            sprite("Raum3_tisch"),
            area(),
            scale(width() /1429, height() /845), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3_tisch"
        ])
    }

   displayProtokolle(){
        add([
            sprite("PFehling"),
            area(),
            scale(height() / 1150 / 2.8),
            pos(width() / 4, height() / 2),
            anchor("center"),
            fixed(),
            "PFehling"
        ])
        
        onHover("PFehling", () => {
            get("PFehling").forEach(obj => obj.opacity = 0); 
        
            add([
                sprite("PFehling"), 
                scale(height() / 1150 / 1.5),
                area(),
                pos(width() / 4, height() / 2),
                anchor("center"),
                "PFehling2"
            ]);
        });

        onHoverEnd("PFehling", () => {
            get("PFehling").forEach(obj => obj.opacity = 1); 
            destroyAll("PFehling2"); 
        });
        

         add([
            sprite("PSilberspiegel"),
            area(),
            scale(height() / 1458 / 2.8),
            pos(width() / 4*3, height() / 2),
            anchor("center"),
            fixed(),
            "PSilberspiegel"
        ])

         onHover("PSilberspiegel", () => {
            get("PSilberspiegel").forEach(obj => obj.opacity = 0); 
        
            add([
                sprite("PSilberspiegel"), 
                scale(height() / 1458 / 1.2),
                area(),
                pos(width() / 4*3, height() / 2),
                anchor("center"),
                "PSilberspiegel2"
            ]);
        });

        onHoverEnd("PSilberspiegel", () => {
            get("PSilberspiegel").forEach(obj => obj.opacity = 1); 
            destroyAll("PSilberspiegel2"); 
        });
        
        
    }
   
    raum3_2t2(){
        window.open("https://learningapps.org/watch?v=phcfyn56t25", "_blank");
    }

    areaAuge (){
        add([
            sprite("kreis"),
            area(),
            pos(width()/2.7,height()/1.8),
            anchor("center"),
            scale(0.4,0.25),
            opacity(0),
            "AreaAuge"
        ])
    }
        
    initFillEye() {
        
        this.eye = this.displayRaum3_2();

        
        this.eyeHit = add([
            sprite("kreis"),
            area(),
            pos(width()/2.7,height()/1.8),
            anchor("center"),
            scale(0.4, 0.25),                   // passt zu deinem alten areaAuge()
            opacity(0),
            "augeHit",
        ]);

        /* 3) Flasche (rote Flüssigkeit) rechts unten spawnen ---------- */
        this.spawnBottle();
    }

    /** Flasche lässt sich ziehen; Loslassen auf augeHit -> fillEye() */
    spawnBottle() {
        
        const bottle = add([
            sprite("roteFlussigkeit"),          // roteflüssigkeit.jpg
            area(),
            pos(width() / 1.3, height() / 1.32),
            anchor("center"),
            //z(50),
            scale(0.15),
            "bottle",
        ]);

        let dragging = false, offset = vec2(0);

        onMousePress(() => {
            if (bottle.isHovering()) {
                dragging = true;
                offset = mousePos().sub(bottle.pos);
            }
        });

        onUpdate(() => {
            if (dragging) bottle.pos = mousePos().sub(offset);
        });

        onMouseRelease(() => {
            if (!dragging) return;
            dragging = false;
            const auge = get("augeHit")[0];
            if (auge && bottle.isColliding(auge)) {
                this.fillEye();
            } else {
                // optional zurückspringen, fkt nicht 
                bottle.moveTo(width() / 1.12, height() / 1.22, 400);
            }

        });
    }

    
    fillEye() {

        destroyAll("*")
        add([
            sprite("bgRaum3_2rot"),
            area(),
            scale(width() / 1594, height() / 907), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG_2rot"
        ]);

        this.areaTürRaum3_2();
    }

    areaTürRaum3_2(){

        add([
            sprite("kreis"),
            area(),
            pos(width()/2,height()/1.8),
            anchor("center"),
            scale(1.3,1.9),
            opacity(0),
            "kreis"
        ])


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
