export default {
  name: "index",
  state: {
    welcome: "Hello, world.",
    num: 0,
  },
  reducers: {
    updata(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
