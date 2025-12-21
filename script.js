let bgpicker = document.getElementById('bgpicker');
let calcpicker = document.getElementById('calcpicker');


bgpicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--bg-color', e.target.value);
});
calcpicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--calc-color', e.target.value + '80')
});

let  display  =  document.getElementById('inputBox');
let  buttons  =document.querySelectorAll('button');

let  buttonsArray  =  Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {

  btn.addEventListener('click', (e) => {

    if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string. length-1);
            display.value = string;
  
    }else if(e.target.innerHTML == 'AC'){
         string = ' ';
         display.value = string;
    } else if(e.target.innerHTML ==  '='){
          string = eval(string);
          display.value = string;
   }else{
        string += e.target.innerHTML;
        display.value = string;
     }
});
});
 