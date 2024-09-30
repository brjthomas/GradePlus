<?php session_start(); ?>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>GradePlus - Dashboard</title>
    <link rel="icon" href="img/logoGreen.png">
</head>

<body class="white-text">
    <?php include("loader.php"); ?>
    <div class="mainapp">
        <?php include("header.php"); ?>
        <div class="container">
            <h2>
                Welcome
                <?php echo $_SESSION['dname']; ?>!
            </h2>
            <div class="flow-text">
                <?php echo $_SESSION['email']; ?>
            </div>
        </div>
    </div>
</body>
<script>
    $(window).on("load", () => {
        $("div.loader").fadeOut(200); // Hide the loader
        setTimeout(() => {
            $("div.mainapp").fadeIn(200); // Show the main app after a short delay
        }, 200);
    });
</script>
<script src="js/theme.js"></script>