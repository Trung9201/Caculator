const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnClear = $('.clear')
const btnDelete = $('.delete')
const btnAll = $$('button')
const screenResult = $('.result')
const screenOutput = $('.output')

let result = ''
let output = ''

btnAll.forEach(btn => {
    btn.onclick = () => {
        switch (btn.textContent) {
            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': 
                output += btn.textContent;
                screenOutput.textContent = output
                break;
            case '/':
               if(onCaculating(result)){
                    result+=output
                    result+='/'
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                    output = ''
                }
                else {
                    result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    result+='/'
                    output = ''
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                }
                break;
            case 'x':
                if(onCaculating(result)){
                result+=output
                result+='x'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
                }
                else {
                    result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    result+='x'
                    output = ''
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                }
                break;
            case '-':
                if(onCaculating(result)){
                result+=output
                result+='-'
                screenResult.textContent = result
                screenOutput.textContent = ''
                output = ''
                
                }
                else {
                    result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    result+='-'
                    output = ''
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                }
                break;
            case '+':
                if(onCaculating(result)){
                    result+=output
                    result+='+'
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                    output = ''
                }
                else {
                    result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    result+='+'
                    output = ''
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                }
                break;
            case '=':
                if(!onCaculating(result)){
                    result = caculate(Number(result.slice(0,result.length-1)),Number(output),result.slice(-1))
                    output = ''
                    screenResult.textContent = result
                    screenOutput.textContent = ''
                }
                if(output != '') {
                    screenResult.textContent = output
                    screenOutput.textContent = ''
                    output = ''
                }
                break
            case '.':
                output+='.'
                screenOutput.textContent = output
                break
            default:
                break;
        }
    }
})


function onCaculating(str) {
    let count = 0;
    for(let i in str) {
        if(str[i] === '/' || str[i] === 'x' || str[i] === '+' || str[i] === '-') {
            count++
        }
    }
    return count === 1 ? false : true
}

function caculate(a,b,str) {
    switch(str) {
        case '+': 
            return a+b;
            break;
        case '-': 
            return a-b;
            break;
        case 'x': 
            return a*b;
            break;
        case '/': 
            return a/b;
            break;
        default:
            break;
    }
}


btnDelete.onclick = () => {
    output = output.slice(0,-1)
    screenOutput.textContent = output
    if(output === '') screenOutput.textContent = '0'
}

btnClear.onclick = () => {
    screenOutput.textContent = '0'
    screenResult.textContent = ''
    result = ''
    output = '0'
}