const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

// console.log(user.friends.address.complement) //Fazendo dessa forma, o erro acontece pois não é possivel
                                                // ler propriedades que não existem
// para que esse erro não ocorra podemos utilizar o encadiador opcional, dessa forma:
console.log(user?.friends?.address?.complement) // uma vez que utilizar a interrogação faz com que o JS valide
                                                // se aquilo que ele está lendo é null ou undefined antes de 
                                                // tentar ler a propriedade