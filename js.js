function botaõAtivo(valor){


    let numero = valor

    switch(numero){
        case '': document.getElementById('resultado').value = ''
        break
    
        case '/': document.getElementById('resultado').value += numero
        break
    
        case '*': document.getElementById('resultado').value += numero
        break
    
        case '-': document.getElementById('resultado').value += numero
        break
        
        case '+': document.getElementById('resultado').value += numero
        break
    
        case '=': let resultado = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = resultado
        break
    
        case '.': document.getElementById('resultado').value += numero
        break
    
        default: 
        document.getElementById('resultado').value += numero
    }

}

