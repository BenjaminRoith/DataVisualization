
let table;
var friends;

function preload(){
    table = loadTable('data/friends.csv', 'header');
}

function setup(){
   createCanvas(800,800);
   loadData();
}

function draw(){
    background(0);
    for (var i = 0; i < friends.length; i++){
        friends[i].display();
    }
}

function loadData(){
    friends = [];
    
    for (var i = 0; i < table.getRowCount(); i++){
        var row = table.getRow(i);
        var n = row.get("name");
        var d = row.get("d");
        var m = row.get("m");
        var y = row.get("y");
        
    friends[i] = new Friend(n, m, d, y);

    }

}



/*function preload(){
    img2 = loadImage('Images/Global_Map.png');
}*/