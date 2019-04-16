class Bubble
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random(10,40);
        this.speed = random(1,2);
        this.color = color(random(255),random(255),random(255));
    }

    move()
    {
        // Move down based on the speed
        this.y = this.y - this.speed;
    }
    
    display()
    {
        push();
        // Make our snowflakes blue
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
    wrap(){
        if(this.y<0){
            this.y = height;
        }
    }
}
