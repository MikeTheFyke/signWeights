var calculateWeight = 0;
var signsSizes;
var signsType;
var strUser;
var strUser2;


function weightCalculator () {
    signsSize = document.getElementById("signsSize");
    signsType = document.getElementById("signsType");
    numberOfSigns = document.getElementById("signsNumberInput").value;

    strUser = signsSize.options[signsSize.selectedIndex].value;
    strUser2 = signsType.options[signsType.selectedIndex].value;

    if (strUser = "30X30"){
        signs30X30();
    }

    if (strUser = "30X45"){
        signs30X45 ();
    }

    if (strUser = "30X60"){
        signs30X60 ();
    }

    if (strUser = "30X90"){
        signs30X90 ();
    }

    if (strUser = "30X120"){
        signs30X120 ();
    }

    if (strUser = "45X45"){
        signs45X45 ();
    }

    if (strUser = "45X60"){
        signs45X60 ();
    }

    if (strUser = "45X75"){
        signs45X75 ();
    }

    if (strUser = "45X90"){
        signs45X90 ();
    }

    if (strUser = "60X60"){
        signs60X60 ();
    }

    if (strUser = "60X75"){
        signs60X75 ();
    }

    if (strUser = "60X90"){
        signs60X90 ();
    }

    if (strUser = "75X75"){
        signs75X75 ();
    }

    if (strUser = "75X90"){
        signs75X90 ();
    }

    if (strUser = "90X90"){
        signs90X90 ();
    }

    if (strUser = "90X120"){
        signs90X120 ();
    }

    if (strUser = "120X120"){
        signs120X120 ();
    }

    document.getElementById("totalWeight").innerHTML = calculateWeight;
}

function signs30X30() {
    if (strUser2 == ".20GA"){
        calculateWeight = .29 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = .58 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = .901 * numberOfSigns;
    } 
    if (strUser2 == ".081GA"){
        calculateWeight = 1.41 * numberOfSigns;
    } 
    if (strUser2 == "1.25GA"){
        calculateWeight = 1.8 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 2.65 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 1.25 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 2.25 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = .75 * numberOfSigns;
    }    
}

function signs30X45 (){
    if (strUser2 == ".20GA"){
        calculateWeight = .43 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = .86 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 1.35 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 1.71 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 2.7 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 3.98 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 1.88 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 3.38 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = .75 * numberOfSigns;
    } 
}

function signs30X60 (){
    if (strUser2 == ".20GA"){
        calculateWeight = .58 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 1.15 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 1.8 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 2.26 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 3.6 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 5.3 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 2.5 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 4.5 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 1 * numberOfSigns;
    } 
}

function signs30X90 (){
    
}

function signs30X120 (){
    
}

function signs45X45 (){
    
}

function signs45X60 (){
    
}

function signs45X75 (){
    
}

function signs45X90 (){
    
}

function signs60X60 (){
    
}

function signs60X75 (){
    
}

function signs60X90 (){
    
}

function signs75X75 (){
    
}

function signs75X90 (){
    
}

function signs90X90 (){
    
}
function signs90X120 (){
    
}

function signs120X120 (){
    
}