const a = 0 // JS entende isso como false, caso esse valor entre como uma comparação logica

const b = null // o JS também entendi isso como falso

const c = 25

const d = 4

console.log(a || b || c) // utilizando esse operador || o que vai acontece é que o JS so vai imprimir o primeiro
                         // valor que não for possivel de transformar em falso
                         // ou seja esse console log vai retornar o valor de c

console.log(a || b || d || c) // ja nesse caso ele vai retornar apenas o d, pois acontece um curto circuito
                              // isso faz com que ele retorne so o primeiro valor verdadeiro

// porem existe uma forma de incluir o 0, e o false, e para isso é nessesario utlizar a coalecência nula

console.log(a ?? b ?? c ?? d) // nesse caso o retorno será 0

const f = false

console.log(f ?? a ?? b ?? c ?? d) // e aqui vai retornar false

// também podemos usar a coalecência nula para atribuir um valor padrão, por exemplo

let e = b ?? 12

console.log(e) // como o b é null ele vai retornar 12