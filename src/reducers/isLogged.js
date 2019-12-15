const isLoggedIn = (state = 1000, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 100;
    default:
      return false;
  }
};
export default isLoggedIn;
