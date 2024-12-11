<?php
    $conn = pg_connect("host=localhost port=5433 dbname=postgres user=postgres password=root");

    if(!$conn){
        die("Ошибка подключения к базе данных"); 
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $login = $_POST["login"];
        $password = $_POST["password"];

        $query = "INSERT INTO schema.students (first_name, last_name, login, password) VALUES ('$first_name', '$last_name', '$login', '$password')";
        $result = pg_query($conn, $query);

      if (!$result) {
        echo "Error while executing the query: " . $query;
      }

        $query = "SELECT id_students FROM schema.students WHERE students.login = '$login'";
        $result = pg_query($conn, $query);
        header("Location: student.php");
        setcookie("id_user", $result);
        exit();
    }


    ?>