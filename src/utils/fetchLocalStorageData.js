export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'indefibed'
        ? JSON.parse(localStorage.getItem('user'))
        : localStorage.clear();

        return userInfo;
}