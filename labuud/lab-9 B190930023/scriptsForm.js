function newForm() {
    var date= new Date();
    document.getElementById("newfName").innerHTML = document.getElementById("LName").value;
    document.getElementById("newlName").innerHTML = document.getElementById("FName").value;
    document.getElementById("newEmail").innerHTML = document.getElementById("e-mail").value;
    document.getElementById("newPhone").innerHTML = document.getElementById("phone").value;
    if(document.getElementById("male").checked){
        document.getElementById("newGender").innerHTML ="Эрэгтэй";
    } else if(document.getElementById("female").checked){
        document.getElementById("newGender").innerHTML ="Эмэгтэй";
    }
    if(document.getElementById("item1").checked==true){
        document.getElementById("itemsgetter").innerHTML = "Бакалавр болон түүнэс дээш зэрэгт суралцдаг";
    }
    if(document.getElementById("item2").checked==true){
        document.getElementById("itemsgetter").innerHTML = "Ахлах сургуульд сурлцдаг";
    }
    if(document.getElementById("item3").checked==true){
        document.getElementById("itemsgetter").innerHTML = "Дунд сургуульд сурлцдаг";
    }
    if(document.getElementById("item4").checked==true){
        document.getElementById("itemsgetter").innerHTML = "Бага сургуульд сурлцдаг";
    }

    var e = document.getElementById("selection");
    var text = e.options[e.selectedIndex].text;
    document.getElementById("newSelected").innerHTML = text;

    document.getElementById("newAbout").innerHTML = document.getElementById("about").value;
}