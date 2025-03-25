

class UIManager {
    displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            area(),
            scale(Math.max(width() / 1574, height() / 908)), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "PolizeiBG"
        ]);
        onClick("PolizeiBG",() => {go("raum1")})
    }

    displayRaum1() {
        add([
            sprite("bgRaum1"),
            area(),
            scale(Math.max(width() / 1574, height() / 908)), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum1BG"
        ])
        onClick("Raum1BG",() => {go("raum3")})
    }

    r1t1() {

    }

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(Math.max(width() / 2000, height() / 1500)), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            fixed(),
            "Raum3BG"
        ])
        onClick("Raum3BG",() => {go("polizeiMap")})
    }
    r1t1() {

    }
    
    
    displayKollegenNachricht (content) {
        add([
            sprite("Sprechblase"), 
            pos(width()/2,height()/10*9), 
            scale(Math.max(width() / 1046/5, height() /177/5)), 
            anchor("center"),
        ]);
    
        add([
            text(content, {
                size: 24, //an innerwidth angleichen
                color: rgb(14, 4, 39),
            }),
            color(0,0,0),
            area(),
            anchor("center"),
            pos(width()/2,height()/10*9), 
        ])
        add([
            sprite("Polmann"), 
            pos(width(), height()), 
            scale(Math.max(width() / 800/6, height() / 1600/5)), 
            anchor("botright"), 
        ]);
    }   
}

export const uiManager = new UIManager()
