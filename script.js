document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let birthdate = document.getElementById("birthdate").value;
    let genre = document.querySelector('input[name="genre"]:checked');

    if (!nom || !prenom || !email || !password || !confirmPassword || !birthdate || !genre) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas ⚠️");
        return;
    }

    // email avec regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Adresse email invalide ❗❗");
        return;
    }

    alert("Inscription réussie Avec succées 🤗 "+nom + " " + prenom);
    
    console.log("Nom :", nom + " " + prenom);
    console.log("Email :", email);
    console.log("Date de naissance :", birthdate);
    console.log("Genre :", genre.value);
});
