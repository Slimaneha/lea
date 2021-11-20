// Annéee 


var un = 2021
var deux = 2022
var trois = 2023





// moi 


var moi2111 = "Novembre 2021"
var moi2112 = "Décembre 2021"




// fuction annéee
selectElmtchoixStart = document.getElementById("choixStrart");



// categorie 

var annnee = document.getElementById("annee")
var moiUn = document.getElementById("moi2021")
selectElmtchoixStart = document.getElementById("choixStrart");
choix = 0

function startUn() {
    var choix = textselectionne = selectElmtchoixStart.options[selectElmtchoixStart.selectedIndex].text;

    if (choix == 2021) {
        annnee.style.display="none"
        document.getElementById("annee").style.display = "none"
        document.getElementById("moi21").style.display = "flex"


    }
    else if (choix == 2022) {
        document.getElementById("moi22").style.display = "flex"
        annnee.style.display="none"


    }

}


selectElmtchoixstartdeux = document.getElementById("choixstrartdeux");

function startdeux() {
    var choixdeux = textselectionne = selectElmtchoixstartdeux.options[selectElmtchoixstartdeux.selectedIndex].text;


    if (choixdeux == moi2111 ) {
        
        document.getElementById("nov21").style.display="block"
        document.getElementById("moi21").style.display = "none"



    }

    else if (choixdeux == moi2112)
    {
          document.getElementById("nov21").style.display="none"
          document.getElementById("dec21").style.display="block"
        
    }

   

    
}








 
 
 