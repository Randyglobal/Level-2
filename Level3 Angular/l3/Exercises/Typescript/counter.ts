//Objective is to create a counter
let counterElement: Element | null = document.querySelector('p.counter-Element');

let counterButton: Element | null = document.querySelector('button.counter-button');

let stopCounter: Element | null = document.querySelector('button.stop-counter');

let myInterval: number;

console.log(counterButton, counterElement, stopCounter);

counterButton?.addEventListener('click', (event:Event) =>{
    event.preventDefault();
    //   counterElement.textContent += 1;
      if(counterElement?.textContent == null){
        alert('Element not found')
      }else{
        let first = Number(counterElement.textContent);
        first += 1;
         counterElement.textContent = String(first);

      }

});
// stopCounter?.addEventListener('click', (event : Event)=>{
//     event.preventDefault();
      // if(counterElement?.textContent == null){
      //   alert('Element not found')
      // }else{
      //   const first = stop();
      //    counterElement.textContent = String(first);
      // }
      
      // if(counterElement?.textContent == null){
      //    const second = stop();
      //    counterElement.textContent = String(second);

      // }else{
         
      // }
//     if(counterElement?.textContent == null){
//         alert('Element not found')
//       }else{
//         const second = stop{}
//          counterElement.textContent = String(second);
//       }
    
// })

//Billy's work 




stopCounter?.addEventListener('click', event => {
  event.preventDefault();
  stopCounter?.classList.toggle('pause');
  if (stopCounter?.textContent == null) {
      alert(`Element not found`);
  }if (stopCounter?.classList.contains('pause')) {
      counterButton?.setAttribute('disabled','');
      stopCounter.textContent = 'Go on';
  }else{
      counterButton?.removeAttribute('disabled');
      stopCounter!.textContent = 'Stop counter';
  }
})


// setInterval
// myInterval = window.setInterval(() => {/* ...*/}, 1000);

// clearInterval

let emploerCode: any = 111;
let employeeCode = <number> emploerCode;

console.log(typeof(employeeCode))
let username: string = 'Randy';
let age: any = 43;
let address = age;
console.log(typeof(address))
