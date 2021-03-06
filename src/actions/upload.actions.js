import axios from '../helper/axios';
import { uploadConstants } from './constants';

const getAllImage = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: uploadConstants.GET_IMAGES_REQUEST });
      const res = await axios.get('/images/get');
      if (res.status === 200) {
        dispatch({
          type: uploadConstants.GET_IMAGES_SUCCESS,
          payload: res.data.Images,
        });
      } else {
        dispatch({ type: uploadConstants.GET_IMAGES_FAILURE });
      }
    } catch (err) {
      dispatch({
        type: uploadConstants.GET_IMAGES_FAILURE,
        payload: { error: err.message },
      });
    }
  };
};

export const uploadImage = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: uploadConstants.IMAGE_UPLOAD_REQUEST });
      const res = await axios.post('/images/upload', form);
      if (res.status === 201) {
        dispatch({
          type: uploadConstants.IMAGE_UPLOAD_SUCCESS,
          payload: { image: res.data.image },
        });
        dispatch(getAllImage());
      } else {
        dispatch({
          type: uploadConstants.IMAGE_UPLOAD_FAILURE,
          payload: { error: res.error.message },
        });
      }
    } catch (err) {
      dispatch({
        type: uploadConstants.IMAGE_UPLOAD_FAILURE,
        payload: { error: err.message },
      });
    }
  };
};

export const deleteImage = (image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: uploadConstants.DELETE_IMAGE_REQUEST });
      const res = await axios.post('/images/delete', image);
      if (res.status === 202) {
        dispatch({
          type: uploadConstants.DELETE_IMAGE_SUCCESS,
        });
        dispatch(getAllImage());
      } else {
        dispatch({
          type: uploadConstants.DELETE_IMAGE_FAILURE,
          payload: { error: res.error.message },
        });
      }
    } catch (err) {
      dispatch({
        type: uploadConstants.DELETE_IMAGE_FAILURE,
        payload: { error: err.message },
      });
    }
  };
};

export const getImagebyLabel = (label) => {
  return async (dispatch) => {
    try {
      dispatch({ type: uploadConstants.GET_IMAGE_BY_LABEL_REQUEST });
      const res = await axios.get('/images/get');
      if (res.status === 200) {
        const searchResults = res.data.Images.filter((image) => {
          return image.title.includes(label);
        });

        dispatch({
          type: uploadConstants.GET_IMAGE_BY_LABEL_SUCCESS,
          payload: searchResults,
        });

        if (searchResults.length < 1) {
          dispatch({
            type: uploadConstants.GET_IMAGE_BY_LABEL_FAILURE,
            payload: { message: 'No Image', error: null },
          });
        }
      }
    } catch (err) {
      dispatch({
        type: uploadConstants.GET_IMAGE_BY_LABEL_FAILURE,
        payload: { error: err.message, message: '' },
      });
    }
  };
};

export { getAllImage };
