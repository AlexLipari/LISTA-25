let Carros = []
class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    DistanciaEmSegundos(parametroDistancia) {

        let resultado = parametroDistancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}
let carroUm = new Carro()
carroUm.Nome = "Ferrari"
carroUm.Potencia = 500
carroUm.VelocidadeMaxima = 330
carroUm.Aceleracao = 3.0

Carros.push(carroUm)

let carroDois = new Carro()
carroDois.Nome = "Williams"
carroDois.Potencia = 520
carroDois.VelocidadeMaxima = 320
carroDois.Aceleracao = 2.8

Carros.push(carroDois)

let carroTres = new Carro()
carroTres.Nome = "Red Bull"
carroTres.Potencia = 510
carroTres.VelocidadeMaxima = 325
carroTres.Aceleracao = 2.8

Carros.push(carroDois)

class Corrida {
    NomePercurso
    Tipo
    Distancia
    Vencedor

    PrimeiroLugar() {
        let inquantoMenorTempo = Carros[0].DistanciaEmSegundos(this.Distancia)
        let vencedor
        Carros.forEach(x => {
            let tempo = x.DistanciaEmSegundos(this.Distancia)
            if (tempo < inquantoMenorTempo) {
                inquantoMenorTempo = tempo
                vencedor = x.Nome
            }
        })
        return vencedor
    }
    QualVencedor() {
        console.log(this.Vencedor)
    }
}
let corrida = new Corrida()
corrida.NomePercurso = "Monza Italia"
corrida.Tipo = "formula 1"
corrida.Distancia = 10000
corrida.Vencedor = corrida.PrimeiroLugar()
corrida.QualVencedor()