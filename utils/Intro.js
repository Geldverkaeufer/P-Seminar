import { uiManager } from "./UIManager.js";

class Intro {

    Zeitung() {
        add([
            sprite("Zeitung"),
            area(),
            scale(width() /2048, height() /1152),
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
            scale(width() / 1666, height() / 907),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);

        this.weiter(0.5, () => {
            destroyAll("*");
            go("raum1")
        });
        this.zurück(0.5, () => {
            destroyAll("*");
            wait(0.01, () => {
                INTRO.PolizeiRevier();
            });
        });
        wait(1,()=>{uiManager.displayKollegenNachricht(true,"Hier ist die Übersicht zu unserem Fall.\nDu kannst sie dir jederzeit anschauen!");uiManager.verkleinerPolmann();uiManager.vergroesserPolmann2()})

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
