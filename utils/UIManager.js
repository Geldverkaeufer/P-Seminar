

class UIManager {
    displayPolizeiMap() {
        add([
            sprite("bgpolizei"),
            scale(Math.max(width() / 751, height() / 427)),
        ])
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