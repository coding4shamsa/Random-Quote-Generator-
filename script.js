function change(){
    var qoutes = {
        "- Maxime Lagacé" : '"You can totally do this"',
        "- Robert Frost": '"Freedom lies in being bold"',
        "- Martin Luther King Jr." : '"From every mountainside, let freedom ring."',

        

    };
    var Author = Object.keys(qoutes);
    var authors = Author[Math.floor(Math.random() * Author.length)];

    var qoute = qoutes[authors];

    document.getElementById("qoute").innerHTML = qoute;
    document.getElementById("Author").innerHTML = Author;
}