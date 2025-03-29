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
        add([
            sprite("gasflaschen"),
            area(),
            scale(width() / 1248, height() / 1182), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "GasflaschenBG"
        ])
        this.displayKollegenNachricht(true,"Sehr gut, du hast die Gasflaschen gefunden!\nAber die Beschriftung fehlt.\nLass uns schnell herausfinden in welcher sich der Sauerstoff befindet!")
        let circles = [
            { x: width() / 10 * 2, y: height() / 2, tag: "circle1", message: "Das ist Flasche 1.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!" },
            { x: width() / 2, y: height() / 2, tag: "circle2", message: "Das ist Flasche 2.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!" },
            { x: width() / 10 * 8, y: height() / 2, tag: "circle3", message: "Das ist Flasche 3.\nSchaue dir auf der learning app den Gasnachweis, den wir hier durchgeführt haben, an!" }
        ];
        
        circles.forEach(({ x, y, tag, message }) => {
            add([
                sprite("kreis"),
                area(),
                pos(x, y),
                anchor("center"),
                opacity(0),
                tag 
            ]);
        
            onClick(tag, () => {
                destroyAll("miniPolmann")
                uiManager.displayKollegenNachricht(true, message);
            });

            this.verkleinerPolmann()
            this.vergroesserPolmann("Sehr gut, du hast die Gasflaschen gefunden!\nAber die Beschriftung fehlt.\nLass uns schnell herausfinden in welcher sich der Sauerstoff befindet!")
        });
        
        
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
                "Sprechblase"
            ]);
        
            add([
                text(content, {
                    size: 24,  
                }),
                color(0, 0, 0),
                anchor("center"),
                pos(width()/2, height()/10*9),
                "nachricht"
            ]);
            
            add([
                sprite("Polmann"), 
                pos(width(), height()), 
                area(),
                scale(Math.max(width() / 800/6, height() / 1600/5)), 
                anchor("botright"), 
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