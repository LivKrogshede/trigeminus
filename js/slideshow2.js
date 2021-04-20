//Denne variable bruges til at holde styr på hvilket billede der skal vises
var imgCounter = 0; 

//Dette er et array, med stier til billederne
var images = [
    "pics/trigeminus0.png", 
    "pics/trigeminus1.png",
    "pics/trigeminus2.png", 
    "pics/trigeminus3.png", 
    "pics/trigeminus4.png"
];

//Denne funktion bliver kaldt når jeg trykker på min "næste" knap.
function nextImg(){
    console.log("next");
    
    //console.log(imgCounter);
    //console.log("lenght : "+images.length);

    //Hvis min imgCounter er mindre end længden -1 : dvs at så der er plads til at + 1, uden at ryge ud af vores array
    if (imgCounter < images.length -1){
        
        //Så lægger vi +1 til vores imageCounter    
        imgCounter = imgCounter + 1;
        
        //Så finder jeg min "forrige" knap og fjerner klassen "hidden", således at knappen bliver synlig
        console.log("show prev button again");
        document.getElementById("prev").classList.remove("hidden");
        
        //Så kalder jeg vores funktion, med parametret variablen imgCounter, sådan så den ved hvilket billede den skal vise 
        showImg(imgCounter);
    }

    //Når vi ikke længere kan sige +1 til imageCounter, uden at komme ud af vores array
    else {
        //Så finder vi "Næste" knappens ID og tilføjer klassen hidden, således den forsvinder
       console.log("hide next button");
       document.getElementById("next").classList.add("hidden");
    }
}

//Denne funktion bliver kaldt, når jeg trykker på min "forrige" knap
function prevImg(){
    console.log("prev");
    
    //hvis min imageCounter større end eller lig med 1 : dvs at vi kan trække 1 fra, uden at ryge ud af vores array
    if (imgCounter >= 1) {
        
        //Så trææker vi -1 til vores imageCounter 
        imgCounter = imgCounter - 1;
        //console.log(imgCounter);
        
        //Så finder vi knappen "næste" via vores ID, og fjerner klassen hidden, så vores næste knap bliver synlig, og det sker når vi f.eks. trykker på tilbage knappen
        console.log("show next button");
        document.getElementById("next").classList.remove("hidden");
        
        //Så kalder jeg vores funktion, med parametret variablen imgCounter, sådan så den ved hvilket billede den skal vise
        showImg(imgCounter);
    }

    //Når vi ikke længere kan trække -1 fra imageCounter uden at komme ud af arrayet
    else {
        
        //Så finder vi "Forrige" knappen via dens ID, og tilføjer klassen hidden, så forrigeknappen forsvinder, når vi er tilbage ved starten
        document.getElementById("prev").classList.add("hidden");
    }

}

//Denne funktion viser et bestemt billede, baseret på det vedhæftede imageIndex
function showImg(imgIndex){
    //console.log("show image");
    //console.log(imgIndex);
    //console.log(images[imgIndex]);

    //Vi finder vores imgTag (som indeholder billedet) og ændrer kilden (som er en sti), til det billede der skal vises
    //Stien trækker vi ud af vores array, baseret på imgIndex (der hvor vi er nået til)
    document.getElementById("imgTag").src = images[imgIndex];

}