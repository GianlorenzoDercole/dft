
// const canvas = document.querySelector('#canvas')

// const movementDisplay = document.querySelector('#movement')
// const scoreDisplay = document.querySelector('#score')

// const ctx = canvas.getContext('2d')
// canvas.setAttribute('height', getComputedStyle(canvas)["height"])
// canvas.setAttribute('width', getComputedStyle(canvas)["width"])
// // runs game
// const gameLoopInterval = setInterval(gameLoop, 60)

// class Crawler {
//     constructor(x, y, color, width, height){
//         this.x =x
//         this.y = y
//         this.color = color
//         this.width = width
//         this.height = height
//         this.color = color
//         this.alive = true
//     }
//     render() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
// // builds dragon
// class Dragon {
//     constructor(x, y, width, height) {
//         this.x = x
//         this.y = y

//         const image = new Image()

//         image.src = './images/d.png'

//         this.image = image
//         this.height = 30
//         this.width = 30
//         this.alive = true

//     }
//     render() {
//         // ctx.fillStyle = 'green'
//         // ctx.fillRect(this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.image, this.x, this.y)
//         // console.log(this.image)
//     }
// }
// class Star {
//     constructor(x, y, width, height) {
//         this.x = x
//         this.y = y

//         const image = new Image()

//         image.src = './images/t.png'

//         this.image = image
//         this.height = 30
//         this.width = 30
//         this.alive = true

//     }
//     render() {
//         // ctx.fillStyle = 'green'
//         // ctx.fillRect(this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.image, this.x, this.y)
//         // console.log(this.image)
//     }
// }
// // scale
// class Baddragon {
//     constructor(x, y, width, height) {
//         this.x = x
//         this.y = y

//         const image = new Image()

//         image.src = './images/bd.png'

//         this.image = image
//         this.height = 30
//         this.width = 30
//         this.alive = true

//     }
//     render() {
//         // ctx.fillStyle = 'green'
//         // ctx.fillRect(this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.image, this.x, this.y)
//         // console.log(this.image)
//     }
// }
// class Fire {
//     constructor(x, y, width, height) {
//         this.x = x
//         this.y = y

//         const image = new Image()

//         image.src = './images/fi.png'

//         this.image = image
//         this.height = 30
//         this.width = 30
//         this.alive = true

//     }
//     render() {
//         // ctx.fillStyle = 'green'
//         // ctx.fillRect(this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.image, this.x, this.y)
//         // console.log(this.image)
//     }
// }
// class Food {
//     constructor(x, y, width, height) {
//         this.x = x
//         this.y = y

//         const image = new Image()

//         image.src = './images/f.png'

//         this.image = image
//         this.height = 30
//         this.width = 30
//         this.alive = true

//     }
//     render() {
//         // ctx.fillStyle = 'green'
//         // ctx.fillRect(this.x, this.y, this.width, this.height)
//         ctx.drawImage(this.image, this.x, this.y)
//         // console.log(this.image)
//     }
// }
// // main player
// const dragon = new Dragon(300, 150)
// //fire balls
// const flames = new Fire(dragon.x, dragon.y)

// flames.alive = false
// const goodDragon = new Crawler(5, 250, 'white', 30, 30)

// const randX = Math.floor(Math.random() * canvas.width)
// const randY = Math.floor(Math.random() * canvas.height)

// const star = []
// const bestar = []
// function bgnstars() {

//     for (let i = 0; i < 110; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         bestar.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         bestar.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }






// function stars() {

//     for (let i = 0; i < 110; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         star.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         star.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
//     const finishLine = new Crawler((canvas.width + 11000), 0, 'white', 30, canvas.height )
//     const dragonArray = []

//     // make dragons
//     function dragons() {

//             for (let i = 0; i < 11; i++){

//                 //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//                 dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//                 dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//             }

//     }
//     function dragons2() {

//         for (let i = 0; i < 11; i++){

//             //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//             dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 3000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//             dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 4000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//         }

// }
// function dragons3() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 5000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 6000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// function dragons4() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 7000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 8000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// function dragons5() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 9000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 10000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// bgnstars()
// stars()
// dragons()
// dragons2()
// dragons3()
// dragons4()
// dragons5()

// // food
// const food = new Food(300,300)
// const food2 = new Food(1000 ,Math.floor(Math.random() * canvas.height))
// const food3 = new Food(1250, Math.floor(Math.random() * canvas.height))
// // function drawBox(x , y, w, h, color) {
// //     ctx.fillStyle = color
// //     ctx.fillRect(x, y, w, h)
// //     }

// // controls
// function movementHandler(e) {
//     const speed = 10

//     switch(e.key) {
//         case('w'):
//         dragon.y = dragon.y -speed
//         break
//         case('s'):
//         dragon.y = dragon.y + speed
//         break
//         case('a'):
//         dragon.x = dragon.x - speed
//         break
//         case('d'):
//         dragon.x = dragon.x + speed
//         break
//         case('t'):
//         if (flames.alive == false){
//             flames.alive = true
//         flames.x = dragon.x
//         flames.y = dragon.y
//         }

//         break
//     }
// }


// // food and finish line collision
// function detectcol() {

//     if(dragon.x + dragon.width >= food.x &&
//         dragon.x <= food.x + food.width&&
//         dragon.y + dragon.height >= food.y &&
//         dragon.y <= food.y + food.height
//     ){
//         //score += 100
//         food.alive = false
//         movementDisplay.innerText = 'more fruit'
//     }
//     if(dragon.x + dragon.width >= food2.x &&
//         dragon.x <= food2.x + food2.width&&
//         dragon.y + dragon.height >= food2.y &&
//         dragon.y <= food2.y + food2.height
//     )
//     {
//         //score += 100
//         food2.alive = false
//         movementDisplay.innerText = 'yum yum'
//     }
//     if(dragon.x + dragon.width >= food3.x &&
//         dragon.x <= food3.x + food3.width&&
//         dragon.y + dragon.height >= food3.y &&
//         dragon.y <= food3.y + food3.height
//     )
//     {
//         //score += 100
//         food3.alive = false
//         movementDisplay.innerText = 'my favorite'
//     }
//     if (dragon.x >finishLine.x && dragon.alive == true){
//         movementDisplay.innerText = 'you win'
//         dragon.alive = false
//     }
// }


// // wall collision
// function wallCol() {
//     if (dragon.y > canvas.height - 30 || dragon.y < 0 || dragon.x < 0 || dragon.x > canvas.width){
//         dragon.alive = false
//         movementDisplay.innerText = 'try again'
//         score = 0
//     }
// }

// // dragon collision
// function detectDragons() {
//     for (let i = 0; i < dragonArray.length; i++){
//         if(dragonArray[i].alive == true){
//             if(dragon.x + dragon.width >= dragonArray[i].x &&
//                 dragon.x <= dragonArray[i].x + dragonArray[i].width&&
//                 dragon.y + dragon.height >= dragonArray[i].y &&
//                 dragon.y <= dragonArray[i].y + dragonArray[i].height
//             ){
//                 movementDisplay.innerText = 'try again'
//                 dragon.alive = false
//                 score = 0

//             }
//         }

//     }

// }
// // fire collision
// function detectFire() {
//     for (let i = 0; i < dragonArray.length; i++){
//         if (flames.alive == true && dragonArray[i].alive == true){
//             if(flames.x + flames.width >= dragonArray[i].x &&
//                 flames.x <= dragonArray[i].x + dragonArray[i].width&&
//                 flames.y + flames.height >= dragonArray[i].y &&
//                 flames.y <= dragonArray[i].y + dragonArray[i].height
//             ){
//                 dragonArray[i].alive = false
//                 flames.alive = false


//             }
//         }

//     }

// }
// score = 0

// function gameLoop(){

//     scoreDisplay.innerText = score

//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (let i = 0 ; i < bestar.length; i++){
//         if(dragon.alive == true){

//             ran = Math.floor(Math.random * 5)
//             bestar[i].x -= ran
//             bestar[i].render()
//         }
//         if (bestar[i].x < -100){
//             bestar[i].x = 1200
//         }


//     }
//     for (let i = 0 ; i < star.length; i++){
//         if(dragon.alive == true){
//             ran = Math.floor(Math.random() * 5)

//             star[i].x -= ran
//             star[i].render()
//         }
//         if (star[i].x < -100){
//             star[i].x = 1200
//         }


//     }

//     if(dragon.alive == true) {
//         finishLine.render()
//     }

//     finishLine.x -= 10
//     if( food.alive == true && dragon.alive == true) {
//         food.render()
//     }

//     food.x -= 1

//     if( food2.alive == true && dragon.alive == true) {
//         food2.render()
//     }

//     food2.x -= 1
//     if( food3.alive == true && dragon.alive == true) {
//         food3.render()
//     }

//     food3.x -= 1

//     for (let i = 0 ; i < dragonArray.length; i++){
//         if(dragon.alive == true && dragonArray[i].alive == true){
//             dragonArray[i].render()
//         dragonArray[i].x -= 10
//         }


//     }
//     if (dragon.alive == true){
//         dragon.render()
//     }
//     //dragon.y += 1
//     scoreDisplay.innerText = score


// if( food.alive === false) {
//     score = 100
// }
// if( food2.alive === false){
//     score = 100
// }
// if (food3.alive === false){
//     score = 100
// }
// if(food.alive === false && food2.alive ===false){
//     score = 200
// }
// if(food.alive === false && food3.alive ===false){
//     score = 200
// }
// if(food2.alive === false && food3.alive ===false){
//     score = 200
// }
// if( food.alive === false && food2.alive === false && food3.alive === false){
//     score = 300
// }

// wallCol()
// detectcol()
// detectDragons()
// if (flames.alive == true){

//     flames.render()
//     flames.x += 10
// }
// if (flames.x > canvas.width){
//     flames.alive = false
// }
// detectFire()
// if (dragon.alive == false) {
//     image = new Image()
//     image.src = './images/f.png'
//     ctx.drawImage(image, 100, 100)
// }
// movementDisplay.addEventListener('click', e => {
//     dragon.alive = true
//     dragon.render()
//     food.alive = false
//     food2.alive = false
//     food3.alive = false
//     score = 0
//     for (let i = 0 ; i < dragonArray.length; i++){
//         dragonArray[i].alive = false
//         }
//     dragons()
//     dragons2()
//     dragons3()
//     dragons4()
//     dragons5()

//     dragon.x = 100
//     dragon.y = 100

//     // food.x = 300
//     // food.y = 300
//     //const food = new Food(300,300)
//     food.alive = true
//     food.x = 300
//     food.y = 300
//     food.render()
//     food2.alive = true
//     food2.x = 1000
//     food.y = Math.floor(Math.random() * canvas.height)
//     food2.y = Math.floor(Math.random() * canvas.height)
//     food2.render()
//     food3.alive = true
//     food3.x = 1250
//     food3.y = Math.floor(Math.random() * canvas.height)
//     food3.render()
//     finishLine.x = canvas.width + 11000
//     finishLine.alive = true
//     finishLine.render()
//     // const red = Math.floor(Math.random() * 250)
//     // const blue = Math.floor(Math.random() * 250)
//     // const green = Math.floor(Math.random() * 250)
//     // const rgb = `rgb(${red},${green},${blue})`
//     // drawBox(e.offsetX, e.offsetY, 30, 30, 'red')

// })
// }
// // const meow = new Audio(./)





// document.addEventListener('keydown', movementHandler)






// const canvas = document.querySelector('#canvas')

// const movementDisplay = document.querySelector('#movement')
// const scoreDisplay = document.querySelector('#score')

// const ctx = canvas.getContext('2d')
// canvas.setAttribute('height', getComputedStyle(canvas)["height"])
// canvas.setAttribute('width', getComputedStyle(canvas)["width"])
// // keeps game playing consistently
// const gameLoopInterval = setInterval(gameLoop, 60)


// class Crawler {
//     constructor(x, y, color, width, height){
//         this.x =x
//         this.y = y
//         this.color = color
//         this.width = width
//         this.height = height
//         this.color = color
//         this.alive = true
//     }
//     render() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
// // dragon for player to control
// const goodDragon = new Crawler(5, 250, 'white', 30, 30)

//     // function generate_dragon(){
//     //     const randX = Math.floor(Math.random() * canvas.width)
//     //     const randY = Math.floor(Math.random() * canvas.height)
//     //     const new_dragon = new Crawler(randX, randY, 'green', 30, 30)

//     // }
//     // generate_dragon()

//     // finish line to detect game is won
//     const finishLine = new Crawler((canvas.width + 11000), 0, 'white', 30, canvas.height )
//     //used in game loop to add dragons
//     const dragonArray = []
//     function dragons() {

//             for (let i = 0; i < 11; i++){

//                 //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//                 dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//                 dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//             }

//     }
//     function dragons2() {

//         for (let i = 0; i < 11; i++){

//             //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//             dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 3000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//             dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 4000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//         }

//     }
// function dragons3() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 5000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 6000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// function dragons4() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 7000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 8000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// function dragons5() {

//     for (let i = 0; i < 11; i++){

//         //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 9000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
//         dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 10000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

//     }

// }
// dragons()
// dragons2()
// dragons3()
// dragons4()
// dragons5()

// // food player eats to score
// const food = new Crawler(300,300, 'yellow', 30, 30)
// const food2 = new Crawler(1000 ,Math.floor(Math.random() * canvas.height), 'yellow', 30, 30)
// const food3 = new Crawler(1250, Math.floor(Math.random() * canvas.height), 'yellow', 30, 30)
// function drawBox(x , y, w, h, color) {
//     ctx.fillStyle = color
//     ctx.fillRect(x, y, w, h)
//     }

// //control dragon
// function movementHandler(e) {
//     const speed = 10

//     switch(e.key) {
//         case('w'):
//         goodDragon.y = goodDragon.y -speed
//         break
//         case('s'):
//         goodDragon.y = goodDragon.y + speed
//         break
//         case('a'):
//         goodDragon.x = goodDragon.x - speed
//         break
//         case('d'):
//         goodDragon.x = goodDragon.x + speed
//         break
//     }
// }
// //detect collision with food and finish line
// function detectcol() {

//     if(goodDragon.x + goodDragon.width >= food.x &&
//         goodDragon.x <= food.x + food.width&&
//         goodDragon.y + goodDragon.height >= food.y &&
//         goodDragon.y <= food.y + food.height
//     ){
//         //score += 100
//         food.alive = false
//         movementDisplay.innerText = 'food'
//     }
//     if(goodDragon.x + goodDragon.width >= food2.x &&
//         goodDragon.x <= food2.x + food2.width&&
//         goodDragon.y + goodDragon.height >= food2.y &&
//         goodDragon.y <= food2.y + food2.height
//     )
//     {
//         //score += 100
//         food2.alive = false
//         movementDisplay.innerText = 'mmmmm'
//     }
//     if(goodDragon.x + goodDragon.width >= food3.x &&
//         goodDragon.x <= food3.x + food3.width&&
//         goodDragon.y + goodDragon.height >= food3.y &&
//         goodDragon.y <= food3.y + food3.height
//     )
//     {
//         //score += 100
//         food3.alive = false
//         movementDisplay.innerText = 'aaaaa'
//     }
//     if (goodDragon.x >finishLine.x && goodDragon.alive == true){
//         movementDisplay.innerText = 'you win'
//         goodDragon.alive = false
//     }
// }






















// // detect collision with wall
// function wallCol() {
//     if (goodDragon.y > canvas.height - 30 || goodDragon.y < 0 || goodDragon.x < 0 || goodDragon.x > canvas.width){
//         goodDragon.alive = false
//         movementDisplay.innerText = 'try again'
//         score = 0
//     }
// }
// //detect collision with dragons
// function detectDragons() {
//     for (let i = 0; i < dragonArray.length; i++){
//         if(goodDragon.x + goodDragon.width >= dragonArray[i].x &&
//             goodDragon.x <= dragonArray[i].x + dragonArray[i].width&&
//             goodDragon.y + goodDragon.height >= dragonArray[i].y &&
//             goodDragon.y <= dragonArray[i].y + dragonArray[i].height
//         ){
//             movementDisplay.innerText = 'try again'
//             goodDragon.alive = false
//             score = 0

//         }
//     }

// }
// score = 0

// function gameLoop(){

//     scoreDisplay.innerText = score

//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     if(goodDragon.alive == true) {
//         finishLine.render()
//     }

//     finishLine.x -= 10
//     if( food.alive == true && goodDragon.alive == true) {
//         food.render()
//     }

//     food.x -= 1

//     if( food2.alive == true && goodDragon.alive == true) {
//         food2.render()
//     }

//     food2.x -= 1
//     if( food3.alive == true && goodDragon.alive == true) {
//         food3.render()
//     }

//     food3.x -= 1

//     for (let i = 0 ; i < dragonArray.length; i++){
//         if(goodDragon.alive == true){
//             dragonArray[i].render()
//         dragonArray[i].x -= 10
//         }


//     }
//     if (goodDragon.alive == true){
//         goodDragon.render()
//     }
//     //goodDragon.y += 1
//     scoreDisplay.innerText = score


// if( food.alive === false) {
//     score = 100
// }
// if( food2.alive === false){
//     score = 100
// }
// if (food3.alive === false){
//     score = 100
// }
// if(food.alive === false && food2.alive ===false){
//     score = 200
// }
// if(food.alive === false && food3.alive ===false){
//     score = 200
// }
// if(food2.alive === false && food3.alive ===false){
//     score = 200
// }
// if( food.alive === false && food2.alive === false && food3.alive === false){
//     score = 300
// }
// wallCol()
// detectcol()
// detectDragons()
// }

// canvas.addEventListener('click', e => {
//     // const red = Math.floor(Math.random() * 250)
//     // const blue = Math.floor(Math.random() * 250)
//     // const green = Math.floor(Math.random() * 250)
//     // const rgb = `rgb(${red},${green},${blue})`
//     // drawBox(e.offsetX, e.offsetY, 30, 30, 'red')
// })




// document.addEventListener('keydown', movementHandler)

































































//////////////////////////////////

// set up canvas
const canvas = document.querySelector('#canvas')
// screen display
const movementDisplay = document.querySelector('#movement')
const scoreDisplay = document.querySelector('#score')
// set canvas to 2d
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)["height"])
canvas.setAttribute('width', getComputedStyle(canvas)["width"])
// runs game loop every 60 milliseconds
const gameLoopInterval = setInterval(gameLoop, 60)
// this is the button to reset game
message = document.querySelector('#btm-right')


// FinishLine class is used for building finish line
class FinishLine {
    constructor(x, y, color, width, height){
        this.x =x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.color = color
        this.alive = true
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// pic class is used for the player dragon and template for other classes
class Pic {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        const image = new Image()
        image.src = './images/d2.png'
        this.image = image
        this.height = 30
        this.width = 30
        this.alive = true
    }
    render() {
        ctx.drawImage(this.image, this.x, this.y)

    }
}
// bad dragon class is used for oncoming enemy dragons
class Baddragon extends Pic{
    constructor(x, y, width, height) {
        super(x, y, width, height)
        const image = new Image()
        image.src = './images/bd2.png'
        this.image = image
    }
    render() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}
// star class used for moving stars
class Star extends Pic{
    constructor(x, y, width, height) {
        super(x, y, width, height)
        const image = new Image()
        image.src = './images/s.png'
        this.image = image
    }
    render() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}
// fire class is used for fire balls that player dragon breathes
class Fire extends Pic{
    constructor(x, y, width, height) {
        super(x, y, width, height)
        const image = new Image()
        image.src = './images/fi2.png'
        this.image = image
    }
    render() {
        ctx.drawImage(this.image, this.x, this.y)
    }
}
// food class is used for pieces of dragon fruit
class Food extends Pic{
        constructor(x, y, width, height) {
            super(x, y, width, height)
            const image = new Image()
            image.src = './images/f2.png'
            this.image = image
        }
        render() {
            ctx.drawImage(this.image, this.x, this.y)
        }
}
// main player
const dragon = new Pic(300, 150)
//fire balls
const flames = new Fire(dragon.x, dragon.y)
// flames.alive condition allows player to use fire ball if there is not already fire on screen
flames.alive = false
// food array is used to store fruit that will later cross screen
const foodArray = []
let piecesOfFruit = 2
// fooda functio adds fruit to the food array
function foods() {
    for (let i = 0; i < piecesOfFruit; i++){
         foodArray.push(food = new Food(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height)))
         foodArray.push(food = new Food(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height)))
        }
}

// add all the food the foods array
foods()
// finish line comes after all the dragons
const finishLine = new FinishLine((canvas.width + 11000), 0, 'white', 30, canvas.height )
// dragon array is used to store dragons which will later cross the screen
const dragonArray = []
// the dragons function add a fleet of dragons the dragon array
let numberOfDragons = 11
function dragons() {
        for (let i = 0; i < numberOfDragons; i++){
             dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height)))
             dragonArray.push(badDragon = new Baddragon(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height)))
            }
    }
// add all the dragons to the dragon array
dragons()

// stars array is used to store stars which will later move across the screen
let stars = []
let numberOfStars = 110
function bgnstars() {

    for (let i = 0; i < numberOfStars; i++){
        stars.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )), Math.floor(Math.random() * canvas.height)))
        stars.push(badDragon = new Star(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height)))
    }
}
bgnstars()
// controls for player dragon
function movementHandler(e) {
    const speed = 10

    switch(e.key) {
        case('w'):
        dragon.y = dragon.y -speed
        break
        case('s'):
        dragon.y = dragon.y + speed
        break
        case('a'):
        dragon.x = dragon.x - speed
        break
        case('d'):
        dragon.x = dragon.x + speed
        break
        case('t'):
        // flames.alive condition allows player to use fire ball if fire not already on screen
        if (flames.alive == false){
            flames.alive = true
        flames.x = dragon.x
        flames.y = dragon.y
        }
        break
    }
}
// collision detection
function detectcol(){

    // detect finish line collision
    if (dragon.x >finishLine.x && dragon.alive == true){
        movementDisplay.innerText = 'you win'
        dragon.alive = false
    }
    // detect wall collision
    if (dragon.y > canvas.height - 30 || dragon.y < 0 || dragon.x < 0 || dragon.x > canvas.width){
        dragon.alive = false
        movementDisplay.innerText = 'try again'
        score = 0
    }
    // detect bad dragon collision
    for (let i = 0; i < dragonArray.length; i++){
        if(dragonArray[i].alive == true){
            if(dragon.x + dragon.width >= dragonArray[i].x &&
                dragon.x <= dragonArray[i].x + dragonArray[i].width&&
                dragon.y + dragon.height >= dragonArray[i].y &&
                dragon.y <= dragonArray[i].y + dragonArray[i].height
            ){
                movementDisplay.innerText = 'try again'
                dragon.alive = false
                score = 0

            }
        }
    }
    let wordsArray = ['more fruit', 'my favorite', 'yum yum']
    // detect fire collision
    for (let i = 0; i < dragonArray.length; i++){
        if (flames.alive == true && dragonArray[i].alive == true){
            if(flames.x + flames.width -10 >= dragonArray[i].x &&
                flames.x <= dragonArray[i].x + dragonArray[i].width&&
                flames.y + flames.height >= dragonArray[i].y &&
                flames.y <= dragonArray[i].y + dragonArray[i].height
            ){
                dragonArray[i].alive = false
                flames.alive = false
                dragonArray[i].x = canvas.width + 1000
                dragonArray[i].alive = true

            }
        }

    }
    for (let i = 0; i < foodArray.length; i++){
        if(dragon.x + dragon.width >= foodArray[i].x &&
            dragon.x <= foodArray[i].x + foodArray[i].width&&
            dragon.y + dragon.height >= foodArray[i].y &&
            dragon.y <= foodArray[i].y + foodArray[i].height&&
            foodArray[i].alive == true
        ){
            foodArray[i].alive = false
            score += 100
            movementDisplay.innerText = wordsArray[Math.floor(Math.random() * 3)]
            foodArray[i].x = canvas.width + 1000
            foodArray[i].alive = true
        }

    }

}

// score will update when player eats dragon fruit
let score = 0

// logic for running the game
function gameLoop(){

    scoreDisplay.innerText = score

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // render finish line if game not over
    if(dragon.alive == true) {
        finishLine.render()
    }
    // move finish line towards player
    finishLine.x -= 10

    // render stars and move them across the screen

    for (let i = 0 ; i < stars.length; i++){

        if(dragon.alive){
            stars[i].x -= 2
            stars[i].render()
        }
        if(stars[i].x < -30){
            stars.pop(stars[i])
            stars.push(stars[i])
            stars[i].x = canvas.width + 1000
        }
    }

    // move food across the screen
    for (let i = 0 ; i < foodArray.length; i++){
        if (dragon.alive && foodArray[i].alive ){

            foodArray[i].x -=5
            foodArray[i].render()

        }
        if(foodArray[i].x < -30){
            foodArray[i].x = canvas.width + 1000
        }

    }

    // render dragons and move them across the screen
    for (let i = 0 ; i < dragonArray.length; i++){
        if(dragon.alive == true && dragonArray[i].alive == true ){
            dragonArray[i].x -= 10
            dragonArray[i].render()

        }
        if(dragonArray[i].x < -30){
            dragonArray[i].x = canvas.width + 1000
        }
    }

    //render player dragon
    if (dragon.alive == true){
        dragon.render()
    }

    // display score
    scoreDisplay.innerText = score

    // collision detection for walls food fire and dragons
    detectcol()

    // allow player to use fire ball if fire not on screen
    if (flames.alive == true){

        flames.render()
        flames.x += 10
    }
    if (flames.x > canvas.width){
        flames.alive = false
    }

}
    // reset the game when player clickes on reset button
    message.addEventListener('click', e => {
        movementDisplay.innerText = "I'm hungry"
        dragon.alive = true
        dragon.render()

        score = 0
        for (let i = 0 ; i < dragonArray.length; i++){
            dragonArray[i].alive = false
            }
        dragons()
        for (let i = 0 ; i < foodArray.length; i++){
            foodArray[i].alive = false
            }
        foods()

        dragon.x = 100
        dragon.y = 100


        finishLine.x = canvas.width + 11000
        finishLine.alive = true
        finishLine.render()
    })

// allow keys for movement to work
document.addEventListener('keydown', movementHandler)



////////////////////////////////////////////////////////////////
