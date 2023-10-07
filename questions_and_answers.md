<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>***Explanation:*** There are two types of scope in JavaScript which are the local scope and global scope. When a value is assign directly to a variable without declaration it becomes a global variable which is a property of the **window** object.
<br />
Here `greeting` is declared but after that an empty object (`{}`) as value is assigned to `greetign` variable that is not declared and then that variable consoled. As the variable is not declared, it becomes a property of the window object. That is why we get empty object (`{}`) in the consol without any error.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>***Explanation:*** The `+` operator in JavaScript works in a way that if both side value/variable are **number** type (integer/float) it gives the **sum** of those numbers. But if any/both of the value/variable are string type the `+` operator converts both value/variable in string type and perform concatenation operation. Then it gives the combine result of strings.
<br />
In the above code `1` (value of `a` inside function) is in number format but `"2"` (value of `b` inside function) is in string format. The `+` operator perform concatenation operation by converting value of `a` to string and return combine result of strings which is `"12"`.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>***Explanation:*** Sometimes JavaScript holds the reference for non-primitive data type.
<br />
Here in `info` variable, a new object is declared with property `favoriteFood` by taking value from `food` variable and index of `0`. But for `favoriteFood` property no reference will be added to the `info` object. **That is why no change will occur to `food` array by performing `info.favoriteFood = "🍝";`.** Only the `info` object variable will be affected by this change.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>***Explanation:*** When a variable is declared, the value of that variable is `undefined` by default. It gets updated when a value is assigned. This rule is same for function parameters. If no default value is assigned, the value of parameter is `undefined` by default.
<br />
Here `sayHi()` is expecting a value that will be assigned to `name` variable. But while calling the function no **argument** is passed to the function. As there is no default value is assigned to `name` parameter variable, the default value of `name` is `undefined` and performing concatenation using **template literals** `undefined` as **string** is assigned while dynamically setting the string. This is why the result is: `Hi there, undefined`.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>***Explanation:*** There are some **falsy** value is JavaScript. The number `0` is one of them.
<br />
`forEach` loop iterate on each value of an array. Inside `forEach` a condition is checked using `if` and after full-filling the condition `count` variable value is increased by `1`. The `nums` array, for each value, condition is true except the **falsy** value `0`. That is why for `num = 0` condition is false and `count` variable value is not increased then. But for other values `1`, `2` and `3` the condition is true and value of `count` is increased by `1`. After the loop, condition is true for **three** times and value of `count` is increased by `3`, the output of the code.</i>

</p>
</details>
