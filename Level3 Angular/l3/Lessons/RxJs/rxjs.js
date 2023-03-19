// Promises review

// alert('What is a promise')

//RxJS => Reactive Programming Concept

//imports
const {Observable, of} = rxjs; 

//we use the creation operator to create a variable
const arrayNumbers = of([1,2,3]);

arrayNumbers.subscribe(response => {
    console.log('This is Response', response)
})
const news = new Observable((s) => {
    s.next('Hello....');
    setTimeout(() => {
    s.next('Good Morning...., this happened after 2s');

    }, 4000)
    setTimeout(() => {
        s.next('this Happens after 8s....');
    }, 8000)

})

news.subscribe(data=> {
    console.log('New Message', data)
})


const numberObserver = new Observable((subscriber) => {
 subscriber.next([1,2,3,4])
});

/**
 * Common operators(Map, filter, pipe, mergeMap, pluck, from, of, join, concat, flat
 * )
 * common Observables(Observable, Subject, BehaviourSubject)
 * 
 * special things(range, interval)
 */