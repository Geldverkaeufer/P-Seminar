import { uiManager } from "./UIManager.js";
/*
 - gelösten Monitor anders aussehen lassen
 - PolizeiNahcrichten

 -alles bei eingeben von 1,2,3,4,5,6,7,8,9,0,DEL,Enter ABER AUFPASSEN dass sich das verändert je nach bildschirm
 -glühbirne
 -links
*/

class RAUM3 {
    constructor() {
        this.geloesteBildschirme = new Set();
        this.zuletztGeloesterBildschirm = null
        this.linkAktuell = null
    }

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(width() / 1728, height() / 986),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "Raum3BG"
        ]);
    }

    bildschirmLogik(anfang) {
        if (anfang) {uiManager.displayKollegenNachricht(true,"wir sind im letzten raum angekommen")}
        uiManager.verkleinerPolmann()
        uiManager.vergroesserPolmann2()
        const bildschirme = [
            { x: width() / 10 * 1.2, y: height() / 10 * 5.8, tag: "b1", message: "Das ist Bildschirm 1.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 111, link: "https://learningapps.org/watch?v=pw6s7ebha25", scalex: 2.6, scaley: 1, r: 0 },
            { x: width() / 10 * 3.8, y: height() / 10 * 6.6, tag: "b2", message: "Das ist Bildschirm 2.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 222, link: "https://learningapps.org/watch?v=p0u2ga3m325", scalex: 2.5, scaley: 1, r: 12 },
            { x: width() / 10 * 6.45, y: height() / 10 * 6.56, tag: "b3", message: "Das ist Bildschirm 3.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 333, link: "https://learningapps.org/watch?v=pmurtztga25", scalex: 2.5, scaley: 1, r: -12 },
            { x: width() / 10 * 9.05, y: height() / 10 * 5.8, tag: "b4", message: "Das ist Bildschirm 4.\nEntsperre diesen Bildschirm um den Tresor öffnen zu können!", code: 444, link: "https://learningapps.org/watch?v=p5gefmzha25", scalex: 1.8, scaley: 1, r: -8 }
        ];

        const ledPosX = [4.8, 5.02, 5.24, 5.46];
        ledPosX.forEach(x => {
            add([
                sprite("LEDrot"),
                scale(width() / 553 / 7 / 2 * 0.205, height() / 3482 / 1.5 / 2 * 0.3),
                pos(width() / 10 * x, height() / 10 * 6),
                anchor("center"),
                rotate(90),
                opacity(1)
            ]);
        });

        bildschirme.forEach(({ x, y, tag, code, message, link, scalex, scaley, r }) => {
            add([
                sprite("kreis"),
                scale(width() / 553 / 7 * scalex, height() / 1614 / 1.5 * scaley),
                area(),
                rotate(r),
                pos(x, y),
                anchor("center"),
                opacity(0),
                tag
            ]);

            onClick(tag, () => {
                destroyAll("*");
                this.bildschirm(tag, code, message, link);
            });
        });
    }

    bildschirm(tag, code, message, link) {
        destroyAll("*");

        if (this.geloesteBildschirme.has(tag)) {
                add([
                sprite("monitorRaum3"),
                scale(width() / 1586, height() / 961),
                pos(center()),
                anchor("center"),
                fixed(),
                "monitor"
            ])

            add([
                text("Du hast diesen Bildschirm bereits entsperrt!\nEntsperre die restlichen Bildschirme um den Tresor zu öffnen", { size: height() / 28, align: "center" }),
                color(220, 220, 255),
                pos(center().x, height() / 10 * 3),
                anchor("center"),
                "Nachricht"
            ]);

            const zurueckBtn = add([
                rect(width()/7, height()/20),
                pos(width() / 10 * 2.1, height() / 10 * 7.75),
                anchor("center"),
                area(),
                opacity(0),
                `zurück${tag}`
            ])

            onClick(`zurück${tag}`, () => this.resetView("Entsperre weitere Bildschirme um den Tresor zu öffnen"));
            onKeyPress("escape", () => this.resetView("Entsperre weitere Bildschirme um den Tresor zu öffnen"));
            }

        else 
            {
            // Hintergrundmonitor
            add([
                sprite("monitorRaum3"),
                scale(width() / 1586, height() / 961),
                pos(center()),
                anchor("center"),
                fixed(),
                "monitor"
            ]);

            // Nachrichtentext
            add([
                text(message, { size: height() / 28, align: "center" }),
                color(220, 220, 255),
                pos(center().x, height() / 10 * 2),
                anchor("center"),
                "Nachricht"
            ]);

            // Eingabefeld mit Schatten
            add([
                rect(width() / 10 + 8, width() / 50 + 8),
                color(0, 0, 0),
                pos(center().x + 4, height() / 10 * 4.2 + 4 - height()/25),
                anchor("center"),
                opacity(0.2),
            ]);

            const codeField = add([
                rect(width() / 10, width() / 50),
                color(255, 255, 255),
                outline(3, rgb(120, 120, 120)),
                pos(center().x, height() / 10 * 4.2 - height()/25),
                anchor("center"),
                z(1),
                "codeField"
            ]);

            // Zurück-Button
            const zurueckBtn = add([
                rect(width()/7, height()/20),
                pos(width() / 10 * 2.1, height() / 10 * 7.75),
                anchor("center"),
                area(),
                opacity(0),
                "zurück"
            ]);


            onClick("zurück", () => this.resetView(`Entsperre alle 4 Bildschirme um den Tresor zu öffnen!`));
            onKeyPress("escape", () => this.resetView(`Entsperre alle 4 Bildschirme um den Tresor zu öffnen`));


            this.linkAktuell = link

            // Glühbirne-Hint-Button
            wait(0.02,()=>{add([
                    sprite("Glühbirne"),
                    scale(0.3),
                    area(),
                    anchor("center"),
                    pos(width() / 10 * 7, height() / 10 * 7),
                    `hintButton${tag}`
                ]);
            })

            onClick(`hintButton${tag}`, () => {
                window.open(this.linkAktuell, "_blank");
            });

            let enteredCode = "";
            let fehlerText = null;

            const codeDisplay = add([
                text("", { size: height() / 43 }),
                color(0, 0, 0),
                anchor("center"),
                z(20),
                pos(width() / 2, height() / 10 * 4.2 - height()/25),
                "codeDisplay"
            ]);

            const eingabeBox = add([
                rect(width()/40, height()/26),
                color(240, 240, 255),
                area(),
                outline(2, rgb(100, 100, 150)),
                pos(width() / 10 * 5.65, height() / 10 * 4.2 - height()/25),
                anchor("center"),
                "eingabetext"
            ]);

            add([
                text("OK", { size: height() / 50 }),
                color(0, 0, 0),
                anchor("center"),
                pos(eingabeBox.pos),
            ]);

            eingabeBox.onClick(() => {
                if (enteredCode === `${code}`) {
                    this.geloesteBildschirme.add(tag);
                    this.resetView(`Sehr gut! du hast den Bildschirm ${tag} entsperrt und das LED ist grünn geworden\nEntsperre die weiteren Bildschirme um den Tresor zu öffnen`);
                } else {
                    if (fehlerText) destroy(fehlerText);
                    fehlerText = add([
                        text("Das war leider der falsche Code", { size: height() / 50 }),
                        color(255, 50, 50),
                        anchor("center"),
                        pos(width() / 10 * 5, height() / 10 * 4.75 - height()/25),
                        "Nachricht"
                    ]);
                    enteredCode = "";
                    codeDisplay.text = "";
                    codeField.move(30, 0);
                    wait(0.05, () => codeField.move(-60, 0));
                    wait(0.1, () => codeField.move(30, 0));
                }
            });

            const createBtn = (x, y, label) => {
                const btn = add([
                    rect(width() / 38.4, width() / 38.4),
                    color(24, 55, 77),
                    outline(2, rgb(0, 0, 0)),
                    pos(x, y),
                    anchor("center"),
                    area(),
                    "button",
                    { label }
                ]);

                add([
                    text(label, { size: height() / 40 }),
                    pos(x, y),
                    anchor("center"),
                    color(255, 255, 255),
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
            };

            const startX = center().x - width() / 26.5;
            const startY = center().y + 0;
            const buttonSize = width() / 38.4;
            const padding = width() / 100;

            const labels = [
                ["1", "2", "3"],
                ["4", "5", "6"],
                ["7", "8", "9"],
                ["", "0", "DEL"]
            ];

            labels.forEach((row, rowIndex) => {
                row.forEach((label, colIndex) => {
                    if (!label) return;
                    const x = startX + colIndex * (buttonSize + padding);
                    const y = startY + rowIndex * (buttonSize + padding);
                    createBtn(x, y, label);
                });
            });
        }
    }

    lampenLogik(content) {
        console.log("Gelöste Bildschirme:", Array.from(this.geloesteBildschirme));

        ["b1", "b2", "b3", "b4"].forEach((tag, i) => {
            if (this.geloesteBildschirme.has(tag)) {
                add([
                    sprite("LEDgrün"),
                    scale(width() / 553 / 7 / 2 * 0.205, height() / 3482 / 1.5 / 2 * 0.3),
                    pos(width() / 10 * (4.8 + i * 0.22), height() / 10 * 6),
                    anchor("center"),
                    rotate(90),
                    opacity(1)
                ]);
            }
        });
        
        uiManager.displayKollegenNachricht(true, content);
        if (["b1", "b2", "b3", "b4"].every(tag => this.geloesteBildschirme.has(tag))) {
            this.bildschirmLogik();
            for (let i = 0; i < 4; i++) {add([ sprite("LEDgrün"), scale(width() / 553 / 7 / 2 * 0.205, height() / 3482 / 1.5 / 2 * 0.3), pos(width() / 10 * (4.8 + i * 0.22), height() / 10 * 6), anchor("center"), rotate(90), opacity(1)]);}
            uiManager.displayKollegenNachricht(true, "Alle grünen Lichter sind angegangen!\nDer Tresor sollte sich jetzt öffnen können");
            wait(1, () => onClick("Raum3BG", () => this.tresor()));
        }
        

    }

    tresor() {
        add([
            sprite("raum3offen"),
            scale(width() / 1919, height() / 950),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "Raum3BG2"
        ]);
        uiManager.displayKollegenNachricht(true, "Sehr gut Kollege, wir haben den Fall gelöst.\nJetzt müssen wir nur noch hier raus!")
        this.areaTürRaum3();
    }

    resetView(content) {
            destroyAll("*");
            this.displayRaum3();
            this.bildschirmLogik();
            this.lampenLogik(content);
        }

    areaTürRaum3() {
        add([
            sprite("kreis"),
            area(),
            pos(width() / 1.95, height() / 3.3),
            anchor("center"),
            scale(0.5, 0.8),
            opacity(0),
            "kreis"
        ]);
    }
}

export const Raum3 = new RAUM3();
