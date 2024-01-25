
import { ofType } from "redux-observable";
import {concat, delay, filter, Observable, of, switchMap} from "rxjs";
import { ActionTypes } from "../actions/actionTypes";
import * as PayslipsAction from "../actions/payslips";
import Payslips from "../assets/Payslips.json";

export const fetchPayslips = (
	action$: Observable<any>
): Observable<any> => {
	return action$.pipe(
        filter(action => action.type === ActionTypes.PAYSLIPS_REQUEST),
        delay(3000),
        switchMap(a => {
            
            const loadingAction = of(
                PayslipsAction.payslipsLoading()
            );
            Payslips.payslips.map(item => {
                console.log('mockData==============',item)
            })
            
            const requestAction = of(PayslipsAction.payslipsSuccess(Payslips.payslips))

            return concat(loadingAction, requestAction);
	}));
};
