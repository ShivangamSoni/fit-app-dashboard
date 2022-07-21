import { createContext, useCallback, useContext, useReducer } from "react";

import USER_DATA from "../data/UserData.json";

const UsersContext = createContext({
  users: [],
  incrementSteps: () => {},
  decrementSteps: () => {},
  incrementCalories: () => {},
  decrementCalories: () => {},
});

const ACTION_TYPES = {
  INCREMENT_STEPS: "INCREMENT_STEPS",
  DECREMENT_STEPS: "DECREMENT_STEPS",
  INCREMENT_CALORIES: "INCREMENT_CALORIES",
  DECREMENT_CALORIES: "DECREMENT_CALORIES",
};

function reducer(state, { type, payload }) {
  const newState = [...state];

  switch (type) {
    case ACTION_TYPES.INCREMENT_STEPS: {
      const { id } = payload;
      const index = newState.findIndex((user) => user.userId === id);
      newState[index].stepsTarget = newState[index].stepsTarget + 500;
      return newState;
    }
    case ACTION_TYPES.DECREMENT_STEPS: {
      const { id } = payload;
      const index = state.findIndex((user) => user.userId === id);
      newState[index].stepsTarget = newState[index].stepsTarget - 500 || 500;
      return newState;
    }
    case ACTION_TYPES.INCREMENT_CALORIES: {
      const { id } = payload;
      const index = newState.findIndex((user) => user.userId === id);
      newState[index].calorieTarget = newState[index].calorieTarget + 500;
      return newState;
    }
    case ACTION_TYPES.DECREMENT_CALORIES: {
      const { id } = payload;
      const index = state.findIndex((user) => user.userId === id);
      newState[index].calorieTarget =
        newState[index].calorieTarget - 500 || 500;
      return newState;
    }
    default:
      return newState;
  }
}

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, USER_DATA);

  const incrementSteps = useCallback(
    (id) => dispatch({ type: ACTION_TYPES.INCREMENT_STEPS, payload: { id } }),
    [],
  );

  const decrementSteps = useCallback(
    (id) => dispatch({ type: ACTION_TYPES.DECREMENT_STEPS, payload: { id } }),
    [],
  );

  const incrementCalories = useCallback(
    (id) =>
      dispatch({ type: ACTION_TYPES.INCREMENT_CALORIES, payload: { id } }),
    [],
  );

  const decrementCalories = useCallback(
    (id) =>
      dispatch({ type: ACTION_TYPES.DECREMENT_CALORIES, payload: { id } }),
    [],
  );

  const value = {
    users: state,
    incrementSteps,
    decrementSteps,
    incrementCalories,
    decrementCalories,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersCtx = () => useContext(UsersContext);

export default UsersProvider;
