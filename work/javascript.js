let main = document.createElement('div');
document.body.append(main);
document.body.prepend(document.createElement('p'));
document.querySelector("body > p").innerHTML = 'Для корректной работы нужно чтобы выбранный язык и нажатый "CAPSLOCK" были в одинаковом положении, <br> как на виртуальной клавиатуре ,так и на настоящей.Для смены языка используйте leftCtrl+leftShift'
document.querySelector("body > p").style.color = 'white';
main.append(document.createElement('textarea'));
main.append(document.createElement('div'));
main.append(document.createElement('div'));
main.append(document.createElement('div'));
main.append(document.createElement('div'));
main.append(document.createElement('div'));

const main_div = document.querySelector("body > div");
const textarea = document.querySelector("body > div > textarea");

const stroka1 = document.querySelector("body > div > div:nth-child(2)");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(1)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(1)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(1) > p').innerHTML = ("~");
          stroka1.querySelector('div:nth-child(1) > p:nth-of-type(2)').innerHTML = ("`");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(2)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(2)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(2) > p').innerHTML = ("!");
          stroka1.querySelector('div:nth-child(2) > p:nth-of-type(2)').innerHTML = ("1");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(3)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(3)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(3) > p').innerHTML = ("@");
          stroka1.querySelector('div:nth-child(3) > p:nth-of-type(2)').innerHTML = ("2");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(4)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(4)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(4) > p').innerHTML = ("#");
          stroka1.querySelector('div:nth-child(4) > p:nth-of-type(2)').innerHTML = ("3");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(5)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(5)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(5) > p').innerHTML = ("$");
          stroka1.querySelector('div:nth-child(5) > p:nth-of-type(2)').innerHTML = ("4");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(6)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(6)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(6) > p').innerHTML = ("%");
          stroka1.querySelector('div:nth-child(6) > p:nth-of-type(2)').innerHTML = ("5");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(7)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(7)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(7) > p').innerHTML = (":");
          stroka1.querySelector('div:nth-child(7) > p:nth-of-type(2)').innerHTML = ("6");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(8)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(8)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(8) > p').innerHTML = ("?");
          stroka1.querySelector('div:nth-child(8) > p:nth-of-type(2)').innerHTML = ("7");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(9)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(9)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(9) > p').innerHTML = ("*");
          stroka1.querySelector('div:nth-child(9) > p:nth-of-type(2)').innerHTML = ("8");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(10)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(10)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(10) > p').innerHTML = ("(");
          stroka1.querySelector('div:nth-child(10) > p:nth-of-type(2)').innerHTML = ("9");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(11)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(11)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(11) > p').innerHTML = (")");
          stroka1.querySelector('div:nth-child(11) > p:nth-of-type(2)').innerHTML = ("0");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(12)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(12)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(12) > p').innerHTML = ("_");
          stroka1.querySelector('div:nth-child(12) > p:nth-of-type(2)').innerHTML = ("-");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(13)').append(document.createElement('p'));
        stroka1.querySelector('div:nth-child(13)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(13) > p').innerHTML = ("+");
          stroka1.querySelector('div:nth-child(13) > p:nth-of-type(2)').innerHTML = ("=");
      stroka1.append(document.createElement('div'));
        stroka1.querySelector('div:nth-child(14)').append(document.createElement('p'));
          stroka1.querySelector('div:nth-child(14) > p').innerHTML = ('Backspace');
          

const stroka2 = document.querySelector("body > div > div:nth-child(3)");
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(1)').append(document.createElement('p'));
          stroka2.querySelector('div:nth-child(1) > p').innerHTML = ('Tab');
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(2)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(3)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(4)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(5)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(6)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(7)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(8)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(9)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(10)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(11)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(12)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(13)').append(document.createElement('p'));
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(14)').append(document.createElement('p'));
        stroka2.querySelector('div:nth-child(14)').append(document.createElement('p'));
          stroka2.querySelector('div:nth-child(14) > p').innerHTML = ('/');
          stroka2.querySelector('div:nth-child(14) > p:nth-of-type(2)').innerHTML = ('&#92;');
      stroka2.append(document.createElement('div'));
        stroka2.querySelector('div:nth-child(15)').append(document.createElement('p'));
          stroka2.querySelector('div:nth-child(15) > p').innerHTML = ('Del');
          stroka2.querySelector('div:nth-child(15) > p').setAttribute('id', 'Delete');

const stroka3 = document.querySelector("body > div > div:nth-child(4)");
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(1)').append(document.createElement('p'));
          stroka3.querySelector('div:nth-child(1) > p').innerHTML = ('CapsLock');
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(2)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(3)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(4)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(5)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(6)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(7)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(8)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(9)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(10)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(11)').append(document.createElement('p'));
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(12)').append(document.createElement('p'));
          stroka3.querySelector('div:nth-child(12) > p').setAttribute('id', 'Quote');
      stroka3.append(document.createElement('div'));
        stroka3.querySelector('div:nth-child(13)').append(document.createElement('p'));
          stroka3.querySelector('div:nth-child(13) > p').innerHTML = ('ENTER');
          stroka3.querySelector('div:nth-child(13) > p').setAttribute('id', 'Enter');

const stroka4 = document.querySelector("body > div > div:nth-child(5)");
    stroka4.append(document.createElement('div'));
      stroka4.querySelector('div:nth-child(1)').append(document.createElement('p'));
      stroka4.querySelector('div:nth-child(1)').append(document.createElement('span'));
        stroka4.querySelector('div:nth-child(1) > span').innerHTML = ('Shift');
        stroka4.querySelector('div:nth-child(1) > p').setAttribute('id', 'ShiftLeft');
    stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(2)').append(document.createElement('p'));
          stroka4.querySelector('div:nth-child(2) > p').innerHTML = ('&#92;');
    stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(3)').append(document.createElement('p'));
    stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(4)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(5)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(6)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(7)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(8)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(9)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(10)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(11)').append(document.createElement('p'));
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(12)').append(document.createElement('p'));
          stroka4.querySelector('div:nth-child(12) > p').innerHTML = ('/');
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(13)').append(document.createElement('p'));
          stroka4.querySelector('div:nth-child(13) > p').innerHTML = ('&#9650;');
          stroka4.querySelector('div:nth-child(13) > p').setAttribute('id', 'ArrowUp');
      stroka4.append(document.createElement('div'));
        stroka4.querySelector('div:nth-child(14)').append(document.createElement('p'));
        stroka4.querySelector('div:nth-child(14)').append(document.createElement('span'));
        stroka4.querySelector('div:nth-child(14) > span').innerHTML = ('Shift');
          stroka4.querySelector('div:nth-child(14) > p').setAttribute('id', 'ShiftRight');
      

const stroka5 = document.querySelector("body > div > div:nth-child(6)");
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(1)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(1) > p').innerHTML = ('Ctrl');
          stroka5.querySelector('div:nth-child(1) > p').setAttribute('id', 'ControlLeft');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(2)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(2) > p').innerHTML = ('Win');
          stroka5.querySelector('div:nth-child(2) > p').setAttribute('id', 'MetaLeft');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(3)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(3) > p').setAttribute('id', 'AltLeft');
          stroka5.querySelector('div:nth-child(3)').append(document.createElement('span'));
          stroka5.querySelector('div:nth-child(3) > span').innerHTML = ('Alt');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(4)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(4) > p').innerHTML = (' ');
          stroka5.querySelector('div:nth-child(4) > p').setAttribute('id', 'Space');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(5)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(5) > p').setAttribute('id', 'AltRight');
          stroka5.querySelector('div:nth-child(5)').append(document.createElement('span'));
          stroka5.querySelector('div:nth-child(5) > span').innerHTML = ('Alt');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(6)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(6) > p').innerHTML = ('Ctrl');
          stroka5.querySelector('div:nth-child(6) > p').setAttribute('id', 'ControlRight');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(7)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(7) > p').innerHTML = ('&#9668;');
          stroka5.querySelector('div:nth-child(7) > p').setAttribute('id', 'ArrowLeft');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(8)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(8) > p').innerHTML = ('&#9660;');
          stroka5.querySelector('div:nth-child(8) > p').setAttribute('id', 'ArrowDown');
      stroka5.append(document.createElement('div'));
        stroka5.querySelector('div:nth-child(9)').append(document.createElement('p'));
          stroka5.querySelector('div:nth-child(9) > p').innerHTML = ('&#9658;');
          stroka5.querySelector('div:nth-child(9) > p').setAttribute('id', 'ArrowRight');
      

      main_div.classList.add('main');
      stroka1.classList.add('usial_div1');
      stroka2.classList.add('usial_div2');
      stroka3.classList.add('usial_div3');
      stroka4.classList.add('usial_div4');
      stroka5.classList.add('usial_div5');

      let arr = document.querySelectorAll('p');

      document.addEventListener('keydown',checkKey)
      function checkKey(event){
        textarea.focus();
        changeLangRu(event);
        for(let i = 0; i < arr.length; i++){
          if(event.code === arr[i].id){
          arr[i].parentElement.classList.add('background'); 
          }else if(event.key === arr[26].innerHTML){
            arr[26].parentElement.classList.add('background');
            if(count === 0){
              count = 0;
            } else {
              count--;
            }
            break
          }else if(event.code === arr[76].innerHTML){
            arr[76].parentElement.classList.add('background');
            if(count === 0){
              count = 0;
            } else {
              count--;
            }
            break
          }
          else if( event.code === arr[78].id){
            arr[78].parentElement.classList.add('background');
            if(count === textarea.value){
              count = textarea.value;
            } else {
              count++;
            }
            break
          }
          else if( event.code === arr[55].id){
            arr[55].parentElement.classList.add('background');
            if(count === textarea.value){
              count = textarea.value;
            } else {
              count++;
            }
            break
          }
          else if( event.code === arr[73].id){
            arr[73].parentElement.classList.add('background');
            if(count === textarea.value){
              count = textarea.value;
            } else {
              count++;
            }
            break
          }
           else if (event.key === arr[i].innerHTML){
          arr[i].parentElement.classList.add('background');
          if(count === textarea.value){
            count = textarea.value;
          } else {
            count++;
          }
          break
        }
      }
      setTimeout(() => {
        textarea.innerHTML = textarea.value;
      }, 200);
      }

      document.addEventListener('keyup',remOve)
      function remOve(event){
        changeLangEn(event);
        for( let i = 0; i < arr.length; i++){
          if(event.code === arr[i].id){
            arr[i].parentElement.classList.remove('background'); 
            } else if(event.key === arr[i].innerHTML){
            arr[i].parentElement.classList.remove('background');
          }
        }
      }

//change lang;

      let shift = false;
      let ctrl = false;
      let langChoice = 'en';
      let CapsLock = false;
      const objLang = {
        arrRU : ['Ё','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л',
        'Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю'],
        arrru : ['ё','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л',
        'д','ж','э','я','ч','с','м','и','т','ь','б','ю'],
        arrEN : ['`','Q','W','E','R','T','Y','U','I','O','P','[',']',
                 'A','S','D','F','G','H','J','K','L',';','&#789;',
                 'Z','X','C','V','B','N','M',',','.'],
        arren : ['`','q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k',
        'l',';','&#789;','z','x','c','v','b','n','m',',','.']
      };

      function changeLangRu(event){
        if(event.code === 'CapsLock'){
          if(localStorage.getItem(CapsLock) === 'false'){
            localStorage.setItem(CapsLock,true);
          }else{
            localStorage.setItem(CapsLock,false);
          }
        }
        if(event.code === 'ShiftLeft'){
          shift = true;
        }
        if(event.code === 'ControlLeft'){
          ctrl = true;
        }
        if(shift === true && ctrl === true){
          if(localStorage.getItem(langChoice) === 'en'){
            localStorage.setItem(langChoice, 'ru');
          } else {
            localStorage.setItem(langChoice, 'en');
          }
        }
        Lang();
      }
      function changeLangEn(event){
        if(event.code === 'ShiftLeft'){
          shift = false;
        }
        if(event.code === 'ControlLeft'){
          ctrl = false;
        }
      }
  
      const arrSelectors = [stroka1.querySelector('div:nth-child(1) > p:nth-child(2)'),
                            stroka2.querySelector('div:nth-child(2) > p'),
                            stroka2.querySelector('div:nth-child(3) > p'),
                            stroka2.querySelector('div:nth-child(4) > p'),
                            stroka2.querySelector('div:nth-child(5) > p'),
                            stroka2.querySelector('div:nth-child(6) > p'),
                            stroka2.querySelector('div:nth-child(7) > p'),
                            stroka2.querySelector('div:nth-child(8) > p'),
                            stroka2.querySelector('div:nth-child(9) > p'),
                            stroka2.querySelector('div:nth-child(10) > p'),
                            stroka2.querySelector('div:nth-child(11) > p'),
                            stroka2.querySelector('div:nth-child(12) > p'),
                            stroka2.querySelector('div:nth-child(13) > p'),
                            stroka3.querySelector('div:nth-child(2) > p'),
                            stroka3.querySelector('div:nth-child(3) > p'),
                            stroka3.querySelector('div:nth-child(4) > p'),
                            stroka3.querySelector('div:nth-child(5) > p'),
                            stroka3.querySelector('div:nth-child(6) > p'),
                            stroka3.querySelector('div:nth-child(7) > p'),
                            stroka3.querySelector('div:nth-child(8) > p'),
                            stroka3.querySelector('div:nth-child(9) > p'),
                            stroka3.querySelector('div:nth-child(10) > p'),
                            stroka3.querySelector('div:nth-child(11) > p'),
                            stroka3.querySelector('div:nth-child(12) > p'),
                            stroka4.querySelector('div:nth-child(3) > p'),
                            stroka4.querySelector('div:nth-child(4) > p'),
                            stroka4.querySelector('div:nth-child(5) > p'),
                            stroka4.querySelector('div:nth-child(6) > p'),
                            stroka4.querySelector('div:nth-child(7) > p'),
                            stroka4.querySelector('div:nth-child(8) > p'),
                            stroka4.querySelector('div:nth-child(9) > p'),
                            stroka4.querySelector('div:nth-child(10) > p'),
                            stroka4.querySelector('div:nth-child(11) > p') 
                          ];

         function Lang(){
         if(localStorage.getItem(CapsLock) === 'true' && localStorage.getItem(langChoice) === 'en'){
          for(let i = 0; i < objLang.arrEN.length; i++){
            arrSelectors[i].innerHTML = objLang.arrEN[i];
          }
          } else if(localStorage.getItem(langChoice) === 'en'){
            for(let i = 0; i < objLang.arren.length; i++){
              arrSelectors[i].innerHTML = objLang.arren[i];
            }
          } else if(localStorage.getItem(langChoice) === 'ru' && localStorage.getItem(CapsLock) === 'true'){
            for(let i = 0; i < objLang.arrRU.length; i++){
              arrSelectors[i].innerHTML = objLang.arrRU[i];
            }
            } else if(localStorage.getItem(langChoice) === 'ru'){
            for(let i = 0; i < objLang.arrru.length; i++){
              arrSelectors[i].innerHTML = objLang.arrru[i];
            }
            }
          }
      
      Lang();

      const arrNotListener = [
        stroka1.querySelector('div:nth-child(1)'),
        stroka1.querySelector('div:nth-child(2)'),
        stroka1.querySelector('div:nth-child(3)'),
        stroka1.querySelector('div:nth-child(4)'),
        stroka1.querySelector('div:nth-child(5)'),
        stroka1.querySelector('div:nth-child(6)'),
        stroka1.querySelector('div:nth-child(7)'),
        stroka1.querySelector('div:nth-child(8)'),
        stroka1.querySelector('div:nth-child(9)'),
        stroka1.querySelector('div:nth-child(10)'),
        stroka1.querySelector('div:nth-child(11)'),
        stroka1.querySelector('div:nth-child(12)'),
        stroka1.querySelector('div:nth-child(13)'),
      stroka2.querySelector('div:nth-child(2)'),
      stroka2.querySelector('div:nth-child(3)'),
      stroka2.querySelector('div:nth-child(4)'),
      stroka2.querySelector('div:nth-child(5)'),
      stroka2.querySelector('div:nth-child(6)'),
      stroka2.querySelector('div:nth-child(7)'),
      stroka2.querySelector('div:nth-child(8)'),
      stroka2.querySelector('div:nth-child(9)'),
      stroka2.querySelector('div:nth-child(10)'),
      stroka2.querySelector('div:nth-child(11)'),
      stroka2.querySelector('div:nth-child(12)'),
      stroka2.querySelector('div:nth-child(13)'),
      stroka2.querySelector('div:nth-child(14)'),
        stroka3.querySelector('div:nth-child(2)'),
        stroka3.querySelector('div:nth-child(3)'),
        stroka3.querySelector('div:nth-child(4)'),
        stroka3.querySelector('div:nth-child(5)'),
        stroka3.querySelector('div:nth-child(6)'),
        stroka3.querySelector('div:nth-child(7)'),
        stroka3.querySelector('div:nth-child(8)'),
        stroka3.querySelector('div:nth-child(9)'),
        stroka3.querySelector('div:nth-child(10)'),
        stroka3.querySelector('div:nth-child(11)'),
        stroka3.querySelector('div:nth-child(12)'),
      stroka4.querySelector('div:nth-child(2)'),
      stroka4.querySelector('div:nth-child(3)'),
      stroka4.querySelector('div:nth-child(4)'),
      stroka4.querySelector('div:nth-child(5)'),
      stroka4.querySelector('div:nth-child(6)'),
      stroka4.querySelector('div:nth-child(7)'),
      stroka4.querySelector('div:nth-child(8)'),
      stroka4.querySelector('div:nth-child(9)'),
      stroka4.querySelector('div:nth-child(10)'),
      stroka4.querySelector('div:nth-child(11)'), 
      stroka4.querySelector('div:nth-child(12)'),
      stroka5.querySelector('div:nth-child(4)')
      ];


      document.querySelector("body > div").addEventListener('click',mouseclick);
      let count = 0;
      let tab = 0;
      
      function mouseclick(event){
        console.log(event.target);
        if(event.target === stroka5.querySelector('div:nth-child(7)') || event.target === stroka5.querySelector('div:nth-child(7) > p')){
          if(count === 0){
            count = 0;
          } else {
            count--;
          }
        }
        if(event.target === stroka5.querySelector('div:nth-child(9)') || event.target === stroka5.querySelector('div:nth-child(9) > p')){
          if(textarea.textLength === count){
            textarea.textLength = count;
          } else {
            count++;
          }
        }
        if(event.target === stroka4.querySelector('div:nth-child(13)') || event.target === stroka4.querySelector('div:nth-child(13) > p')){
          count = 0;
        }
        if(event.target === stroka5.querySelector('div:nth-child(8)') || event.target === stroka5.querySelector('div:nth-child(8) > p')){
          count = textarea.textLength;
        }
        if(event.target === stroka2.querySelector('div:nth-child(1)') || event.target === stroka2.querySelector('div:nth-child(1) > p')){
          textarea.style.paddingLeft = String(tab += 20) + 'px';
        }
        if(event.target === stroka1.querySelector('div:nth-child(14)') || event.target === stroka1.querySelector('div:nth-child(14) > P')){
          textarea.innerHTML = textarea.innerHTML.substring(count-1,0) + textarea.innerHTML.substring(count);
          if(count === 0){
            count = 0;
          } else {
            count--;
          }
        }
        if(event.target === stroka2.querySelector('div:nth-child(15)') || event.target === stroka2.querySelector('div:nth-child(15) > p')){
          textarea.innerHTML = textarea.innerHTML.substring(count,0) + textarea.innerHTML.substring(count + 1);

        }

        if(event.target === stroka3.querySelector('div:nth-child(13)') || event.target === stroka3.querySelector('div:nth-child(13) > p')){
          textarea.innerHTML = textarea.innerHTML.substring(count,0) + '\n' + textarea.innerHTML.substring(count);
          count++;
        } else {
          for(let i = 0; i < arrNotListener.length; i++){
          if(event.target === arrNotListener[i] || event.target === arrNotListener[i].querySelector('p') ||
          event.target === arrNotListener[i].querySelector('p:nth-of-type(2)')){
            if(arrNotListener[i].querySelector('p:nth-child(2)')){
              textarea.innerHTML = textarea.innerHTML.substring(count,0) + arrNotListener[i].querySelector('p:nth-child(2)').innerHTML + textarea.innerHTML.substring(count);
              count++;
            } else{
              textarea.innerHTML = textarea.innerHTML.substring(count,0) + arrNotListener[i].querySelector('p').innerHTML + textarea.innerHTML.substring(count);
              count++;
            }
          }
        }
      }
      textarea.selectionStart = textarea.selectionEnd = count;
      textarea.value = textarea.innerHTML;
      textarea.focus();
      }