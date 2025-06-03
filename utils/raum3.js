import { uiManager } from "./UIManager.js";

class RAUM3 {

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(width() / 1728, height() / 986), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG"
        ])
    }

    constructor() {
        this.geloesteBildschirme = new Set();
    }

    bildschirmLogik () {
        let bildschirme = [
                { x: width() / 10 * 1.2, y: height() / 10* 5.8, tag: "b1", message: "Das ist Bildschirm 1.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 111, link: "", scalex: 2.6, scaley: 1, r: 0 },
                { x: width() / 10 * 3.8, y: height() / 10* 6.6, tag: "b2", message: "Das ist Bildschirm 2.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 222,link:  "", scalex: 2.5, scaley: 1, r: 12 },
                { x: width() / 10 *6.45, y: height() / 10* 6.56, tag: "b3", message: "Das ist Bildschirm 3.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 333, link: "" , scalex: 2.5, scaley: 1, r: -12 },
                { x: width() / 10 *9.05, y: height() / 10* 5.8, tag: "b4", message: "Das ist Bildschirm 4.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 444, link: "" , scalex: 1.8, scaley: 1, r: -8 }
            ];
            add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 4.8, height()/10* 6),  anchor("center"),    color(255,0,0) , opacity(1)])
            add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.02, height()/10* 6),  anchor("center"),    color(255,0,0) , opacity(1)])
            add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.24, height()/10* 6),  anchor("center"),    color(255,0,0) , opacity(1)])
            add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.46, height()/10* 6),  anchor("center"),    color(255,0,0) , opacity(1)])
            
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

            
                onClick(tag, () => {
                    destroyAll("*")
                    this.bildschirm(tag, code, message, link)
                });
            })

    }

    bildschirm(tag, code, message, link) {
        
        // monitor
        add([
            sprite("monitorRaum2"),
            area(),
            scale(width()/1025 , height()/712), 
            pos(width()/2 , height()/2 ), 
            anchor("center"),
            fixed(),
            "monitor"   
        ])
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
        add([
            rect(width() /10, width() /50),
            pos(width() / 10 * 4.88, height() / 10* 4.2),
            anchor("center"),
            area(),
            outline(1.7),
            "button",
        ]);

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
            this.displayRaum3();        
            this.bildschirmLogik();  
            this.lampenLogik();
        });
        onKeyPress("escape" , () => {
            destroyAll("*");          
            this.displayRaum3();        
            this.bildschirmLogik();  
            this.lampenLogik()    
        });


        let enteredCode = "";
        let fehlerText = null; 

        const codeDisplay = add([
            text("", { size: height() /43 }),
            color(0, 0, 0),
            anchor("center"),
            pos(width() / 10* 4.88, height() / 10* 4.2),
            "Nachricht"
        ]);

        const eingabeText = add([
            text("OK", { size: height() / 50 }),
            color(0, 0, 0),
            anchor("center"),
            pos(width() / 10 * 5.5, height() / 10* 4.2),
            area(),
            "eingabetext"
        ]);

        eingabeText.onClick(() => {
            if (enteredCode === `${code}`) {
                this.geloesteBildschirme.add(tag); 
                destroyAll("*");
                this.displayRaum3();
                this.bildschirmLogik();
                this.lampenLogik()
            } else {
                if (fehlerText) destroy(fehlerText);
                fehlerText = add([
                    text("Das war leider der falsche Code", {
                        size: height() / 50,
                    }),
                    color(0, 0, 0),
                    anchor("center"),
                    pos(width() / 10* 4.88, height() / 10* 4.75),
                    "Nachricht"
                ]);
                enteredCode = "";
                codeDisplay.text = "";
            }
        })
        /*onKeyPress("enter", ()=> {
            if (enteredCode === `${code}`) {
                this.geloesteBildschirme.add(tag); 
                destroyAll("*");
                this.displayRaum3();
                this.bildschirmLogik();
            } else {
                if (fehlerText) destroy(fehlerText);
                fehlerText = add([
                    text("Das war leider der falsche Code", {
                        size: height() / 50,
                    }),
                    color(0, 0, 0),
                    anchor("center"),
                    pos(width() / 10* 4.88, height() / 10* 4.75),
                    "Nachricht"
                ]);
                enteredCode = "";
                codeDisplay.text = "";
            }
        })*/

        function createBtn(x, y, label) {
            const btn = add([
                rect(width() /38.4, width() /38.4),
                pos(x, y),
                anchor("center"),
                area(),
                outline(2),
                "button",
                { label }
            ]);

            add([
                text(label, {
                    size: height() / 40,
                }),
                pos(x, y),
                anchor("center"),
                color(0, 0, 0),
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

        const offsetX = width()/ - 20;
        const offsetY = width()/ 60;

        // Ziffernfeld
        createBtn(width() / 2 + offsetX, height() / 2 + offsetY, "1");
        createBtn(width() / 2 + width()/ 26 + offsetX, height() / 2 + offsetY, "2");
        createBtn(width() / 2 + width()/ 13 + offsetX, height() / 2 + offsetY, "3");

        createBtn(width() / 2 + offsetX, height() / 2 + width()/ 32 + offsetY, "4");
        createBtn(width() / 2 + width()/ 26 + offsetX, height() / 2 + width()/ 32 + offsetY, "5");
        createBtn(width() / 2 + width()/ 13 + offsetX, height() / 2 + width()/ 32 + offsetY, "6");

        createBtn(width() / 2 + offsetX, height() / 2 + width()/ 16 + offsetY, "7");
        createBtn(width() / 2 + width()/ 26 + offsetX, height() / 2 + width()/ 16 + offsetY, "8");
        createBtn(width() / 2 + width()/ 13 + offsetX, height() / 2 + width()/ 16 + offsetY, "9");

        createBtn(width() / 2 + width()/ 26 + offsetX, height() / 2 + width()/ 10.66 + offsetY, "0");

        // "DEL"-Taste rechts unten
        createBtn(width() / 2 + width()/ 13 + offsetX, height() / 2 + width()/ 10.66 + offsetY, "DEL");

    }

    lampenLogik() {
        console.log("Gelöste Bildschirme:", Array.from(this.geloesteBildschirme));
        if (this.geloesteBildschirme.has("b1")) {add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 4.8, height()/10* 6),  anchor("center"),    color(0,255,0) , opacity(1)])}
        if (this.geloesteBildschirme.has("b2")) {add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.02, height()/10* 6),  anchor("center"),    color(0,255,0) ,  opacity(1)])}
        if (this.geloesteBildschirme.has("b3")) {add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.24, height()/10* 6),  anchor("center"),    color(0,255,0) ,  opacity(1)])}
        if (this.geloesteBildschirme.has("b4")) {add([ sprite("kreis"),  scale(width() /553/7 * 0.3, height() /1614/1.5 * 0.3),   pos(width()/10* 5.46, height()/10* 6),  anchor("center"),    color(0,255,0) ,  opacity(1)])}
        if (["b1", "b2", "b3", "b4"].every(tag => this.geloesteBildschirme.has(tag)))  {this.tresor()}

    }

    tresor() {
        uiManager.displayKollegenNachricht(true,"alle")
    }

}


export const Raum3 = new RAUM3();
