function analyze() {
    var text = document.getElementById("text").value;
    var textLen = text.length;
    if(text[textLen-1] == " "){
        text = text.slice(0, textLen-1);
        textLen = text.length;
    }
    var textNoSpaces = text.replaceAll(" ", "");
    var textLenNoSpaces = textNoSpaces.length;

    var wordCount = text.split(" ").length;


    document.getElementById("wordCount").innerHTML = ("Word Count: " + wordCount);
    document.getElementById("letterCount").innerHTML = ("Letter Count: " + textLen);
    document.getElementById("spaceCount").innerHTML = ("Space Count: " + (textLen - textLenNoSpaces));
    

};

