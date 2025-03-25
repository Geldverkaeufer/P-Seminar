import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    stretch: true,
    letterbox: true,
    background: [0, 0, 0]
})

load.assets()

const scenes = {
    polizeiMap: () => {
        uiManager.displayPolizeiMap()
    },
    raum1: () => {
        uiManager.displayRaum1()
        uiManager.displayKollegenNachricht("Wir sind in dem ersten Raum gelandet, aber was ist dieses Pfeifen?\nOh Gott! Ich glaube uns wurde die Sauerstoffzufuhr abgedreht...\nSchnell! Finde die Gasflasche mit dem Sauerstoff bevor es zu spät ist!")
    },
    raum2: () => {},
    raum3: () => {
        uiManager.displayRaum3()
        uiManager.displayKollegenNachricht("Raum3")
    },
    slideshow: () => {},
    end: () => {},
}

for (const key in scenes) {
    scene(key,scenes[key])
}

go("polizeiMap")
