var ApiUtils = {
    authenticate: function (userData) {
        return new Promise((resolve, reject) => {fetch('http://localhost:57421/api/AccessToken', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,
                grant_type:"password"
            }),
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    //return(response);
                    resolve(Object.assign({}, response));
                } else {
                    const error = new Error(response.statusText);
                    // error.response = response;
                    // return.loginError();
                    // throw error;
                }
            })
            .catch(error => { console.log('request failed', error); });
    });}
};

module.exports = ApiUtils;