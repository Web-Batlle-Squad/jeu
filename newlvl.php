<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://kit.fontawesome.com/78db0def9d.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Texturina&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

    <link rel="icon" sizes="16x16" href="images/logo.png">
    <link rel="stylesheet" href="styles/wiki.css">

    <title>Web Battle Squad - Wiki</title>
</head>

<body>
    <header>
        <h1>Web Battle Squad</h1>
        <nav>
            <a href="levels.html">Play</a>
            <a href="index.html"><i class="fas fa-home"></i></a>
            <a href="wiki.html">Wiki</a>
            <a href="mapBuilder.php">Map Builder</a>
        </nav>
    </header>

    <main>
        <h1>Level's creation finished!</h1>
        <p>You can go back on the<a href="index.html" style="color:darkgrey"> main menu</a> and play it right now!</p>
        <?php shell_exec("main.exe") ?>
    </main>

    <footer>
        <p>&copy; ISEN project 2021</p>

        <div class="socialNetwork">
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-snapchat-square"></i></a>
            <a href=""><i class="fab fa-twitter-square"></i></a>
        </div>

        <div class="developers">
            <ul>
                <li>BETRY Steeven</li>
                <li>BONNEL Maxime</li>
                <li>CAPON Kevin</li>
                <li>DEGAIN Aurélien</li>
                <li>FORDELONE Marco</li>
                <li>P. FOKAM Vanel</li>
            </ul>
        </div>
    </footer>
</body>
</html>