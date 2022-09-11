let container = document.querySelector(".container");
let button = document.querySelectorAll(".button input");
let para = document.querySelector(".quistion");

let grades = {
  q1: true,
  q2: true,
  q3: true,
  q4: true,
  q5: true
};

let quis1 = `<div class="card">
  <p class="quistion p1">
    What is the appropriate punctuation mark in the space : You have to sleep early -- to wake up early?
  </p>
  <form action="" method="get">
    <div class="radio">
      <div>
        <label for="a1">( ? )</label>
        <input type="radio" name="answer" id="a1" value="False" />
      </div>
      <div>
        <label for="a2">( , )</label>
        <input type="radio" name="answer" id="a2" value="Ture" />
      </div>
      <div>
        <label for="a3">( : )</label>
        <input type="radio" name="answer" id="a3" value="False" />
      </div>
      <div>
        <label for="a4">( . )</label>
        <input type="radio" name="answer" id="a4" value="False"/>
      </div>
    </div>
    <div class="button">
      <p id="ele">01:00</p>
      <input class="but1" type="button" value="Next" onclick="next()" />
    </div>
  </form>
</div>`;

let quis2 = `<div class="card">
  <p class="quistion q2" q2>
    Find the correct word by the following letters a v a d g e n t a ?
  </p>
  <form action="" method="get">
    <div class="radio">
      <div>
        <label for="a1">advantage</label>
        <input type="radio" name="answer" id="a1" value="True"/>
      </div>
      <div>
        <label for="a2">advaentag</label>
        <input type="radio" name="answer" id="a2" value="False"/>
      </div>
      <div>
        <label for="a3">edvantaga</label>
        <input type="radio" name="answer" id="a3" value="False"/>
      </div>
      <div>
        <label for="a4">agvantead</label>
        <input type="radio" name="answer" id="a4" value="False"/>
      </div>
    </div>
    <div class="button">
      <p id="ele">01:00</p>
      <input class="but2" type="button" value="Next" onclick="next()" />
    </div>
  </form>
</div>`;

let quis3 = `<div class="card">
  <p class="quistion" q3>
    Answer true or false : We can put a comma at the end of the sentence ?
  </p>
  <form action="" method="get">
    <div class="radio">
      <div>
        <label for="a1">False</label>
        <input type="radio" name="answer" id="a1" value="True"/>
      </div>
      <div>
        <label for="a2">True</label>
        <input type="radio" name="answer" id="a2" value="False"/>
      </div>
    </div>
    <div class="button">
      <p id="ele">01:00</p>
      <input type="button" value="Next" onclick="next()"/>
    </div>
  </form>
</div>`;

let quis4 = `<div class="card">
  <p class="quistion" q4>
    Answer true or false: We must eat carefully. so we don't suffocate?
  </p>
  <form action="" method="get">
    <div class="radio">
      <div>
        <label for="a1">True</label>
        <input type="radio" name="answer" id="a1" value="False"/>
      </div>
      <div>
        <label for="a2">False</label>
        <input type="radio" name="answer" id="a2" value="True"/>
      </div>
    </div>
    <div class="button">
      <p id="ele">01:00</p>
      <input type="button" value="Next" onclick="next()"/>
    </div>
  </form>
</div>`;

let quis5 = `<div class="card">
  <p class="quistion" q5>
   Put the appropriate word in the blank :
    When my father left the house, he held me all the ---------- . 
  </p>
  <form action="" method="get">
    <div class="radio">
      <div>
        <label for="a1">communications</label>
        <input type="radio" name="answer" id="a1" value="False"/>
      </div>
      <div>
        <label for="a2">Publishing</label>
        <input type="radio" name="answer" id="a2" value="False"/>
      </div>
      <div>
        <label for="a3"> responsibility</label>
        <input type="radio" name="answer" id="a3" value="True"/>
        </div>
        <div>
        <label for="a4">Campaign</label>
        <input type="radio" name="answer" id="a4" value="False"/>
      </div>
    </div>
    <div class="button">
      <p id="ele">01:00</p>
      <input class="but5" type="button" value="Next" onclick="next()"/>
    </div>
  </form>
  </div>`;

let f = 5;

let end = `<div class="card">
<form action="" method="get">
  <div class="button table">
    <p style="display: none" id="ele">01:00</p>
    <p class="timer">Your grades is 5 - ${f}, Thank you</p>
    <table>
      <tr>
        <th>Questions</th>
        <th>Answers</th>
      </tr>
      <tr>
        <td>1</td>
        <td class="answ">False</td>
      </tr>
      <tr>
        <td>2</td>
        <td class="answ">False</td>
      </tr>
      <tr>
        <td>3</td>
        <td class="answ">False</td>
      </tr>
      <tr>
        <td>4</td>
        <td class="answ">False</td>
      </tr>
      <tr>
        <td>5</td>
        <td class="answ">False</td>
      </tr>
      </table>
      </div>
</form>
</div>
;`;

let u = 1;
let tdL = document.querySelectorAll(".answ");

function next() {
  const radioButtons = document.querySelectorAll("input[name='answer']");
  let selected;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selected = radioButton.value;
      console.log(selected);
      if (selected == "False") {
        console.log(--f);
      }
      break;
    }
  }
  //
  //
  if (u == 1) {
    container.innerHTML = quis1;
    u = u + 1;
  } else if (u == 2) {
    container.innerHTML = quis2;
    grades.q1 = selected;
    u = u + 1;
  } else if (u == 3) {
    container.innerHTML = quis3;
    grades.q2 = selected;
    u = u + 1;
  } else if (u == 4) {
    container.innerHTML = quis4;
    grades.q3 = selected;
    u = u + 1;
  } else if (u == 5) {
    container.innerHTML = quis5;
    grades.q4 = selected;
    u = u + 1;
  } else if (u == 6) {
    grades.q5 = selected;
    container.innerHTML = `<div class="card">
    <form action="" method="get">
      <div class="button table">
        <p style="display: none" id="ele">01:00</p>
        <p class="timer">Your grade is ${f} - 5, Thank you</p>
        <table>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
          <tr>
            <td>1</td>
            <td class="answ">${grades.q1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td class="answ">${grades.q2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td class="answ">${grades.q3}</td>
          </tr>
          <tr>
            <td>4</td>
            <td class="answ">${grades.q4}</td>
          </tr>
          <tr>
            <td>5</td>
            <td class="answ">${grades.q5}</td>
          </tr>
          </table>
          </div>
    </form>
    </div>
    ;`;
    u = u + 1;
  }
  //
  let timer;
  let ele = document.getElementById("ele");
  sec = 60;
}
//
(function time() {
  timer = setInterval(() => {
    sec = sec - 1;
    ele.innerHTML = "00:" + sec;
    if (ele.innerHTML == "00:20") {
      ele.style.color = "#dd4848";
    } else if (ele.innerHTML == "00:0") {
      button.onclick = next();
    }
    console.log(sec);
  }, 1000);
  sec = 60;
})();
