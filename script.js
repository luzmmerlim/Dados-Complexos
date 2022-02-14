
//// Crie um objeto que receba ao menos três propriedades sobre você.

let sobre ={
    nome: "Luzia",
    idade: 19,
    cabelo: "loiro"
  }
  console.log(sobre)
  
  //// Adicione uma nova propriedade sem alterar seu objeto inicial.
  sobre.cidade="rio de janeiro"
  console.log(sobre)

//// Remova uma propriedade desse objeto.

delete sobre.cabelo;
console.log(sobre)
////Mostre no console todas as propriedades desse objeto.

//// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

let cadastro =[
    {
        nome: "Luzia",
        idade: 19,
        telefone: 21967749380,
        amigos: ["João", "Helison", "Leticia", "Karen"]
    },
    {
        nome: "Mariana",
        idade: 19,
        telefone: 21974224357,
        amigos: ["Almeida", "Luma", "Izabel", "Rayane"]
    },
    {
        nome: "Marina",
        idade: 22,
        telefone: 21974223387,
        amigos: ["Gisele", "Gabriele", "Cris", "Paula"]   
        
    },
    {
        nome: "Breno",
        idade: 21,
        telefone: 21974580363,
        amigos: ["Jonas", "Guilherme", "Josué", "Sérgio"]    
    },
    {
        nome: "Rodrigo",
        idade: 25,
        telefone: 21974580468,
        amigos: ["Alex", "Rafaela", "Ari", "Edna"] 
    }
]

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[1])

