import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    letterbox: true
})

load.assets()

const scenes = {
    polizeiMap: () => {
        uiManager.displayPolizeiMap()
    },
    raum1: () => {
        uiManager.displayKollegenNachricht("Hallo Kollege. Das ist passiert!",(300,400))
    },
    raum2: () => {},
    slideshow: () => {},
    end: () => {},
}

for (const key in scenes) {
    scene(key,scenes[key])
}

go("polizeiMap")
