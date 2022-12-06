function addCurrAssets(){
    const button = document.getElementById("add-curr-assets");
    button.style.display = "none";

    const entries = document.getElementById("box-curr-assets");
    entries.style.display = "flex";
}

function addInvest(){
    const button = document.getElementById("add-invest");
    button.style.display = "none";

    const entries = document.getElementById("box-invest");
    entries.style.display = "flex";
}

function addIntang(){
    const button = document.getElementById("add-intang");
    button.style.display = "none";

    const entries = document.getElementById("box-intang");
    entries.style.display = "flex";
}

function addCurrLiabs(){
    const button = document.getElementById("add-curr-liabs");
    button.style.display = "none";

    const entries = document.getElementById("box-curr-liabs");
    entries.style.display = "flex";
}

function addLTLiabs(){
    const button = document.getElementById("add-lt-liabs");
    button.style.display = "none";

    const entries = document.getElementById("box-lt-liabs");
    entries.style.display = "flex";
}

function calcPos(){

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    let currAssetsTotal = 0;
    const currAssets = document.querySelectorAll('[id*="input-curr-assets"]');
    currAssets.forEach(entry =>{
        currAssetsTotal += Number(entry.value);
    })
    document.getElementById("sub-curr-assets").innerHTML = formatter.format(currAssetsTotal);

    let investTotal = 0;
    const invest = document.querySelectorAll('[id*="input-invest"]');
    invest.forEach(entry =>{
        investTotal += Number(entry.value);
    })
    document.getElementById("sub-invest").innerHTML = formatter.format(investTotal);

    let intangTotal = 0;
    const intang = document.querySelectorAll('[id*="input-intang"]');
    intang.forEach(entry =>{
        intangTotal += Number(entry.value);
    })
    document.getElementById("sub-intang").innerHTML = formatter.format(intangTotal);

    let currLiabsTotal = 0;
    const currLiabs = document.querySelectorAll('[id*="input-curr-liabs"]');
    currLiabs.forEach(entry =>{
        currLiabsTotal += Number(entry.value);
    })
    document.getElementById("sub-curr-liabs").innerHTML = formatter.format(currLiabsTotal);

    let ltLiabsTotal = 0;
    const ltLiabs = document.querySelectorAll('[id*="input-lt-liabs"]');
    ltLiabs.forEach(entry =>{
        ltLiabsTotal += Number(entry.value);
    })
    document.getElementById("sub-lt-liabs").innerHTML = formatter.format(ltLiabsTotal);
    
    document.getElementById("sub-tot-assets").innerHTML = formatter.format(currAssetsTotal + investTotal + intangTotal);
 
    document.getElementById("sub-tot-liabs").innerHTML = formatter.format(currLiabsTotal + ltLiabsTotal);
    
    document.getElementById("sub-pos").innerHTML = formatter.format((currAssetsTotal + investTotal + intangTotal) - (currLiabsTotal + ltLiabsTotal));
}

function enableCalcButton(){
    let inputs = document.getElementsByTagName("input");
    let btn = document.getElementById("calc-pos");

    let isValid = true;

    for (var i=0; i<inputs.length; i++){
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null){
            isValid = false;
            break;
        }
    }
    
    btn.disabled = !isValid;
}
