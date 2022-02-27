let text = document.querySelector("textarea")
let upper = document.getElementById("upper-case");
upper.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
})

let lower = document.getElementById("lower-case");
lower.addEventListener("click", function () {
    text.value = text.value.toLowerCase();
})

/*let proper = document.getElementById("proper-case");
proper.addEventListener("click", function () {
    let val = text.value.split(" ");
    let aa = [];
    val.forEach((element) => {
        aa.push(element.slice(0,1).toUpperCase() + element.slice(1).toLowerCase());
    })
    text.value = aa.join(" ");
})
*/
/*
let proper = document.getElementById("proper-case");
proper.addEventListener("click", function () {
    let propText = text.value.split(" ");
    let arr = [];
    arr = propText.map((elem) => {
        return elem = elem.slice(0,1).toUpperCase() + elem.slice(1).toLowerCase();
    })
    text.value = arr.join(" ");
})
*/

let proper = document.getElementById("proper-case");
proper.addEventListener("click", function (){
    let propText = text.value.split(" ");
    for(let i in propText) {
        propText[i] = propText[i].slice(0,1).toUpperCase() + propText[i].slice(1).toLowerCase();
        text.value = propText.join(" ");
    }
})

let sentence = document.getElementById("sentence-case");
sentence.addEventListener("click", function (){
    let sent = text.value.toLowerCase().split(". ");
    let arr;
    arr = sent.map((elem) => {
        return elem[0].toUpperCase() + elem.slice(1);
    })
    text.value = arr.join(". ");
})

let name = "text.txt";
let save = document.getElementById("save-text-file");
save.addEventListener("click", function () {download(name, text.value);}, false);
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

