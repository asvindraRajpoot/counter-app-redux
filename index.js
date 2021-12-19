let store = Redux.createStore(reducer);

let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");
let reset = document.querySelector(".res");
let res = document.querySelector("small");

let counter = store.getState();
res.innerText = counter;

increment.addEventListener("click", () => {
    store.dispatch({
        type: 'increment'
    })

});
decrement.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement'
    })

});
reset.addEventListener("click", () => {
    store.dispatch({
        type: 'reset'
    })

});

store.subscribe(() => {
    counter = store.getState();
    res.innerText = counter;

})

function reducer(state = 0, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}
