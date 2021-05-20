// Classes

// Class for characters
class Characters{
    constructor(x, y, name, classe, vie){
        this.x = x-1;
        this.y = y-1;
        this.name = name;
        this.classe = 0;
        this.vie = 100;
    }

    addToTab(){
        CharactersPosition[(this.y*X) + this.x] = 1; // changer la classe
    }

    display(){
        var lignes = document.getElementById("table").rows;
        var colonne = lignes[this.y].cells;
        colonne[this.x].innerHTML = document.getElementById("table").value = '<img alt="pawn" src="images/pawn.png" onclick="selectUnit('+this.name+')"/>';
    }

    erase(){
        var lignes = document.getElementById("table").rows;
        var colonne = lignes[this.y].cells;
        colonne[this.x].innerHTML = document.getElementById("table").value = '<img alt="transparent image" src="images/transImg.png"/>';
    }

    positionX(){
        return this.x+1;
    }

    positionY(){
        return this.y+1;
    }
}

// Functions

// Selection
function selectUnit(unitName){
    selectedUnit = unitName;
    var rows = document.getElementById("table").rows;
    var col = rows[unitName.y].cells;
    col[unitName.x].className = "selec";
}

// Movements
function movements(){
    if (selectedUnit != false){
        document.getElementById("attacks").setAttribute("style","display: none");
        document.getElementById("movements").setAttribute("style","display: none");

        document.getElementById("up").removeAttribute("style");
        document.getElementById("down").removeAttribute("style");
        document.getElementById("left").removeAttribute("style");
        document.getElementById("right").removeAttribute("style");
    }
    else{
        alert("No unit selected !");
    }
}

function right(pers){
    if (pers.x < (X-1) && CharactersPosition[(pers.y*X) + pers.x + 1] == 0){
        CharactersPosition[(pers.y*X) + pers.x + 1] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        pers.erase();
        pers.x+=1;
        pers.display(pers);
    }
}

function left(pers){
    if (pers.x > 0 && CharactersPosition[(pers.y*X) + pers.x - 1] == 0){
        CharactersPosition[(pers.y*X) + pers.x - 1] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        pers.erase();
        pers.x-=1;
        pers.display(pers);
    }
} 

function up(pers){
    if (pers.y > 0 && CharactersPosition[(pers.y*X) + pers.x - X] == 0){
        CharactersPosition[(pers.y*X) + pers.x - X] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;
        
        pers.erase();
        pers.y-=1;
        pers.display(pers);
    }
} 

function down(pers){
    if (pers.y < (Y-1) && CharactersPosition[(pers.y*X) + pers.x + X] == 0){
        CharactersPosition[(pers.y*X) + pers.x + X] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;
        
        pers.erase();
        pers.y+=1;
        pers.display(pers);
    }
}

// Attacks
function attacks(){
    if (selectedUnit != false){
        
    }
    else{
        alert("No unit selected !");
    }
}

// Display
function createTable(){
    // Board display
    var body = document.getElementsByTagName("main")[0];
    var tbl = document.createElement("table");
    tbl.id = "table";
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < Y; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < X; j++) {
            var cell = document.createElement("td");

            if(j%2 == 0){ if(i%2 != 0){cell.className = "cell1";} } 
            if(i%2 == 0){ if(j%2 != 0){cell.className = "cell1";} }
            if(j%2 != 0){ if(i%2 != 0){cell.className = "cell2";} }
            if(i%2 == 0){ if(j%2 == 0){cell.className = "cell2";} }

            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    // Include of transparent images in the array
    var rows = document.getElementById("table").rows;
    for(var i = 0; i < Y; i++){
        var col = rows[i].cells;

        for(var j = 0; j < X; j++){
            col[j].innerHTML = document.getElementById("table").value = '<img alt="transparent image" src="images/transImg.png"/>';
        }
    }
}

function eraseTable(){
    var object = document.getElementById("table");
    object.remove();
}

function drawLevel1(){
    var rows = document.getElementById("table").rows;
    var col1 = rows[2].cells;
    var col2 = rows[3].cells;
    var col3 = rows[4].cells;
    col1[2].className = "selec";
    col1[3].className = "selec";
    col1[4].className = "selec";
    col2[2].className = "selec";
    col2[3].className = "selec";
    col2[4].className = "selec";
    col3[2].className = "selec";
    col3[3].className = "selec";
    col3[4].className = "selec";
}