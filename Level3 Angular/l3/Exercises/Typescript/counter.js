//Objective is to create a counter
var counterElement = document.querySelector('p.counter-Element');
var counterButton = document.querySelector('button.counter-button');
var stopCounter = document.querySelector('button.stop-counter');
var myInterval;
console.log(counterButton, counterElement, stopCounter);
counterButton === null || counterButton === void 0 ? void 0 : counterButton.addEventListener('click', function (event) {
    event.preventDefault();
    //   counterElement.textContent += 1;
    if ((counterElement === null || counterElement === void 0 ? void 0 : counterElement.textContent) == null) {
        alert('Element not found');
    }
    else {
        var first = Number(counterElement.textContent);
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
stopCounter === null || stopCounter === void 0 ? void 0 : stopCounter.addEventListener('click', function (event) {
    event.preventDefault();
    stopCounter === null || stopCounter === void 0 ? void 0 : stopCounter.classList.toggle('pause');
    if ((stopCounter === null || stopCounter === void 0 ? void 0 : stopCounter.textContent) == null) {
        alert("Element not found");
    }
    if (stopCounter === null || stopCounter === void 0 ? void 0 : stopCounter.classList.contains('pause')) {
        counterButton === null || counterButton === void 0 ? void 0 : counterButton.setAttribute('disabled', '');
        stopCounter.textContent = 'Go on';
    }
    else {
        counterButton === null || counterButton === void 0 ? void 0 : counterButton.removeAttribute('disabled');
        stopCounter.textContent = 'Stop counter';
    }
});
// setInterval
// myInterval = window.setInterval(() => {/* ...*/}, 1000);
// clearInterval
var emploerCode = 111;
var employeeCode = emploerCode;
console.log(typeof (employeeCode));
var username = 'Randy';
var age = 43;
var address = age;
console.log(typeof (address));
