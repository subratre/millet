export const reducers = {
  loadUser: (state) => {
    state.isLoading = true;
  },
  loadUserSuccess: (state, action) => {
    state.isLoading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  loadUserError: (state, action) => {
    state.error = action.payload;
  },
};
