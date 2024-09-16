import React, { createContext, useReducer, useContext, useEffect } from "react";

const TrafficLightContext = createContext();

const initialState = {
  currentLight: "green",
  pedestrianRequest: false,
  countdown: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LIGHT":
      return {
        ...state,
        currentLight: action.payload.light,
        countdown: action.payload.countdown,
      };
    case "REQUEST_CROSSING":
      return {
        ...state,
        pedestrianRequest: true,
      };
    case "RESET_CROSSING":
      return {
        ...state,
        pedestrianRequest: false,
      };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    const changeLight = () => {
      if (state.currentLight === "green") {
        dispatch({
          type: "CHANGE_LIGHT",
          payload: { light: "yellow", countdown: 3 },
        });
      } else if (state.currentLight === "yellow") {
        dispatch({
          type: "CHANGE_LIGHT",
          payload: { light: "red", countdown: 7 },
        });
      } else if (state.currentLight === "red") {
        if (state.pedestrianRequest) {
          setTimeout(() => {
            dispatch({ type: "RESET_CROSSING" });
            dispatch({
              type: "CHANGE_LIGHT",
              payload: { light: "green", countdown: 10 },
            });
          }, 5000);
        } else {
          dispatch({
            type: "CHANGE_LIGHT",
            payload: { light: "green", countdown: 10 },
          });
        }
      }
    };

    timer = setTimeout(() => {
      changeLight();
    }, state.countdown * 1000);

    return () => clearTimeout(timer);
  }, [state.currentLight, state.pedestrianRequest, state.countdown]);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLightContext = () => useContext(TrafficLightContext);
