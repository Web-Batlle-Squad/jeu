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
        <?php
        $level = $_GET["level"];
        // $_GET securisation
        if ($level < 0 || $level > 5){
            header('Location: index.html');
        }?>

        // Constants
        const X = 15;
        const Y = 10;

        // Global variables
        var selectedUnit = false;
        var stamina = 30;
        var level = <?php echo $level;?>;

        // Table with units position
        <?php
        if ($level == 0){
            $file = fopen('levels/customLevel.txt', 'r');
            if (!$file){ header('location: index.html'); }
            ?>CharactersPosition = [<?php echo fread($file, filesize('levels/customLevel.txt')); ?>];<?php
            fclose($file);
        }
        else {
            $file = fopen('levels/level'.$level.'.txt', 'r');
            if (!$file){ header('location: index.html'); }
            ?>CharactersPosition = [<?php echo fread($file, filesize('levels/level'.$level.'.txt')); ?>];<?php
            fclose($file);
        }?>

        // Display
        createTable();
        drawLevel();
        </script>

        <aside>
            <p id='level'></p>
            <p id="stamina"></p>
            <script>
                <?php if ($level == 0){ echo 'document.getElementById(\'level\').innerHTML = \'Level : <strong>Custom level</strong>\';';}
                    else {echo 'document.getElementById(\'level\').innerHTML = \'Level : <strong>\' + level + \'</strong>\';';} ?>
                document.getElementById('stamina').innerHTML = 'Stamina : <strong>' + stamina + '</strong>';
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

            <div class="row">
                <button id="attackLeft" onclick="damage('left')" style="display: none;">Left</button>
                <div class="col">
                    <button id="attackUp" onclick="damage('up')" style="display: none;">Up</button>
                    <button id="attackDown" onclick="damage('down')" style="display: none;">Down</button>
                </div>
                <button id="attackRight" onclick="damage('right')" style="display: none;">Right</button>
            </div>
            <button id="attackCancel" onclick="cancelAttacks()" style="display: none;">Cancel</button>
        </aside>
    </main>
</body>
</html>