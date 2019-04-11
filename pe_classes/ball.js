class Ball
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = 0;
        this.y = 100;
        this.size = 60;
        this.speed = 2;
    }

    move()
    {
        // Move down based on the speed
        this.x = this.x + this.speed;
    }
    
    display()
    {
        ellipse(this.x, this.y, this.size, this.size);
    }
    bounce()
    {
        if(this.x > width-30)
    {
      this.speed = -2;
    }
    else if(this.x<30){
      this.speed=2;
            }
    }
}
