// Classes

// Class for characters
class Characters{
    constructor(x, y, classe, vie, name){
        this.x = x-1;
        this.y = y-1;
        this.classe = 0;
        this.vie = 100;
        this.name = "char";
    }

    addToTab(x, y){
        CharactersPosition[(y*Y) + x] = 1;
    }

    display(x, y){
        var lignes = document.getElementById("table").rows;
        var colonne = lignes[y].cells;
        colonne[x].innerHTML = document.getElementById("table").value = '<img alt="pawn" src="images/pawn.png" onclick="selectUnit('+this.name+')"/>';
    }

    erase(x,y){
        var lignes = document.getElementById("table").rows;
        var colonne = lignes[y].cells;
        colonne[x].innerHTML = document.getElementById("table").value = '<img alt="transparent image" src="images/transImg.png"/>';
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
    persoTemp = unitName;
    var rows = document.getElementById("table").rows;
    var col = rows[unitName.y].cells;
    col[unitName.x].className = "selec";
}

// Move
function movements(){
    document.getElementById("attacks").setAttribute("style","display: none");
    document.getElementById("movements").setAttribute("style","display: none");

    document.getElementById("up").removeAttribute("style");
    document.getElementById("down").removeAttribute("style");
    document.getElementById("left").removeAttribute("style");
    document.getElementById("right").removeAttribute("style");
}

function right(pers){
    if (pers.x < (X-1)){
        CharactersPosition[pers.x+1][pers.y]=CharactersPosition[pers.x][pers.y];
        CharactersPosition[pers.x][pers.y]=0;

        pers.erase(pers.x,pers.y);
        pers.x+=1;
        pers.display(pers.x,pers.y);
    }
}

function left(pers){
    if (pers.x > 0){
        CharactersPosition[pers.x-1][pers.y]=CharactersPosition[pers.x][pers.y];
        CharactersPosition[pers.x][pers.y]=0;

        pers.erase(pers.x,pers.y);
        pers.x-=1;
        pers.display(pers.x,pers.y);
    }
} 

function up(pers){
    if (pers.y > 0){
        CharactersPosition[pers.x][pers.y+1]=CharactersPosition[pers.x][pers.y];
        CharactersPosition[pers.x][pers.y]=0;
        
        pers.erase(pers.x,pers.y);
        pers.y-=1;
        pers.display(pers.x,pers.y);
    }
} 

function down(pers){
    if (pers.y < (Y-1)){
        CharactersPosition[pers.x][pers.y-1]=CharactersPosition[pers.x][pers.y];
        CharactersPosition[pers.x][pers.y]=0;
        
        pers.erase(pers.x,pers.y);
        pers.y+=1;
        pers.display(pers.x,pers.y);
    }
}