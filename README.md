# Calculadora Web

Esta é uma calculadora simples desenvolvida com as tecnologias web padrão: HTML, CSS e JavaScript. Ela permite que os usuários realizem cálculos matemáticos de maneira intuitiva e eficiente diretamente em seus navegadores.


![image](https://github.com/joaovpinheirop/calculadora/assets/56880604/85e27b90-eaf9-46f2-ac15-a55cde48fa1c)
## Operações da Calculadora

A calculadora utiliza várias funções para realizar diferentes operações matemáticas. Abaixo estão as implementações das principais operações:

### Adição

A função `sum(x, y)` realiza a operação de adição, somando dois números `x` e `y` e retornando o resultado.

```javascript
const sum = (x, y) => {
  return x + y;
}
````
### Subtração
A função `subtract(x, y)` realiza a operação de subtração, subtraindo o número `y` do número `x` e retornando o resultado.
```javascript
const subtract = (x, y) => {
  return x - y;
}
````
### Multiplicação
A função `multiply(x, y)` realiza a operação de multiplicação, multiplicando os números `x` e `y` e retornando o resultado.
```javascript
const multiply = (x, y) => {
  return x * y;
}
````
### Divisão
A função `divide(x, y)` realiza a operação de divisão, dividindo o número `x` pelo número `y` e retornando o resultado.
```javascript
const divide = (x, y) => {
  return x / y;
}
````

### Porcentagem
A função `percentage(x, y)` calcula a porcentagem de um número `x` em relação a um número `y` e retorna o resultado.

````javascript
const percentage = (x, y) => {
  return (y * x) / 100;
}
````


## Função de Cálculo

A função `calc(x, operation, y)` é responsável por realizar cálculos matemáticos com base em duas entradas, `x` e `y`, usando a operação especificada. Esta função é usada internamente pela calculadora para executar as operações matemáticas desejadas.

### Parâmetros

- `x`: O primeiro número a ser usado no cálculo.
- `operation`: A função de operação matemática a ser aplicada (por exemplo, `sum`, `subtract`, `multiply`, `divide`, `percentage`).
- `y`: O segundo número a ser usado no cálculo.

### Exemplo de Uso

```javascript
const resultadoSoma = calc(5, sum, 3); // Realiza uma soma: 5 + 3
console.log(resultadoSoma); // Saída: 8

const resultadoSubtracao = calc(10, subtract, 4); // Realiza uma subtração: 10 - 4
console.log(resultadoSubtracao); // Saída: 6

const resultadoMultiplicacao = calc(6, multiply, 2); // Realiza uma multiplicação: 6 * 2
console.log(resultadoMultiplicacao); // Saída: 12

const resultadoDivisao = calc(15, divide, 3); // Realiza uma divisão: 15 / 3
console.log(resultadoDivisao); // Saída: 5

const resultadoPorcentagem = calc(20, percentage, 25); // Calcula a porcentagem: (25 * 20) / 100
console.log(resultadoPorcentagem); // Saída: 5
```




