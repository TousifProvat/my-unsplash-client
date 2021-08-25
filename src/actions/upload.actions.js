import axios from '../helper/axios'
import { uploadConstants } from './constants';


 const getAllImage = () => {
    return async(dispatch) => {
        try {
            dispatch({ type: uploadConstants.GET_IMAGES_REQUEST})
            const res = await axios.get('/images/get');
            if(res.status === 200){
                dispatch({ type: uploadConstants.GET_IMAGES_SUCCESS, payload: res.data.Images });
            } else {
                dispatch({ type: uploadConstants.GET_IMAGES_FAILURE})
                
            }
        } catch (err) {
            dispatch({ type: uploadConstants.GET_IMAGES_FAILURE, payload: { error: err.message}})

        }
    }
}

export const uploadImage = (form) => {
    return async(dispatch) => {
        try {
            dispatch({ type: uploadConstants.IMAGE_UPLOAD_REQUEST })
            const res = await axios.post('/images/upload',form);
            if(res.status === 201){
               dispatch({ type: uploadConstants.IMAGE_UPLOAD_SUCCESS })
               dispatch(getAllImage());
            }else{
               dispatch({ type: uploadConstants.IMAGE_UPLOAD_FAILURE, payload: {error: res.error.message} })
            }
        } catch (err) {
            dispatch({ type: uploadConstants.IMAGE_UPLOAD_FAILURE, payload: {error: err.message} })
        }
    }
}

export {
    getAllImage
}