import ApiUtils from '../../utils/api-utils';
import * as types from './action-types';

// export function loadAuthorsSuccess(authors) {
//   return {type: types.LOAD_AUTHORS_SUCCESS, authors};
// }

export function authenticate(username,password) {
  return dispatch => {
    //dispatch(beginAjaxCall());
    return ApiUtils.authenticate({username:username,password:password}).then(token => {
        console.log('Login............ ',token);
        localStorage.setItem('userInfo', token);
        location.href = "/dashboard";
    }).catch(error => {
      throw(error);
    });
  };
}
