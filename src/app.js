function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1  };
    case 'DEC':
      return { ...state, counter: state.counter - 1  };
    default:
      return state;
  }
}

const initialState = { counter: 3 };

const store = Redux.createStore(reducer, initialState);

function updateView() {
  $('#counter').text(store.getState().counter);
}

store.subscribe(updateView);

$(function() {
  updateView(); // Run for first time
  $('#inc').on('click', () => store.dispatch({ type: 'INC' }));
  $('#dec').on('click', () => store.dispatch({ type: 'DEC' }));
});

