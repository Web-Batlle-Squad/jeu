<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0">

    <link href="https://fonts.googleapis.com/css2?family=Texturina&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

    <script type="text/javascript" src="functions.js"></script>
    <link rel="stylesheet" href="styles/play.css">

    <title>Web Battle Squad - Play</title>
</head>

<body>
    <a href="index.html"><h1>Web Battle Squad</h1></a>
    <main>
        <script>
        // Constants
        const X = 30;
        const Y = 20;

        // Global variables
        var play = true;
        var selectedUnit = false;
        var level = 1;

        // Table with characters position
        <?php $file = fopen('map.txt', 'r');?> // sécuriser l'ouverture du fichier
        CharactersPosition = [<?php echo fread($file, filesize('map.txt')); ?>];
        <?php fclose($file); ?>

        // Display
        // if 
        createTable();
        drawLevel1();

        var char = new Characters(7, 5, 'char', 1);
        char.display(); 

        var en1 = new Characters(6, 5, 'en1', 2);
        en1.display();

        var en2 = new Characters(6, 3, 'en2', 2);
        en2.display();
        </script>

        <aside>
            <p id='level'></p>
            <script>
                document.getElementById('level').innerHTML = 'Level : <strong>' + level + '</strong>';
            </script>

            <button id="movements" onclick="movements()">Move</button>
            <button id="attacks" onclick="attacks()">Attack</button>
            <div class="row">
                <button id="left" onclick="left(selectedUnit)" style="display: none;">Left</button>
                <div class="col">
                    <button id="up" onclick="up(selectedUnit)" style="display: none;">Up</button>
                    <button id="down" onclick="down(selectedUnit)" style="display: none;">Down</button>
                </div>
                <button id="right" onclick="right(selectedUnit)" style="display: none;">Right</button>
            </div>
            <button id="cancel" onclick="cancelMovements()" style="display: none;">Cancel</button>
        </aside>
    </main>
</body>
</html>