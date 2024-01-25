import { ActionTypes } from "../actions/actionTypes";
import { PayslipsAction } from "../actions/payslips";

export type Payslip = {
	id: number,
	from: string,
    to: string,
    file: string
};
type State = {
    data: Payslip[],
	errorMessage: string | null,
	loading: boolean,
	loaded: boolean,
}

const defaultState:State = {
    data: [],
	errorMessage: null,
	loading: false,
	loaded: false,
};

export const payslipsReducer = (
	state: State = defaultState,
	action: any
) => {
	switch (action.type) {
		case ActionTypes.PAYSLIPS_REQUEST: {
			return {
				...state,
				loading: true,
				loaded: false,
				errorMessage: false
			};
		}
		case ActionTypes.PAYSLIPS_REQUEST_SUCCESS: {
			return {
				data: action.data,
				loading: false,
				loaded: true,
				errorMessage: false
			};
		}
		// case ActionTypes.PAYSLIPS_REQUEST_LOADING: {
		// 	return {
		// 		...state,
		// 		loading: false,
		// 		loaded: false,
		// 		errorMessage: action.errorMessage
		// 	};
		// }
		case ActionTypes.PAYSLIPS_REQUEST_FAILURE: {
			return {
				...state,
				loading: false,
				loaded: false,
				errorMessage: action.errorMessage
			};
		}
		default:
			return state;
	}
};