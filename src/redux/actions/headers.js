import store from '../store';

const headers = () => {
    const authUser = store.getState();
    let Authorization = '';
    if (authUser.auth.isAuthenticated == true) {
        Authorization = `${authUser.auth.jwtToken ? authUser.auth.jwtToken : null}`;
    }

    let axiosConfigHeaders = {
        headers: {
            "Authorization": Authorization,
        }
    };
    return axiosConfigHeaders;
};
export default headers;