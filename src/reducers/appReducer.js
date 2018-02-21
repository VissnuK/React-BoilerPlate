import types from '../constants/appConstant';

const defaultState = {
  dataIsFetching: 'false',
  errorDataFetch: 'false',
  dataDetails: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.DATA_POSTING:
      return {
        ...state,
        // isPosted: action.isPosted,
      };
    default:
      return { ...state };
  }
};

export default reducer;
