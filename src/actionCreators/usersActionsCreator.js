export const INIT_APP = 'INIT_APP';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';

export const reduxInitApp = () => ({
  type: INIT_APP,
});

export const reduxGetAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const reduxAddUser = (userData) => ({
  type: ADD_USER,
  payload: userData,
});
