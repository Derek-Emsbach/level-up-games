const defaultState = {};

const LOAD_USERS = "user/LOAD_USERS"
const LOAD_OTHER_USERS = "user/LOAD_OTHER_USERS";

const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

const loadOtherUsers = (users) => {
  return {
    type: LOAD_OTHER_USERS,
    users,
  };
};

export const getAllUsersThunk = () => async (dispatch) => {
  const res = await fetch(`/api/users`);

  if (res.ok) {
    const user = await res.json();
    dispatch(loadUsers(user));
    return user;
  }
}

export const getOneUserThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);

  if (res.ok) {
    const user = await res.json();
    dispatch(loadOtherUsers([user]));
    return user;
  }
};



const usersReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {

    case LOAD_USERS:
			return { ...newState, ...action.payload };

    case LOAD_OTHER_USERS:
      action.users.forEach((user) => {
        newState[user.id] = user;
      });

      return newState;

    default:
      return state;
  }
};

export default usersReducer;
