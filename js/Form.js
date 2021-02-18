class Form{
    constructor(){

    }

    display(){
        var title= createElement('h2');
        title.html("Car racing game");
        title.position(750,20);
         
       var input= createInput("NAME:");
       input.position(400,150);
       var button=createButton('PLAY!');
       button.position(450,250);

       var greetings= createElement('h3');

      

       button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount++;
        player.update(name);
        player.updateCount(playerCount);
        greetings.html("HELLO,"+ name);
        greetings.position(700,600)
       })
    }
}