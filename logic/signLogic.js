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

    document.getElementById("totalWeight").innerHTML = Math.round(calculateWeight);
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
    if (strUser2 == ".20GA"){
        calculateWeight = .36 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 1.73 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 2.7 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 3.42 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 5.4 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 7.9 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 3.75 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 6.75 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 1.5 * numberOfSigns;
    } 
}

function signs30X120 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.15 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 2.3 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 3.63 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 4.6 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 7.2 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 10.92 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 5 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 9 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 2 * numberOfSigns;
    } 
}

function signs45X45 (){
    if (strUser2 == ".20GA"){
        calculateWeight = .65 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 1.3 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 2.03 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 2.57 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 4.05 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 5.96 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 2.81 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 5.06 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 1.13 * numberOfSigns;
    } 
}

function signs45X60 (){
    if (strUser2 == ".20GA"){
        calculateWeight = .85 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 1.73 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 2.7 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 3.42 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 5.4 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 7.9 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 3.75 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 6.75 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 1.5 * numberOfSigns;
    } 
}

function signs45X75 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.08 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 2.16 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 3.38 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 4.28 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 6.75 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 9.94 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 4.69 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 8.44 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 1.88 * numberOfSigns;
    } 
}

function signs45X90 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.3 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 2.59 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 4.05 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 5.14 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 8.1 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 11.93 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 5.63 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 10.13 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 2.25 * numberOfSigns;
    } 
}

function signs60X60 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.15 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 2.3 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 3.6 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 5.64 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 7.2 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 10.6 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 5 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 9 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 2 * numberOfSigns;
    } 
}

function signs60X75 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.44 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 2.88 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 4.5 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 5.7 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 9 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 13.25 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 6.25 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 11.25 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 2.5 * numberOfSigns;
    } 
}

function signs60X90 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.73 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 3.46 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 5.41 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 6.85 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 10.8 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 15.9 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 7.5 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 13.5 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 3 * numberOfSigns;
    } 
}

function signs75X75 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 1.9 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 3.6 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 5.63 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 8.7 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 11.25 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 16.56 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 7.81 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 14.06 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 3.13 * numberOfSigns;
    } 
}

function signs75X90 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 2.16 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 4.32 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 6.3 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 8.93 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 13.5 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 19.04 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 9.38 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 16.88 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 3.75 * numberOfSigns;
    } 
}

function signs90X90 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 2.59 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 5.18 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 8.11 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 10.37 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 16.2 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 23.35 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 11.25 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 20.25 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 4.5 * numberOfSigns;
    } 
}
function signs90X120 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 3.46 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 6.91 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 10.31 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 13.63 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 21.5 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 31.8 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 15 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 27 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 6 * numberOfSigns;
    } 
}

function signs120X120 (){
    if (strUser2 == ".20GA"){
        calculateWeight = 4.61 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = 9.22 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 14.14 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 18.26 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 28.8 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 42.4 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 20 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 36 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = 8 * numberOfSigns;
    } 
}

function newSign () {
    var f = document.createElement("form");
    f.setAttribute('onsubmit','preventDefault()');
    f.setAttribute('autocomplete','off');

    var i = document.createElement("select");
    i.setAttribute('name','signs');
    i.setAttribute('id','signsSize');

    var size1 = document.createElement("option");
    size1.setAttribute('value','30X30');
    size1.setAttribute('label','30X30');

    var size2 = document.createElement("option");
    size2.setAttribute('value','30X45');
    size2.setAttribute('label','30X45');

    i.appendChild(size1);
    i.appendChild(size2);
    f.appendChild(i);

    
    document.body.appendChild(f);
}