class JJK{
   constructor(){}
   bunny(){
    var miCasa = createButton("Home");
    var look = createButton("Seach");
    var marioKart = createButton("Your Orders");
    var sun = createButton("Settings");
    miCasa.position(50,350);
    look.position(110,350);
    marioKart.position(170,350);
    sun.position(265,350);

    miCasa.mousePressed(function(){
        appState = 4;
    })
    look.mousePressed(function(){
        appState = 5;
    })
    marioKart.mousePressed(function(){
        appState = 6;
    })
    sun.mousePressed(function(){
        appState = 7;
    })
    }
}