var cadastro = [
    {
      nome: "Carol",
      idade: 29,
      telefone: "123-456-7890",
      amigos: ["Maria", "Carlos", "Ana", "Pedro"]
    },
    {
      nome: "Rafael",
      idade: 26,
      telefone: "987-654-3210",
      amigos: ["Francisco", "Carlos", "Ana", "Rafael"]
    },
    {
      nome: "Victor",
      idade: 28,
      telefone: "555-555-5555",
      amigos: ["Yudo", "Maria", "Ana", "Laura"]
    },
    {
      nome: "Ester",
      idade: 26,
      telefone: "777-777-7777",
      amigos: ["Leonardo", "Maria", "Carlos", "Pedro"]
    },
    {
      nome: "Joao",
      idade: 32,
      telefone: "333-333-3333",
      amigos: ["Jussara", "Maria", "Carlos", "Lucas"]
    }
  ];

cadastro.forEach(function(pessoa){
    console.log(pessoa.amigos[0])
})