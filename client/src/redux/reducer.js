import { types } from "./actions.js";

export const initialState = {
  ind: 0,
  messages: [],
  messageLoading: false,
  messagesLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        ind: (state.ind + 1) % state.messages.length,
      };
    case types.DECREMENT:
      const newInd = state.ind - 1;
      return {
        ...state,
        ind: newInd >= 0 ? newInd : state.messages.length - 1,
      };
    case types.MESSAGE_POSTED:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
        ind: 0,
      };
    case types.MESSAGES_LOADED:
      return {
        ...state,
        messages: action.payload,
        messagesLoaded: true,
      };
    default:
      return state;
  }
};
