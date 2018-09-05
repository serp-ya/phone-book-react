export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';


export const reduxGetAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const reduxAddUser = (userData) => ({
  type: ADD_USER,
  payload: userData,
});
