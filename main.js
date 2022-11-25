
let form = document.querySelector('#form')
let text = document.querySelector('#text')

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let inp = document.querySelector('#inp').value;
    let n = 0
    for(let i = 0; i < inp.length; i++){
        let a = /[a,u,e,i,o,o',A,U,E,I,O,O']/
        if(a.test(inp[i])){
            text.innerHTML = `${n += 1 } ta unli harf bor`
        }
        else{
            text.innerHTML = `${n} ta unli harf bor`
        }
    }
})
