

class UIManager {
    displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            area(),
            scale(Math.max(width() / 1302, height() / 759)), 
            pos(width() / 2, height() / 2), 
            anchor("center"),
            "PolizeiBG"
        ]);
        onClick("PolizeiBG",() => {go("raum1")}
        )
        onKeyPress("enter", () => go("raum1"))
    }
    
    
    displayKollegenNachricht (content, position) {
        add([
            sprite("Sprechblase"), 
            pos(position), 
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
            pos(position),       
        ])
        
    }   
}

export const uiManager = new UIManager()
