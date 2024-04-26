let scoreboard = document.querySelector('.main_scoreboard-wrapper');
let btn = document.querySelector('.main_form-submit-btn');
let forms = document.querySelector('.main_form');
btn.addEventListener('click', coll);
let arr = [];
function coll(e) {
  e.preventDefault();
  let fname = forms.children[0].value;
  let lname = forms.children[1].value;
  let countrys = forms.children[2].value;
  let scores = Number(forms.children[3].value);
  const obj = {
    id: 1,
    fullName: "",
    country: "",
    score: 0
  };
  obj.id = arr.length + 1;
  obj.fullName = fname + lname;
  obj.country = countrys;
  obj.score = scores;
  arr.push(obj)
  sortLeaderBoard();
  printarr();
  clearinputs();
}
function clearinputs() {
  forms.children[0].value = "";
  forms.children[1].value = "";
  forms.children[2].value = "";
  forms.children[3].value = "";
}
function sortLeaderBoard() {
  return arr.sort((a, b) => Number(a.score) - Number(b.score))
}
function printarr() {
  scoreboard.innerHTML = " ";
  arr.forEach((e) => {
    let date = new Date();
    let box = document.createElement('div');
    box.classList.add('main_scoreboard');
    let div1 = document.createElement('div');
    let p1 = document.createElement('p');
    let span1 = document.createElement('span');
    p1.classList.add('main_player-name');
    span1.innerText = `${e.fullName}`;
    p1.append(span1);
    let p2 = document.createElement('p');
    p2.classList.add('main_time-stamp')
    p2.innerText = date.toLocaleDateString();
    div1.append(p1);
    div1.append(p2);
    box.append(div1)
    let p3 = document.createElement('p');
    p3.innerText = `${e.country}`;
    p3.classList.add('main_player-country');
    box.append(p3);
    let p4 = document.createElement('p');
    let arrays = `${e.score}`;
    p4.innerText = Number(arrays);
    p4.classList.add('main_player-score');
    box.append(p4);
    let div2 = document.createElement('div');
    div2.classList.add('main_scoreboard-btn-container');
    let btn1 = document.createElement('button');
    btn1.innerHTML = "&#x1f5d1";
    div2.append(btn1);
    let btn2 = document.createElement('button');
    btn2.innerText = "+5";
    div2.append(btn2);
    let btn3 = document.createElement('button');
    btn3.innerText = "-5";
    div2.append(btn3);
    box.append(div2);
    scoreboard.append(box);
    btn1.addEventListener('click', (() => {
      removes(e.id)
    }));
    btn2.addEventListener('click', (() => {
      add(e.id)
    }));
    btn3.addEventListener('click', (() => {
      sub(e.id)
    }));
  });
}
function removes(id) {
  arr = arr.filter((item) => item.id !== id);
  sortLeaderBoard();
  printarr();
}
function add(id) {
  arr.map((item) => {
    if (item.id === id) {
      item.score += 5
    }
  })
  sortLeaderBoard();
  printarr();
}
function sub(id) {
  arr.map((item) => {
    if (item.id === id) {
      item.score -= 5
    }
  })
  sortLeaderBoard();
  printarr();
}