const initailState: { count: number } = {
  count: 0,
};

const CounterValue = (state = initailState, action: { type: string }) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "deceament":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default: {
      return state;
    }
  }
};

export default CounterValue;
