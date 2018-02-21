import types from '../constants/appConstant'

const postXMLSuccess = () => ({
    type: types.XML_POST_SUCCESS,
    isPosted: true,
});

const postXMLError = () => ({
    type: types.XML_POST_ERROR,
    isPosted: false,
});

export default {
    postXMLSuccess,
    postXMLError,
};