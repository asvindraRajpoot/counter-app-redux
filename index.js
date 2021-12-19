let store = Redux.createStore(reducer);

let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");
let reset = document.querySelector(".res");
let five = document.querySelector(".five");
let ten = document.querySelector(".ten");
let fivteen = document.querySelector(".fivteen");
let res = document.querySelector("small");
let counter = store.getState();
res.innerText = counter;

let step = 1;

five.addEventListener('click', () => {
    step = 5;
})

ten.addEventListener('click', () => {
    step = 10;
})

fivteen.addEventListener('click', () => {
    step = 15;
})




increment.addEventListener("click", () => {
    store.dispatch({
        type: 'increment',
        step: step,
    })

});
decrement.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement',
        step: step,
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
            return state + (action.step || 1);

        case "decrement":
            return state - (action.step || 1);

        case "reset":
            return 0;

        default:
            return state;
    }
}