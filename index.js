let store = Redux.createStore(reducer);

let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");
let reset = document.querySelector(".res");
let five = document.querySelector(".five");
let ten = document.querySelector(".ten");
let fivteen = document.querySelector(".fivteen");
let res = document.querySelector("small");
let max1 = document.querySelector(".max1");
let max2 = document.querySelector(".max2");
let max3 = document.querySelector(".max3");
let counter = store.getState();
res.innerText = counter;

let step = 1;
let max = 1;

five.addEventListener('click', () => {
    step = 5;
})

ten.addEventListener('click', () => {
    step = 10;
})

fivteen.addEventListener('click', () => {
    step = 15;
})

max1.addEventListener('click', () => {
    max = 15;
})

max2.addEventListener('click', () => {
    max = 100;
})

max3.addEventListener('click', () => {
    max = 200;
})



increment.addEventListener("click", () => {
    store.dispatch({
        type: 'increment',
        step: step,
        max: max,
    })

});
decrement.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement',
        step: step,
        max: max,
    })

});
reset.addEventListener("click", () => {
    store.dispatch({
        type: 'reset',

    })

});

store.subscribe(() => {
    counter = store.getState();

    res.innerText = counter;

})

function reducer(state = 0, action) {
    console.log(state, action);
    switch (action.type) {
        case "increment":
            return state + action.step <= max ? state + (action.step || 1) : state;

        case "decrement":
            return state - (action.step || 1);

        case "reset":
            return 0;

        default:
            return state;
    }
}