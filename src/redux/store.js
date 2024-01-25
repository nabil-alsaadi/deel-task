import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchPayslips } from "../epics/payslips";
import { payslipsReducer } from "../reducers/payslips";

const rootEpic = combineEpics(
    fetchPayslips
)
const rootReducer = combineReducers({payslips: payslipsReducer}) 


const epicMiddleware = createEpicMiddleware();

// export default createStore(
//   payslips,
//   applyMiddleware(epicMiddleware)
// );

// const store = createStore(
//     rootReducer,
//     applyMiddleware(epicMiddleware)
// );


export default function configureStore2() {
    // const store = configureStore(rootReducer,['Use Redux'],applyMiddleware(epicMiddleware))
    const store = createStore(rootReducer,applyMiddleware(epicMiddleware));
  
    epicMiddleware.run(rootEpic);
  
    return store;
}