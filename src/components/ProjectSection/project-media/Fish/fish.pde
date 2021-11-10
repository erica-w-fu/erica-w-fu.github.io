Fish f1;
Food food;

void setup() {
  size(750, 750);
  
  f1 = new Fish(0, 0, 50, 100);
}

void draw() {
  background(32);
  
  f1.update();
  f1.display();
  
  if (food != null){
    food.display();
    f1.eatFood();
  } else {
    f1.swim();
  }
  
}

void mouseClicked(){
  food = new Food(mouseX, mouseY);
}

class Fish {
  int x, y;
  int targetX, targetY;
  int sizeX, sizeY;
  float angle = 0.0;
  float easing;
  float newAngle = 0;
  
  Fish(int tx, int ty, int sx, int sy) {
    x = tx;
    y = ty;
    sizeX = sx;
    sizeY = sy;
    easing = 0.01;
 }
 
  void update(){
    newAngle = atan2(targetX-x, targetY-y);
  }

  void display() {
    background(0, 50, 75);
    
    pushMatrix(); //make tail of fish
    
    float tangent = sizeY/1.2;
    translate(x-(sin(newAngle)*tangent), y-(cos(newAngle)*tangent));
    
    float da = newAngle - angle;
    angle += da * easing*2;
    rotate(-angle);
    
    fill(200, 75, 50);
    triangle(-sizeX/2.5, 0, sizeX/2.5, 0, 0, -sizeY);
    popMatrix();  
    
    pushMatrix(); //make head of fish
    
    translate(x, y);
    rotate(-newAngle);
       
    //lag when following cursor 
    float dx = targetX - x;
    x += dx * easing;

    float dy = targetY - y;
    y += dy * easing;
    
    noStroke();
    fill(200, 75, 50);
    ellipse(0, -sizeY/2, sizeX, sizeY); //head/ellipse
    
    fill(255);
    ellipse(0, -sizeY/1.5, sizeX/6, sizeY/2); //fin

    fill(0);
    ellipse(-sizeX/2.5, -sizeY/3, sizeX/6, sizeY/5); //eye
    ellipse(sizeX/2.5, -sizeY/3, sizeX/6, sizeY/5); //other eye

    popMatrix();        
  }
  
  void eatFood(){
    targetX = food.x;
    targetY = food.y;
    easing = 0.05;
    
    if(targetX-x < sizeX/2 && targetY-y < sizeX/2){
      food = null;
    }
  }
  
  void swim(){
    targetX = mouseX;
    targetY = mouseY;
    easing = 0.02;
  }
}


class Food {
  int x, y;
  int size;
  color cl;
  
  Food(int tx, int ty) {
    x = tx;
    y = ty;
    size = 10;
    cl = color(random(50, 255), random(50, 255), random(50, 255));
 }
 
  void display(){
    fill(cl);
    ellipse(x, y, size, size);
  }
}