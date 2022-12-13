import { CallToActionRounded } from '@mui/icons-material'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  UPLOAD_IMAGE,
  HANDLE_CHANGE,
  CLEAR_UPLOADS,
  CHANGE_PAGE,
  UPLOAD_IMAGE_REGISTER,
  showSideBar,
  CHANGE_COLOR,
  ALL_USERS,
  GET_CURRENT_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  GET_ALL_MOVIES,
  UPDATE_MOVIE,
  GET_ALL_LIST,SELECT_VEDIO,
  CREATE_MOVIE_ERROR,
  CREATE_MOVIE_SUCCES,
  CREATE_LIST_ERROR,
  CREATE_LIST_SUCCESS,
  GET_SINGLE_LIST_ID,
  GET_SINGLE_MOVIE_ID

} from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    }
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if(action.type===LOGOUT_USER){
    return{
      ...initialState,
      token:null,
      user:null
    }
  }

  if(action.type===UPLOAD_IMAGE){
    return{
      ...state,
      image:action.payload.image
    }
  }

  if(action.type===HANDLE_CHANGE){
    return{
      ...state,
      [action.payload.name]:action.payload.value
    }
  }

  if(action.type===CLEAR_UPLOADS){
    return{
      ...state,
      // image:"",
      // tag:"",
      // title:"",
      // message:"",
    }
  }


  if(action.type===CHANGE_PAGE){
    return{
      ...state,
      page:action.payload.page
    }
  }


  if(action.type===UPLOAD_IMAGE_REGISTER){
    return{
      ...state,
      registerImage:action.payload.image
    }
  }

  if(action.type===showSideBar){
    return{
      ...state,
      isSideBarOpen:!state.isSideBarOpen
    }
  }

  if(action.type===CHANGE_COLOR){
    return{
      ...state,
      color:action.payload.color
    }
  }


  if(action.type===ALL_USERS){
    return{
      ...state,
      AllUsers:action.payload.data
    }
  }

  if(action.type===GET_CURRENT_USER){
    return{
      ...state,
      CurrentUser:action.payload.data
    }
  }

  if(action.type===UPDATE_USER_ERROR){
    return{
      ...state,
      showAlert:true,
      alertText:action.payload.data,
      alertType:'danger'
    }
  }

  if(action.type===UPDATE_USER_SUCCESS){
    return{
      ...state,
      showAlert:true,
      alertText:"The User Is Updated successfully",
      alertType:'success'
    }
  }
  
  if(action.type===GET_ALL_MOVIES){
    return{
      ...state,
      AllMovies:action.payload.data
    }
  }
  
  if(action.type===UPDATE_MOVIE){
    return{
      ...state,
      showAlert:true,
      alertText:"The Movie Is Updated Successfully",
      alertType:'success'
    }
  }

  if(action.type===GET_ALL_LIST){
    return{
      ...state,
      AllList:action.payload.data
    }
  }

  if(action.type===SELECT_VEDIO){
    return{
      ...state,
      vedio:action.payload.vedio
    }
  }

  if(action.type===CREATE_MOVIE_SUCCES){
    return{
      ...state,
      showAlert:true,
      alertType:"success",
      alertText:"The Moie is created Successfully"
    }
  }

  if(action.type===CREATE_MOVIE_ERROR){
    return{
      ...state,
      showAlert:true,
      alertType:'danger',
      alertText:action.payload.data
    }
  }


  if(action.type===CREATE_LIST_SUCCESS){
    return{
      ...state,
      showAlert:true,
      alertType:"success",
      alertText:"The List is created Successfully"
    }
  }

  if(action.type===CREATE_LIST_ERROR){
    return{
      ...state,
      showAlert:true,
      alertType:'danger',
      alertText:action.payload.data
    }
  }

  if(action.type===GET_SINGLE_LIST_ID){
    return{
      ...state,
      singleListId:action.payload.data

    }
  }


  if(action.type===GET_SINGLE_MOVIE_ID){
    return{
      ...state,
      singleMovieId:action.payload.data

    }
  }

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
