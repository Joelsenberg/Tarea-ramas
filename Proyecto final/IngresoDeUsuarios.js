var formulario = document.getElementById("login-container");
        var intentosFallidos = 0;
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const usuarioAdmin = [
                {username: "Brayan", password: "1232"},
                {username: "Nicole", password: "1233"},
                {username: "Rodrigo", password: "1234"},
                {username: "Federico", password:"1235"},
                {username: "Fredy", password: "1236"},
                {username: "Laura", password: "1237"}

            ];
            var datos = new FormData(document.getElementById("formulario"));
            const nombre = datos.get("username");
            const contraseña = datos.get("password");
            const usuarioValido = usuarioAdmin.find(user => user.username === nombre && user.password === contraseña);
            if (usuarioValido) {  // Inicio de sesión exitoso, redirigir a la página del formulario de usuarios
                localStorage.setItem("username", nombre);
                localStorage.setItem("password", contraseña);
                window.location.href = 'http://127.0.0.1:5500/Proyecto%20final/Tabla%20de%20usuarios.html';
            } else {
                intentosFallidos++;  // Alerta y cierre de la aplicación
                if (intentosFallidos >= 3) {
                    alert('Has introducido datos incorrectos tres veces. La aplicación se cerrará.');
                        window.close(); // Esta función cerrará la ventana
                    };
                } 
            }
        );


    