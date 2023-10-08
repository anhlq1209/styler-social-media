import * as UserApi from "../api/UserRequests"

export const uploadUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" })
  try {
    const { data } = await UserApi.uploadUser(id, formData)
    console.log("Action ko receive hoa hy ye: ", data)
    dispatch({ type: "UPLOAD_SUCCESS", data })
  } catch (error) {
    console.error(error)
    dispatch({ type: "UPLOAD_FAIL" })
  }
}

export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER", data: id })
  UserApi.followUser(id, data)
}

export const unfollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER", data: id })
  UserApi.unfollowUser(id, data)
}