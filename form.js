var sel = document.getElementById("ano");
var opt = document.createElement("option");


for(let i = 2022; i>=1900; i--){
    var sel = document.getElementById("ano");
    var opt = document.createElement("option");

    sel.appendChild(opt);
    opt.textContent = i;
    
}
var dias = document.getElementById("dias")
var listaDias = document.createElement("option")

for(let j = 1; j<=31 ; j++){
    var dias = document.getElementById("dias");
    var listaDias = document.createElement("option");

    dias.appendChild(listaDias);
    listaDias.textContent = j;
}

function displayChange(){
    if(document.getElementById("personalizado").checked){
        document.getElementById("prename").style.display="block";
        document.getElementById("generoinput").style.display="block";
        
    }
    else if(document.getElementById("ativo").checked){
        document.getElementById("prename").style.display="none";
        document.getElementById("generoinput").style.display="none";
        
    }
    else if(document.getElementById("ativom").checked){
        document.getElementById("prename").style.display="none";
        document.getElementById("generoinput").style.display="none";

    }
}