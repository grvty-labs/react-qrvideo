// @flow
import { SET_QR_INDEX } from '../constants/actionTypes';
type State = {
  currentQrIndex: number,
}

type Payload = {
  currentQrIndex: number,
}

type Action = {
  type: string,
  payload: Payload,
}

const initialState: State = {
  currentQrIndex: 0,
};

const qrReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case SET_QR_INDEX: {
      return {
        ...state,
        currentQrIndex: action.payload.currentQrIndex,
      };
    }

    default: {
      return state;
    }
  }
};

export default qrReducer;
