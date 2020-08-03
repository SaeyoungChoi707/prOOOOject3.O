class Anything{
    constructor(){}
anything(){
    textSize(15);
    fill("red");
    text("currently nameless app", 150,190);
    rectMode(CENTER);
    rect(200,98,50,50);
    login = createButton("SIGN IN");
    signnn = createButton("SIGN UP");
    login.position(160, 210);
    signnn.position(160, 260); 

    login.mousePressed(function(){
        appState = 1;
        login.hide();
        signnn.hide();
    })

    signnn.mousePressed(function(){
        appState = 2;
        login.hide();
        signnn.hide();
    })
}
}
