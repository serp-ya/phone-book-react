import {
  INIT_APP,
  GET_ALL_USERS,
  ADD_USER,
} from '../actionCreators/usersActionsCreator';

import usersStorageEngine from '../services/usersStorageEngine';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_APP: {
      if (payload !== undefined) {
        return usersStorageEngine.getUsers;
      }

      return [];
    }

    case GET_ALL_USERS: {
      return payload;
    }

    default: {
      return state;
    }
  }
};