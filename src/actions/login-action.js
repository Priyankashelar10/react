import ApiUtils from '../../utils/api-utils';
import * as types from './action-types';

// export function loadAuthorsSuccess(authors) {
//   return {type: types.LOAD_AUTHORS_SUCCESS, authors};
// }

export function authenticate() {
  return dispatch => {
    //dispatch(beginAjaxCall());
    return ApiUtils.authenticate({username:'admin',password:"password"}).then(token => {
        console.log('Login............ ',token);
        location.href = "/dashboard";
      //dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
