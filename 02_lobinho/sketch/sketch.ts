class Entity{
    x: number;
    y: number;
    step: number;
    image: p5.Image;

    constructor(x: number, y: number, step: number, image: p5.Image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }

    draw(){
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}

class Board{
    nl: number;
    nc: number;
    step: number;
    background: p5.Image;

    constructor(nl: number, nc:number, step: number, background: p5.Image) {
        this.nl = nl;
        this.nc = nc;
        this.step = step;
        this.background = background;
    }

    draw(): void {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step)
         for(let x = 0; x < this.nc; x++) {
            for(let y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}

let wolf_image: p5.image;
let rabbit_image: p5.image;
let board_image: p5.image;

let wolf: Entity;
let rabbit: Entity;
let board: Board;

function load(path: string): p5.Image {
    return loadImage(
        path, 
        () => console.log('Loading' + path + 'ok'), 
        () => console.log('Loading' + path + 'error')
    );
}

function preload() {
    wolf_image = loadImage('../sketch/lobol.png');
    rabbit_image = loadImage('../sketch/coelho.png');
    board_image = loadImage('../sketch/grama.jpg');
}

//function rabbitloop() {
//      if(rabbit.x == Board.nc){
//        rabbit.x = 0;
//    }if(rabbit.y == Board.nl){
//        rabbit.y = 0;
//    }if(rabbit.x == - 1){
//        rabbit.x = Board.nc - 1;
//    }if(rabbit.y == - 1){
//        rabbit.y = Board.nl - 1;
//    }
// }

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        wolf.x--;
    }else if(keyCode === RIGHT_ARROW) {
        wolf.x++;
    }else if(keyCode === UP_ARROW) {
        wolf.y--;
    }else if(keyCode === DOWN_ARROW){
        wolf.y++;
    }

    if(keyCode === "A".charCodeAt(0)){
        rabbit.x--;
    //    rabbit.y = 0;
    }else if(keyCode === "D".charCodeAt(0)) {
        rabbit.x++;
    //  rabbit.y = 0;
    }else if(keyCode === "W".charCodeAt(0)) {
        rabbit.y--;
    //   rabbit.x = 0;
    }else if(keyCode === "S".charCodeAt(0)) {
        rabbit.y++;
    //   rabbit.x = 0;
    }
}

function setup() {
    let size = 100;
    wolf = new Entity(2, 2, size, wolf_image);
    rabbit = new Entity(1, 2, size, rabbit_image);
    board = new Board(4, 6, size, board_image);
    createCanvas(board.nc * size, board.nl * size);
}

function draw(){
    board.draw();
    wolf.draw();
    rabbit.draw();
//    rabbitloop();
} 