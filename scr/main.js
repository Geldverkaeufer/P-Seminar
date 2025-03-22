// zum starten npm run dev
import kaplay from "kaplay"
// k.loop
//k.scene

const k = kaplay({})

//dann k.loadSprite()
k.loadBean()
k.setGravity(1500)      

k.scene("polizeiwand",() => {
    
})

k.scene("raum1",() => {})

k.scene("raum2", () => {})




const player = k.add([
    k.sprite("bean"),         //call Sprite -> auf den screen
    k.pos(k.center()),
    k.area(),                 //hitbox
    k.body()                  //für collisions/gravity (k.setGravity(100))
])

player.onKeyPress("space", () => {
    if (player.isGrounded) {player.jump(500);}
})

k.add([
    k.rect(k.width()/4, k.height()/4), 
    k.pos(300,600),
    k.area(),
    k.outline(3),
    k.body({isStatic: true})
])


