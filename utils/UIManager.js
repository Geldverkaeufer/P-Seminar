

class UIManager {
    displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            scale(Math.max(width() / 1302, height() / 759)), // Scale to fill the screen completely
            pos(width() / 2, height() / 2), // Center the image
            anchor("center"),
        ]);
        onClick("bgpolizei", () => {go("raum1")}
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
