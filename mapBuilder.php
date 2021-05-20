<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="styles/mapBuilder.css">

    <title>Web Battle Squad - Map Builder</title>
</head>

<body>
    <a href="index.html"><h1>Web Battle Squad</h1></a>

    <?php
    // Report php errors
    error_reporting(E_ALL);
    ini_set("display_errors", 1);

    // Constants
    $X = 30;
    $Y = 20;

    // Form reception
    if (isset($_POST['cell00'])){
        $tab = array($X*$Y);
        for ($i = 0; $i < $Y; $i++){
            for ($j = 0; $j < $X; $j++){
                $tab[($i*$X) + $j] = $_POST['cell'.$j.$i];
            }
        }
        
        // Writing in a file
        if ($file = fopen('map.txt', 'w')){
            for ($i = 0; $i < ($X*$Y); $i++){
                fwrite($file, $tab[$i]);
            }
            fclose($file);
        }
    }
    ?>
    
    <!-- HTML table -->
    <form action="mapBuilder.php" method="POST">
        <table>
            <?php
            for ($i = 0; $i < $Y; $i++) {
                echo '<tr>';
                for ($j = 0; $j < $X; $j++) {
                    echo '<td><select id="cell" name="cell'.$j.$i.'">
                        <option value="0">None</option>
                        <option value="1">Knight</option>
                        <option value="2">Archer</option>
                        <option value="3">Spearman</option>
                        <option value="4">Enemy knight</option>
                        <option value="5">Enemy archer</option>
                        <option value="6">Enemy spearman</option>
                        <option value="7">Tree</option>
                        <option value="8">Fence</option>
                    </select></td>';
                }
                echo '</tr>';
            }
            ?>
        </table>

        <input type="submit" class="button">
    </form>
</body>
</html>