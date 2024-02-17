let nome
let altura
let peso
let imc
let resultadoImc



const calcularImc =  () => {
    nome = document.querySelector('#nome').value
    altura = document.querySelector('#altura').value
    peso = document.querySelector('#peso').value
    
    resultadoImc = document.querySelector('.res')
    
    if (nome == '' || altura == '' || peso == '') {
        resultadoImc.innerHTML = 'Preencha os campos acima, por favor'
    }
    else if (altura == 0 || peso == 0) {
        resultadoImc.innerHTML = 'preencha os campos com informaçoes certas'
    }
    else {
        imc = (peso / (altura * altura)).toFixed(2)

        if (imc < 18.5) {
            resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Esta a baixo do normal <br> <br> <br> procure um medico`
            // limpaCampo()
        }
        else if (imc == 18.5 || 24.9 >= imc) {
            resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Parabéns <br> <br> <br> O seu IMC está Normal`
    
        }
        else if (imc < 25.0 || 29.9 >= imc) {
            resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Esta no Sobrepeso <br> <br> <br> Cuide da sua saúde, faça academia`
        }
        else if (imc < 30.0 || 34.9 >= imc) {
            resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Esta na Obesidade de grau I <br> <br> <br> procure um medico, cuida-se muito`
        }
        else if (imc < 35.0 || 39.9 >= imc) {
            resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Esta na Obesidade  de grau II <br> <br> <br> procure um medico urgentimente`
        }
        else{
                resultadoImc.innerHTML = `Boas Vindas <strong>${nome}</strong> <br> O seu IMC é <strong>${imc}</strong>, Esta na SObesidade do grau III <br> <br> <br> sua saude está em um estado delicado`
 

        }
    
    }
}

const limpaCampo = () => {
    return 
    let nome = ''
    let altura = ''
    let peso = ''
}
// console.log(`Olá ${nome}, voce tem ${altura} de altura,  o teu peso é ${peso}`)