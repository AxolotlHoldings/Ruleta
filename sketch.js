//Variables

var lab_bg;
var wheel, wheel_Img;
var Y2020, Y2021,Y2022, Y2023, Y2024, Y2025, Y2026, Y2027, Y2028, Y2029;
var I2020, I2021,I2022, I2023, I2024, I2025, I2026, I2027, I2028, I2029;
var slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12;
var slot_img;

function preload() {
  lab_bg = loadImage("Assets/Escenario.png");
  wheel_Img = loadImage("Assets/Vacia.png");
  I2020 = loadImage("Assets/2020.png");
  I2021 = loadImage("Assets/2021.png");
  I2022 = loadImage("Assets/2022.png");
  I2023 = loadImage("Assets/2023.png");
  I2024 = loadImage("Assets/2024.png");
  I2025 = loadImage("Assets/2025.png");
  I2026 = loadImage("Assets/2026.png");
  I2027 = loadImage("Assets/2027.png");
  I2028 = loadImage("Assets/2028.png");
  I2029 = loadImage("Assets/2029.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(lab_bg);
  createWheel();  
  drawSprites();
}

function createWheel() { 
wheel = createSprite(width/2, height/2, 50, 50); 
wheel.addImage(wheel_Img);
wheel.scale = 1.5;

slot1 = createSprite(wheel.x, wheel.y, 50, 50);
slot1.addImage(I2020);
slot1.scale = 0.775;
slot1.setCollider("rectangle", -5, -400, 175, 50);
slot1.rotation = wheel.rotation;

slot2 = createSprite(wheel.x, wheel.y, 50, 50);
slot2.addImage(I2021);
slot2.scale = 0.775;
slot2.setCollider("rectangle", -5, -400, 175, 50);
slot2.rotation = wheel.rotation+30;

slot3 = createSprite(wheel.x, wheel.y, 50, 50);
slot3.addImage(I2022);
slot3.scale = 0.775;
slot3.setCollider("rectangle", -5, -400, 175, 50);
slot3.rotation = wheel.rotation+60;

slot4 = createSprite(wheel.x, wheel.y, 50, 50);
slot4.addImage(I2023);
slot4.scale = 0.775;
slot4.setCollider("rectangle", -5, -400, 175, 50);
slot4.rotation = wheel.rotation+90;

slot5 = createSprite(wheel.x, wheel.y, 50, 50);
slot5.addImage(I2024);
slot5.scale = 0.775;
slot5.setCollider("rectangle", -5, -400, 175, 50);
slot5.rotation = wheel.rotation+120;

slot6 = createSprite(wheel.x, wheel.y, 50, 50);
slot6.addImage(I2025);
slot6.scale = 0.775;
slot6.setCollider("rectangle", -5, -400, 175, 50);
slot6.rotation = wheel.rotation+150;

slot7 = createSprite(wheel.x, wheel.y, 50, 50);
slot7.addImage(I2026);
slot7.scale = 0.775;
slot7.setCollider("rectangle", -5, -400, 175, 50);
slot7.rotation = wheel.rotation+180;

slot8 = createSprite(wheel.x, wheel.y, 50, 50);
slot8.addImage(I2027);
slot8.scale = 0.775;
slot8.setCollider("rectangle", -5, -400, 175, 50);
slot8.rotation = wheel.rotation+210;

slot9 = createSprite(wheel.x, wheel.y, 50, 50);
slot9.addImage(I2028);
slot9.scale = 0.775;
slot9.setCollider("rectangle", -5, -400, 175, 50);
slot9.rotation = wheel.rotation+240;

slot10 = createSprite(wheel.x, wheel.y, 50, 50);
slot10.addImage(I2029);
slot10.scale = 0.775;
slot10.setCollider("rectangle", -5, -400, 175, 50);
slot10.rotation = wheel.rotation+270;

slot11 = createSprite(wheel.x, wheel.y, 50, 50);
slot11.addImage(I2021);
slot11.scale = 0.775;
slot11.setCollider("rectangle", -5, -400, 175, 50);
slot11.rotation = wheel.rotation+300;

slot12 = createSprite(wheel.x, wheel.y, 50, 50);
slot12.addImage(I2021);
slot12.scale = 0.775;
slot12.setCollider("rectangle", -5, -400, 175, 50);
slot12.rotation = wheel.rotation+330;

};