<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link rel="stylesheet" href="css/sign_up.css">
</head>
<body>

    <div class="wrapper">
        <h1>Регистрация</h1>
        <form action="sign_up_back.php" method="post">
            <input name = "first_name" type="text" placeholder="Имя" required>
            <input name = "last_name" type="text" placeholder="Фамилия" required>
            <input name = "login" type="text" placeholder="Логин" required>
            <input name = "password" type="password" placeholder="Пароль" required>
            <div id="extra_poles"></div>
            <button type="submit">Зарегистрироваться</button> 
        </form>
        <div class="member">
            Уже есть аккаунт? <a href="./login.html">
                Авторизироваться здесь
            </a>
        </div>
    </div>
</body>
</html>