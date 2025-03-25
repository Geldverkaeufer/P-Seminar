

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
        onKeyPress("space",() => {go("raum3")})
    }

    r1t1() {

    }

    displayRaum3() {
        add([
            sprite("bgRaum3"),
            area(),
            scale(width() / 1696, height() / 984), 
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
}

export const uiManager = new UIManager()
