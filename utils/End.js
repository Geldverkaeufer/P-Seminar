import { INTRO } from "./Intro.js";
import { uiManager } from "./UIManager.js";

//fertige PolizeiMap hochladen
// anfangsscreen mit reload erklären und so

class end {

    constructor() {
            this.gewartet = 0
        }

    MapHaken() {
        add([
            sprite("PolizeiMapHaken"),
            scale(width() / 1600, height() / 871),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "MapHaken"
        ]);
        
        add([
            text("->", {
                size: height() / 30,
            }),
            color(20, 20, 120),
            anchor("center"),
            area(),
            pos(width() / 10 * 7.1, height() / 10 * 9.3),
            z(31),
            "w"
        ])
        onClick("w", () => {
            destroyAll("*");
            wait(0.01, () => {
                go("end2")
            });
        });
        uiManager.displayKollegenNachricht(true,"Gute Arbeit Kollege! \nNur mit deiner Unterstützung haben wir alle Aufgaben lösen können! \nLass uns noch einmal auf dieses Abenteuer zurückblicken...");uiManager.verkleinerPolmann("ja");uiManager.vergroesserPolmann2("ja")

        
        /*wait(10,()=>{
            if (this.gewartet===0) {
                this.Rückblick()
            }
            else return
        })*/
    }

    Rückblick() {
        this.gewartet = 1
        add([
            sprite("Rückblick"),
            scale(width() / 1536, height() / 1024),
            pos(width() / 2, height() / 2),
            anchor("center"),
            fixed(),
            "Rückblick"
        ]);
        
         wait(0.01,()=>{
                    add([
                    text("->", {
                        size: height() / 30,}),
                    color(20, 20, 120),
                    anchor("center"),
                    area(),
                    pos(width() / 10 * 7.35, height() / 10 * 9.15)
                    ,z(31),"w2"
                ])
         

                onClick("w2", () => {
                        destroyAll("*")
                        wait(0.01, () => {this.Endszene()}
                    )
                })
            }
        )
        uiManager.displayKollegenNachricht(true,"Wir haben uns vom Polizeirevier bis in den letzten Raum des Labors vorgearbeitet! \nFür deine chemischen Fähigkeiten hast du eine Auszeichnung verdient...");uiManager.verkleinerPolmann("nein");uiManager.vergroesserPolmann2("nein")

        
        /*wait(10,()=>{
            if (this.gewartet===1) {
                destroyAll("*")
                this.Endszene()
            }
            else return
        })*/
    }

    Endszene() {
        this.gewartet = 2
        setBackground(Color.fromHex("#D3D4D6"));
        add([
            sprite("Ende"),
            scale(width() / 2500, height() / 1323),
            pos(width() / 2, height() / 2),       
            anchor("center"),
            fixed(),
            "Ende"
        ])
    }
}

export const END = new end();