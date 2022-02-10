const sep = (param) => {
    console.log(`******************************* ${param} ********************************`)
}

/* el contenido de el array se puede modificar aunque esté definido como const. 
Como el array es un objeto, la variable siempre apunta al mismo objeto */
sep('Array')

const numbers = [1, -1, 3]

/* FUNCIONES PROPIAS JAVASCRIPT https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array */

numbers.push(5) // añade en la ultima posicion un valor pasado por parametro

console.log(`La longitud es ${numbers.length}`) // Se imprime 4 con templates literals `` 
console.log(`La segunda posición del array es ${numbers[1]}`) // -1 es impreso

numbers.pop() //elimina el ultimo valor

numbers.shift() // elimina la primera posicion de un array

numbers.unshift(7) // añade a la primera posición el valor pasado por parametro

sep('ForEach')

console.log('El valor del array en cada posición es: ')
numbers.forEach(num => {
  console.log (num) // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
})

sep('ForEach con varios parametros') //value, index, array

/* forEach llama a la función para cada uno de los elementos del array, siempre pasando el elemento
 individual como parámetro. La función como parámetro de forEach también puede recibir otros parámetros. */
 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

numbers.forEach((num, index) => { 
    console.log(`Posicion ${index} : valor ${num}`)
})
numbers.forEach((num, index, array) => {
    console.log(`Posicion ${index} : valor ${num} ${array}`)
})

sep('Concat')
/* Es preferible usar el método concat, que NO agrega el elemento al array,
 pero crea un nuevo array en la que se incluyen el contenido del array anterior y el nuevo elemento. */

 const numbers2 = numbers.concat(5)

 console.log(numbers)  // [1, -1, 3] es impreso
 console.log(numbers2) // [1, -1, 3, 5] es impreso


/* Map */
sep('Map')
const m1 = numbers.map(value => value * 2) 
console.log(m1) 

//Map también puede transformar el array en algo completamente diferente:

const m2 = numbers.map(value => '<li>' + value + '</li>')
console.log(m2)  


/* Destructuring assignment */
sep('Destructuring assignment')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const t = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 es impreso
console.log(rest)

/*Objetos */
sep('Objetos')

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 es impreso

sep('También puedes agregar propiedades a un objeto usando:')

console.log(`object1.address = 'Helsinki'`) // notación de puntos
console.log(`object1['secret number'] = 12341`)// corchetes

sep('Funciones -> arrow functions')

console.log(`
const sum = (p1, p2) => {  
    return p1 + p2 
} `)
console.log(`
const result = sum(1, 5)
console.log (result)
`)

const sum = (p1, p2) => { 
    return p1 + p2 
}

const result = sum(1, 5)
console.log (`El resultado de la suma es ${result}`)

console.log('Si hay un solo parámetro, podemos excluir los paréntesis de la definición:')
console.log(
    `const square = p => {
    console.log(p)
    return p * p
}`)

console.log('Si la función solo devuelve el resultado de su única expresión')
console.log( `const square = p => p * p`)

console.log('Hay dos formas de hacer referencia a la función')
console.log(`
function product(a, b) {
    return a * b
  }
  
  const result = product(2, 6)
`)

function product(a, b) {
    return a * b
  }
  
const res = product(2, 6)
console.log(res)

console.log(`La otra forma de definir la función es usando una expresión de función`)
console.log(`
const average = function(a, b) {
    return (a + b) / 2
  }
  
  const result = average(2, 5)
`)

const average = function(a, b) {
    return (a + b) / 2
  }
  
const res2 = average(2, 5)
console.log(res2)
