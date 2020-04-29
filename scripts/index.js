let answer = '0',
  numberEntered = [],
  stored_nbrs = [];


let input = document.getElementById("number"),
  ans = document.getElementById("ans"),
  c = document.getElementById("c"),
  del = document.getElementById("del"),
  divide = document.getElementById("divide"),
  memory = document.querySelector("#memory"),

  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  multiply = document.getElementById("multiply"),
  plusorminus = document.getElementById("plusorminus"),

  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  subtract = document.getElementById("subtract"),
  sqrt = document.getElementById("sqrt"),

  one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  add = document.getElementById("add"),
  reciprocal = document.getElementById("reciprocal"),

  left_paranth = document.getElementById("left_paranth"),
  right_paranth = document.getElementById("right_paranth"),
  zero = document.querySelector("#zero"),
  equals = document.getElementById("equals"),
  dot = document.getElementById("dot");

// let container = document.getElementsByClassName("container");

let container = document.querySelector(".container"),
  container2 = document.querySelector(".container2"),
  btn = document.querySelector(".btn");

function calculate(exp) {
  exp = exp.join('');
  exp = exp.replace("×", "*");
  exp = exp.replace("÷", "/");
  exp = exp.replace("√", "Math.sqrt")
  answer = eval(exp);
  console.log(answer);
  return String(answer);


  // console.log(add.textContent);
  // console.log(input.value);
  // // console.log(input.value == '');
  // subSign = sub.textContent === "+" ? 'Yes' : 'No';
  // console.log(subSign);

  // // Nobody is allowed to press on any of the signs below when the
  // // input box is empty

}


function insert(e) {
  if (e.type === 'keypress') {
    // Make sure that the correct key is pressed.
    switch (e.key) {
        // 0 is pressed
      case "0":
        btn.classList.add("btn:active");
        numberEntered.push('0');
        input.innerHTML = numberEntered.join('');
        break;
      case "1":
        numberEntered.push('1');
        input.innerHTML = numberEntered.join('');
        break;
      case "2":
        numberEntered.push('2');
        input.innerHTML = numberEntered.join('');
        break;
      case "3":
        numberEntered.push('3');
        input.innerHTML = numberEntered.join('');
        break;
      case "4":
        numberEntered.push('4');
        input.innerHTML = numberEntered.join('');
        break;
      case "5":
        numberEntered.push('5');
        input.innerHTML = numberEntered.join('');
        break;
      case "6":
        numberEntered.push('6');
        input.innerHTML = numberEntered.join('');
        break;
      case "7":
        numberEntered.push('7');
        input.innerHTML = numberEntered.join('');
        break;
      case "8":
        numberEntered.push('8');
        input.innerHTML = numberEntered.join('');
        break;
      case "9":
        numberEntered.push('9');
        input.innerHTML = numberEntered.join('');
        break;
        // Operations
      case "+":
        numberEntered.push('+');
        input.innerHTML = numberEntered.join('');
        break;
      case "-":
        numberEntered.push('-');
        input.innerHTML = numberEntered.join('');
        break;
      case "*":
        numberEntered.push('×');
        input.innerHTML = numberEntered.join('');
        break;
      case "/":
        numberEntered.push('÷');
        input.innerHTML = numberEntered.join('');
        break;
        // Symbols
      case ".":
        numberEntered.push('.');
        input.innerHTML = numberEntered.join('');
        break;
      case "(":
        numberEntered.push('(');
        input.innerHTML = numberEntered.join('');
        break;
      case ")":
        numberEntered.push(')');
        input.innerHTML = numberEntered.join('');
        break;
      case "Enter":
        input.innerHTML = calculate(numberEntered);
        break;
      default:
        // numberEntered.push('0');
        // numberEntered = parseInt(numberEntered);
        break;
    }
//     if (e.keyCode === 8) {
//         console.log("Done");
//         numberEntered.pop();
//         input.innerHTML = numberEntered.join('');
//     }
//       case "Del":
//         numberEntered = [];
//         input.innerHTML = numberEntered.join('');
//         break;
  input.innerHTML = numberEntered.join('');
  }

  if (e.type === 'click') {
    // console.log(String(e.toElement.id));
    switch(String(e.toElement.innerHTML)) {
      case "0":
        numberEntered.push('0');
        input.innerHTML = numberEntered.join('');
        break;
      case "1":
        numberEntered.push('1');
        input.innerHTML = numberEntered.join('');
        break;
      case "2":
        numberEntered.push('2');
        input.innerHTML = numberEntered.join('');
        break;
      case "3":
        numberEntered.push('3');
        input.innerHTML = numberEntered.join('');
        break;
      case "4":
        numberEntered.push('4');
        input.innerHTML = numberEntered.join('');
        break;
      case "5":
        numberEntered.push('5');
        input.innerHTML = numberEntered.join('');
        break;
      case "6":
        numberEntered.push('6');
        input.innerHTML = numberEntered.join('');
        break;
      case "7":
        numberEntered.push('7');
        input.innerHTML = numberEntered.join('');
        break;
      case "8":
        numberEntered.push('8');
        input.innerHTML = numberEntered.join('');
        break;
      case "9":
        numberEntered.push('9');
        input.innerHTML = numberEntered.join('');
        break;
        // Operations
      case "+":
        numberEntered.push('+');
        input.innerHTML = numberEntered.join('');
        break;
      case "-":
        numberEntered.push('-');
        input.innerHTML = numberEntered.join('');
        break;
      case "×":
        numberEntered.push('×');
        input.innerHTML = numberEntered.join('');
        break;
      case "÷":
        numberEntered.push('÷');
        input.innerHTML = numberEntered.join('');
        break;
        // Symbols
      case ".":
        if (numberEntered[numberEntered.length] === '.'){
            // numberEntered.push('');
            } else {
            numberEntered.push('.');
            }
        input.innerHTML = numberEntered.join('');
        break;
      case "(":
        numberEntered.push('(');
        input.innerHTML = numberEntered.join('');
        break;
      case ")":
        numberEntered.push(')');
        input.innerHTML = numberEntered.join('');
        break;
      case "±":
        numberEntered.unshift('-');
        input.innerHTML = numberEntered.join('');
        break;
      case "1/x":
        numberEntered.unshift('1÷(');
        numberEntered.push(')');
        input.innerHTML = numberEntered.join('');
        break;
      case "=":
        input.innerHTML = calculate(numberEntered);
            console.log(input.textContent);
        // numberEntered = '';
        // input.innerHTML = numberEntered;
        break;
      case "ANS":
        numberEntered.push(String(answer));
        input.innerHTML = numberEntered.join('');
        break;
      case "DEL":
        numberEntered.pop();
        input.innerHTML = numberEntered.join('');
        break;
      case "C":
        numberEntered = [];
        input.innerHTML = numberEntered.join('');
        break;
      case "√":
        numberEntered.unshift('√(');
        numberEntered.push(')');
        input.innerHTML = numberEntered.join('');
        // input.innerHTML = calculate(numberEntered);
        break;
      case "M":
        stored_nbrs.push(answer);
        container.style.width = "70%";
        container.style.display = "flex";
        // container.style.text-align = "center";
        container2.classList.add("h2");
        container2.classList.add("memory");
        container2.innerHTML = `<h2>MEMORY</h2>`;
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${stored_nbrs[stored_nbrs.length - 1]}`));
        memory.appendChild(li);
        container2.appendChild(memory);
        console.log("done");
        break;
      default:
        break;
    }
// input.innerHTML = numberEntered.join('');
  }
}

window.addEventListener("keypress", insert);
window.addEventListener("click", insert);


{
//     ANS.addEventListener("click", insert);


//     c.addEventListener("click", insert);

//     del.addEventListener("click", insert);

//     divide.addEventListener("click", insert);

//     memory.addEventListener("click", insert);

//     seven.addEventListener("click", insert);

//     eight.addEventListener("click", insert);

//     nine.addEventListener("click", insert);

//     multiply.addEventListener("click", insert);

//     plusorminus.addEventListener("click", insert);

//     four.addEventListener("click", insert);

//     five.addEventListener("click", insert);

//     six.addEventListener("click", insert);

//     subtract.addEventListener("click", insert);

//     sqrt.addEventListener("click", insert);

//     one.addEventListener("click", insert);

//     two.addEventListener("click", insert);

//     three.addEventListener("click", insert);

//     add.addEventListener("click", insert);

//     reciprocal.addEventListener("click", insert);

//     left_paranth.addEventListener("click", insert);

//     right_paranth.addEventListener("click", insert);

//     zero.addEventListener("click", insert);

//     equals.addEventListener("click", insert);

//     dot.addEventListener("click", insert);
}

