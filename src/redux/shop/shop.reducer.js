import ShopActionTypes from "./shop.types";

const initialState = {
	collections: null,
	isFetching: false,
	errorMessage: undefined,
};

const shopReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ShopActionTypes.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collections: payload,
				isFetching: false,
			};
		case ShopActionTypes.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};
export default shopReducer;
