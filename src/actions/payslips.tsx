import { Payslip } from "../reducers/payslips";
import { ActionTypes } from "./actionTypes";

export type PayslipsAction =
	| {
			type: typeof ActionTypes.PAYSLIPS_REQUEST
	  }
	| {
            type: typeof ActionTypes.PAYSLIPS_REQUEST_FAILURE,
            error: string
    }
    | {
        type: typeof ActionTypes.PAYSLIPS_REQUEST_LOADING
    }
    | {
        type: typeof ActionTypes.PAYSLIPS_REQUEST_SUCCESS,
        data: any
    }


    export const payslipsRequested = (): PayslipsAction => ({
        type: ActionTypes.PAYSLIPS_REQUEST
    });
    
    export const payslipsLoading = (): PayslipsAction => ({
        type: ActionTypes.PAYSLIPS_REQUEST_LOADING
    });
    
    export const payslipsSuccess = (
        response: any,
    ): PayslipsAction => ({
        type: ActionTypes.PAYSLIPS_REQUEST_SUCCESS,
        data: response
    });
    
    export const payslipsFail = (
        error: string,
    ): PayslipsAction => ({
        type: ActionTypes.PAYSLIPS_REQUEST_FAILURE,
        error
    });