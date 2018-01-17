import { createStore, combineReducers, applyMiddleware } from 'redux';

const userReducer = (state={}, action) => {
  switch(action.type){
    case 'USER_NAME': {
      state = {...state, name: action.payload}
      break;
    }
    case 'USER_AGE': {
      state = { ...state, age: action.payload }
      break;
    }
  }
  return state;
};

const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'ADD': {
      state = state + action.payload;
      break;
    }
    case 'SUBSTRACT': {
      state = state - action.payload;
      break;
    }
  }
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  counter: counterReducer
})

const myLogger = (store) => (next) => (action) => {
  console.log('My log', action);
  next(action);
}

const store = createStore(reducers, {}, applyMiddleware(myLogger));

store.subscribe(()=> {
  console.log('New action', store.getState());
})

store.dispatch({
  type: 'ADD',
  payload: 100
});
store.dispatch({
  type: 'SUBSTRACTION',
  payload: 10
});
store.dispatch({
  type: 'USER_NAME',
  payload: 'ARIAN'
});
store.dispatch({
  type: 'USER_AGE',
  payload: 29
});



// import { createStore, combineReducers, applyMiddleware } from 'redux';

// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'USER_NAME': {
//       state = { ...state, name: action.payload }
//       break;
//     }
//     case 'USER_AGE': {
//       state = { ...state, age: action.payload }
//       break;
//     }
//   };
//   return state;
// }

// const totalAmountReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'ADD': {
//       state += action.payload;
//       break;
//     }
//     case 'SUBSTRACT': {
//       state -= action.payload;
//       break;
//     }
//   };
//   return state;
// }




// const reducers = combineReducers({
//   user: userReducer,
//   amount: totalAmountReducer
// })

// const myLogger = (store) => (next) => (action) => {
//   console.log('logged action', action);
//   next(action);
// }

// const store = createStore(reducers, {}, applyMiddleware(myLogger));



// store.subscribe(() => {
//   console.log('New movement', store.getState());
// });



// store.dispatch({
//   type: 'USER_NAME',
//   payload: 'Arian'
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });

// store.dispatch({
//   type: 'SUBSTRACT',
//   payload: 10
// });

// store.dispatch({
//   type: 'USER_AGE',
//   payload: 18
// });


//** **//

// import { createStore, combineReducers } from 'redux';

// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'USER_NAME': {
//       state = {...state, name: action.payload}
//       break;
//     }
//     case 'USER_AGE': {
//       state = {...state, age: action.payload}
//       break;
//     }
//   };
//   return state;
// }

// const totalAmountReducer = (state=0, action) => {
//   switch(action.type){
//     case 'ADD': {
//       state += action.payload;
//       break;
//     }
//     case 'SUBSTRACT': {
//       state -= action.payload;
//       break;
//     }
//   };
//   return state;
// }

// const reducers = combineReducers({
//   user: userReducer,
//   amount: totalAmountReducer
// })

// const store = createStore(reducers);

// store.subscribe(() => {
//   console.log('New movement', store.getState());
// });

// store.dispatch({
//   type: 'USER_NAME',
//   payload: 'Arian'
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });

// store.dispatch({
//   type: 'SUBSTRACT',
//   payload: 10
// });

// store.dispatch({
//   type: 'USER_AGE',
//   payload: 18
// });


//* *//


// import { combineReducers, createStore } from 'redux';

// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'CHANGE_NAME': {
//       state = {...state, name: action.payload}
//       break;
//     }
//     case 'CHANGE_AGE': {
//       state = { ...state, age: action.payload }
//       break;
//     }
//   }
//   return state;
// };

// const tweetsReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'TWEETS_AUTHOR': {
//       state = [...state, action.payload ]
//       break;
//     }
//     case 'TWEETS_DATE': {
//       state = [ ...state, action.payload ]
//       break;
//     }
//   }
//   return state;
// };

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// });

// const store = createStore(reducers);

// store.subscribe(() => {
//   console.log('user info changed', store.getState())
// });

// store.dispatch({
//   type: 'CHANGE_NAME',
//   payload: 'Arian'
// })
// store.dispatch({
//   type: 'CHANGE_AGE',
//   payload: 32
// })
// store.dispatch({
//   type: 'TWEETS_AUTHOR',
//   payload: 'Dario'
// })
// store.dispatch({
//   type: 'TWEETS_DATE',
//   payload: '03/24/2018'
// })


//** **//


// import { combineReducers, createStore } from 'redux';

// const userReducer = (state={}, action) => {
//     switch(action.type) {
//       case 'CHANGE_NAME': {
//         state = {...state, name: action.payload}
//         break;
//       }
//       case 'CHANGE_AGE': {
//         state = { ...state, age: action.payload }
//         break;
//       }  
//     }
//     return state; 
//   };

// const tweetsReducer = (state=[], action) => {
//   return state;
// };

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// })

// const store = createStore(reducers);

// store.subscribe(() => {
//   console.log('store change', store.getState())
// })

// store.dispatch({ type: 'CHANGE_NAME', payload: "Will" });
// store.dispatch({ type: 'CHANGE_AGE', payload: 35 });
// store.dispatch({ type: 'CHANGE_NAME', payload: "Guillermo" });
// store.dispatch({ type: 'CHANGE_AGE', payload: 10 });



// import { createStore } from 'redux';

// const reducer = (state, action) => {
//   if (action.type === 'INC') {
//     return state + action.payload;
//   }
//   if (action.type === 'DEC') {
//     return state - action.payload;
//   }
//   return state;
// }

// const store = createStore(reducer, 0);

// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })


// store.dispatch({ type: 'INC', payload: 1 });
// store.dispatch({ type: 'INC', payload: 100 });
// store.dispatch({ type: 'INC', payload: 1 });
// store.dispatch({ type: 'INC', payload: 1 });
// store.dispatch({ type: 'INC', payload: 1 });
// store.dispatch({ type: 'INC', payload: 1 });
// store.dispatch({ type: 'DEC', payload: 1 });
// store.dispatch({ type: 'DEC', payload: 1 });
// store.dispatch({ type: 'DEC', payload: 1 });
// store.dispatch({ type: 'DEC', payload: 1 });