import { uiManager } from "./UIManager.js";

//fertige PolizeiMap hochladen
// anfangsscreen mit reload erklären und so

class Intro {

    Zeitung() {
        add([
            sprite("Zeitung"),
            area(),
            scale(width()/2048,height()/1152),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "zeitung"
        ]);

        this.weiter(0.5, () => {
            destroyAll("*");
            wait(0.01, () => {
                INTRO.PolizeiRevier();
            });
        });
    }

    PolizeiRevier() {
        add([
            sprite("bgpolizeiRevier"),
            scale(width() / 1600, height() / 900),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "PolizeiRevierBG"
        ]);

        this.weiter(0.5, () => {
            destroyAll("*");
            wait(0.01, () => {
                INTRO.PolizeiMap();
            });
        });
        this.zurück(0.5, () => {
            destroyAll("*");
            wait(0.01, () => {
                INTRO.Zeitung();
            });
        });
        wait(1,()=>{uiManager.displayKollegenNachricht(true,"Hallo, ich bin dein Kollege!\nIch freue mich, dass wir endlich jemanden mit Chemiekentnissen gefunden haben");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()})
    }

    PolizeiMap() {
        add([
            sprite("bgpolizei"),
            area(),
            scale(width() / 1492, height() / 811),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);
         
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
        onClick("zu1",()=>{go("raum1")})
        onClick("zu2",()=>{uiManager.displayKollegenNachricht(true,"Der zweite Raum ist leider noch versperrt.")})
        onClick("zu3",()=>{uiManager.displayKollegenNachricht(true,"Der dritte Raum ist leider noch versperrt.")})

        this.zurück(0.5, () => {
            destroyAll("*");
            wait(0.01, () => {
                INTRO.PolizeiRevier();
            });
        });
        uiManager.displayKollegenNachricht(true,"Hier ist die Übersicht zu unserem Fall.\nLass uns zuerst in den ersten Raum gehen!");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()

    }

    weiter(p = 9.5, callback = null) {
        const btn = add([
            text("weiter ->", {
                size: height() / 37,
            }),
            color(20, 20, 120),
            anchor("center"),
            area(),
            pos(width() / 10 * 9.5, height() / 10 * p),
            z(31),
            "weiter"
        ]);

        if (callback) {
            btn.onClick(callback);
        }
    }

    zurück(p = 9.5, callback = null) {
        const btn = add([
            text("<- zurück", {
                size: height() / 37,
            }),
            color(20, 20, 120),
            anchor("center"),
            area(),
            pos(width() / 10 * 0.5, height() / 10 * p),
            z(31),
            "zurück"
        ]);

        if (callback) {
            btn.onClick(callback);
        }
    }
}

export const INTRO = new Intro();
