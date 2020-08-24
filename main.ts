enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    adison.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, adison, 200, 0)
    music.pewPew.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    adison.setImage(img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    adison.setImage(img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    adison.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.baDing.play()
})
let projectile: Sprite = null
let adison: Sprite = null
adison = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(adison)
scene.cameraFollowSprite(adison)
scene.setBackgroundColor(9)
effects.confetti.startScreenEffect()
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303030108010101010809010101010801030301080707010108090101040408010303010801010101080901010101080103030108010707070a06070707010801030301010101010105080101010101010303010101070707050807070701010103030101010101010508010101010101030301010101010101010101010101010303010c040404040101040404040b010303010901010101010101010101080103030109010101080101050101010801030301060707070a0101060707070a0703030101010101010101010105010101030301010101010101010101050101020303030303030303030303030303030303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 . . . . 2 2 . . . . 2 . 2 
    2 . 2 2 2 . . 2 2 . . 2 2 2 . 2 
    2 . 2 . . . . 2 2 . . . . 2 . 2 
    2 . 2 . 2 2 2 2 2 2 2 2 . 2 . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . 2 2 2 2 2 2 2 . . . . 2 
    2 . . . . . . 2 2 . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 
    2 . 2 . . . . . . . . . . 2 . 2 
    2 . 2 . . . 2 . . 2 . . . 2 . 2 
    2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.dungeon.chestOpen,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest], TileScale.Sixteen))
info.setLife(3)
