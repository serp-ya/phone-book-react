import {
  GET_ALL_USERS,
  ADD_USER,
} from '../actionCreators/usersActionsCreator';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};