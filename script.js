function showMessage() {
    alert(' Olá, está é uma interação com JavaScript!');
}

function trocarCor() {
    var trocar = document.getElementById("mundo").style.color
    document.body.style.backgroundColor = 'red';


    if(trocar === 'black') {
    document.getElementById("mundo").style.color = 'white' 
    } else{
        document.getElementById("mundo").style.color = 'black'
    }

}

