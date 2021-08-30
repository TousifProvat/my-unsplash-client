import { uploadConstants } from '../actions/constants';

// store

const initialState = {
  images: [],
  loading: false,
  error: null,
  message: '',
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case uploadConstants.GET_IMAGES_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case uploadConstants.GET_IMAGES_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        images: action.payload,
      });
    case uploadConstants.GET_IMAGES_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    case uploadConstants.IMAGE_UPLOAD_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case uploadConstants.IMAGE_UPLOAD_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });
    case uploadConstants.IMAGE_UPLOAD_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    case uploadConstants.DELETE_IMAGE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case uploadConstants.DELETE_IMAGE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        message: action.payload.message,
      });
    case uploadConstants.DELETE_IMAGE_FAILURE:
      return (state = {
        ...state,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
