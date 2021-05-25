// Classes

// Class for characters
class Characters{
    constructor(x, y, name, unit){
        this.x = x;
        this.y = y;
        this.name = name;
        this.unit = unit;
        this.health = 100;
    }

    display(){
        switch (this.unit){
            case 1:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="knight" src="images/knight.png" onclick="selectUnit('+this.name+')"/>';
                break;
            case 2:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="archer" src="images/archer.png" onclick="selectUnit('+this.name+')"/>';
                break;
            case 3:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="knight" src="images/knight.png" onclick="selectUnit('+this.name+')"/>';
                break;
            case 4:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="enemy" src="images/pawn.png"/>';
                break;
            case 5:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="enemy" src="images/pawn.png"/>';
                break;
            case 6:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="enemy" src="images/pawn.png"/>';
                break;
            case 7:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="stone" src="images/stone.png"/>';
                break;
            case 8:
                document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="fence" src="images/fence.png"/>';
                break;
        }
    }

    erase(){
        document.getElementById("table").rows[this.y].cells[this.x].innerHTML = '<img alt="transparent image" src="images/transImg.png"/>';
    }
}

// Functions

// Selection
selectionNber = 0;
function selectUnit(unitName){
    if (selectionNber > 0){
        document.getElementById("table").rows[selectedUnit.y].cells[selectedUnit.x].classList.remove("selected");
    }

    selectedUnit = unitName;
    selectionNber++;
    document.getElementById("table").rows[unitName.y].cells[unitName.x].classList.add("selected");
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
        document.getElementById("cancel").removeAttribute("style");
    }
    else{
        alert("No unit selected !");
    }
}

function cancelMovements(){
    document.getElementById("up").setAttribute("style","display: none");
    document.getElementById("down").setAttribute("style","display: none");
    document.getElementById("left").setAttribute("style","display: none");
    document.getElementById("right").setAttribute("style","display: none");
    document.getElementById("cancel").setAttribute("style","display: none");

    document.getElementById("attacks").removeAttribute("style");
    document.getElementById("movements").removeAttribute("style");
}

function right(pers){
    if (pers.x < (X-1) && CharactersPosition[(pers.y*X) + pers.x + 1] == 0){
        CharactersPosition[(pers.y*X) + pers.x + 1] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        document.getElementById("table").rows[pers.y].cells[pers.x].classList.remove("selected");
        pers.erase();

        pers.x+=1;
        document.getElementById("table").rows[pers.y].cells[pers.x].classList.add("selected");
        pers.display(pers);

        stamina -= 1;
        document.getElementById('stamina').innerHTML = 'Stamina : <strong>' + stamina + '</strong>';
        //loseStamina(); disabled
    }
    else if (CharactersPosition[(pers.y*X) + pers.x + 1] == 9){
        winMovements(pers.x, pers.y);
    }
}

function left(pers){
    if (pers.x > 0 && CharactersPosition[(pers.y*X) + pers.x - 1] == 0){
        CharactersPosition[(pers.y*X) + pers.x - 1] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        document.getElementById("table").rows[pers.y].cells[pers.x].classList.remove("selected");
        pers.erase();

        pers.x-=1;
        document.getElementById("table").rows[pers.y].cells[pers.x].classList.add("selected");
        pers.display(pers);

        stamina -= 1;
        document.getElementById('stamina').innerHTML = 'Stamina : <strong>' + stamina + '</strong>';
        //loseStamina(); disabled
    }
    else if (CharactersPosition[(pers.y*X) + pers.x - 1] == 9){
        winMovements(pers.x, pers.y);
    }
} 

function up(pers){
    if (pers.y > 0 && CharactersPosition[(pers.y*X) + pers.x - X] == 0){
        CharactersPosition[(pers.y*X) + pers.x - X] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        document.getElementById("table").rows[pers.y].cells[pers.x].classList.remove("selected");
        pers.erase();

        pers.y-=1;
        document.getElementById("table").rows[pers.y].cells[pers.x].classList.add("selected");
        pers.display(pers);

        stamina -= 1;
        document.getElementById('stamina').innerHTML = 'Stamina : <strong>' + stamina + '</strong>';
        //loseStamina(); disabled
    }
    else if (CharactersPosition[(pers.y*X) + pers.x - X] == 9){
        winMovements(pers.x, pers.y);
    }
} 

function down(pers){
    if (pers.y < (Y-1) && CharactersPosition[(pers.y*X) + pers.x + X] == 0){
        CharactersPosition[(pers.y*X) + pers.x + X] = CharactersPosition[(pers.y*X) + pers.x];
        CharactersPosition[(pers.y*X) + pers.x] = 0;

        document.getElementById("table").rows[pers.y].cells[pers.x].classList.remove("selected");
        pers.erase();

        pers.y+=1;
        document.getElementById("table").rows[pers.y].cells[pers.x].classList.add("selected");
        pers.display(pers);

        stamina -= 1;
        document.getElementById('stamina').innerHTML = 'Stamina : <strong>' + stamina + '</strong>';
        //loseStamina(); disabled
    }
    else if (CharactersPosition[(pers.y*X) + pers.x + X] == 9){
        winMovements(pers.x, pers.y);
    }
}

function winMovements(x, y){
    play = false;
    window.location.replace("index.html");
}

function winAttacks(){
    // s'il n'y a plus d'ennemis la partie s'arrête
}

function loseStamina(){
    if (stamina <= 0){
        play = false;
        window.location.replace("index.html");
    }
}

// Attacks
function attacks(){
    if (selectedUnit != false){
        document.getElementById("attacks").setAttribute("style","display: none");
        document.getElementById("movements").setAttribute("style","display: none");

        document.getElementById("attackUp").removeAttribute("style");
        document.getElementById("attackDown").removeAttribute("style");
        document.getElementById("attackLeft").removeAttribute("style");
        document.getElementById("attackRight").removeAttribute("style");
        document.getElementById("attackCancel").removeAttribute("style");
    }
    else{
        alert("No unit selected !");
    }
}

function cancelAttacks(){
    document.getElementById("attackUp").setAttribute("style","display: none");
    document.getElementById("attackDown").setAttribute("style","display: none");
    document.getElementById("attackLeft").setAttribute("style","display: none");
    document.getElementById("attackRight").setAttribute("style","display: none");
    document.getElementById("attackCancel").setAttribute("style","display: none");

    document.getElementById("attacks").removeAttribute("style");
    document.getElementById("movements").removeAttribute("style");
}

// Display
function erase(x, y){
    document.getElementById("table").rows[y].cells[x].innerHTML = '<img alt="transparent image" src="images/transImg.png"/>';
}

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
    for (var i = 0; i < Y; i++){
        for (var j = 0; j < X; j++){
            document.getElementById("table").rows[i].cells[j].innerHTML = '<img alt="transparent image" src="images/transImg.png"/>';
        }
    }
}

function eraseTable(){
    var object = document.getElementById("table");
    object.remove();
}

function drawLevel(){
    var x = 0;
    for (var i = 0; i < Y; i++){
        for (var j = 0; j < X; j++){
            switch (CharactersPosition[(i*X) + j]){
                case '1':
                    window['unit'+x] = new Characters(j, i, 'unit'+x, 1);
                    window['unit'+x].display();
                    x++;
                    break;
                case '2':
                    window['unit'+x] = new Characters(j, i, 'unit'+x, 2);
                    window['unit'+x].display();
                    x++;
                    break;
                case '3':
                    window['unit'+x] = new Characters(j, i, 'unit'+x, 3);
                    window['unit'+x].display();
                    x++;
                    break;
                case '4':
                    window['enemyUnit'+x] = new Characters(j, i, 'enemyUnit'+x, 4);
                    window['enemyUnit'+x].display();
                    x++;
                    break;
                case '5':
                    window['enemyUnit'+x] = new Characters(j, i, 'enemyUnit'+x, 5);
                    window['enemyUnit'+x].display();
                    x++;
                    break;
                case '6':
                    window['enemyUnit'+x] = new Characters(j, i, 'enemyUnit'+x, 6);
                    window['enemyUnit'+x].display();
                    x++;
                    break;
                case '7':
                    window['obstacle'+x] = new Characters(j, i, 'obstacle'+x, 7);
                    window['obstacle'+x].display();
                    x++;
                    break;
                case '8':
                    window['obstacle'+x] = new Characters(j, i, 'obstacle'+x, 8);
                    window['obstacle'+x].display();
                    x++;
                    break;
                case '9':
                    document.getElementById("table").rows[i].cells[j].classList.add("finish");
                    break;
            }
        }
    }
}