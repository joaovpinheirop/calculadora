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
Copy code
const percentage = (x, y) => {
  return (y * x) / 100;
}
````
