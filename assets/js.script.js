let nome
let altura
let peso
let imc

const calcularImc =  () => {
    nome = document.querySelector('#nome').value
    altura = document.querySelector('#altura').value
    peso = document.querySelector('#peso').value
    
    
    if (nome == '' || altura == '' || peso == '') {
        console.log('Preencha os campos acima, por favor')
    }
    else if (altura == 0 || peso == 0) {
        console.log('preencha os campos com informaçoes certas')
    }
    else {
        imc = (peso / (altura * altura)).toFixed(2)

        if (imc < 18.5) {
            console.log(`O seu IMC é ${imc}, Esta a baixo do normal, procure um medico`)
            limpaCampo()
        }
        else if (imc == 18.5 || 24.9 >= imc) {
            console.log(`O seu IMC é ${imc}, Parabés seu peso esta normal`)
            limpaCampo()
        }
        else if (imc < 25.0 || 29.9 >= imc) {
            console.log(`O seu IMC é ${imc}, Esta no Sobrepeso`)
            limpaCampo()
        }
        else if (imc < 30.0 || 34.9 >= imc) {
            console.log(`O seu IMC é ${imc}, Esta no Obesidade grau I, cuide mais da sua saude`)
            limpaCampo()
        }
        else if (imc < 35.0 || 39.9 >= imc) {
            console.log(`O seu IMC é ${imc}, Esta no Obesidade grau II, sua saúde pode esta em perigo`)
        }
        else{
            // console.log(`O teu imc é ${imc}`)
            if (imc > 40.0) {
                console.log(`O seu IMC é ${imc}, Esta no SObesidade grau III, sua saude está em um estado delicado`)
            }

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