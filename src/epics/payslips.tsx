
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
            
            const requestAction = of(PayslipsAction.payslipsSuccess(Payslips.payslips))//[{id:1,from: "10/10/2020" , to: "10/01/2022",file:"https://www.orimi.com/pdf-test.pdf"},{id:2,from: "01/01/2022" , to: "12/11/2042",file:"https://via.placeholder.com/300/09f/fff.png"},{id:1,from: "10/10/2020" , to: "10/01/2022",file:"https://www.orimi.com/pdf-test.pdf"}])) //of({id:1,from: "10/10/2020" , to: "10/01/2022",file:"https://www.orimi.com/pdf-test.pdf"},{id:2,from: "01/01/2022" , to: "12/11/2042",file:"https://via.placeholder.com/300/09f/fff.png"})

            return concat(loadingAction, requestAction);
	}));
};
