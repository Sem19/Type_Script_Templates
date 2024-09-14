import { characterReducer } from "@/enteties/character/model/reducer/characterReducer";
import { episodeReducer } from "@/enteties/episode/model/reducer/episodeReducer";
import { locationReducer } from "@/enteties/location/model/reducer/locationReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk as ThunkMiddleware } from "redux-thunk";

export const createReduxStore = () => {
  const reducers = {
    character: characterReducer,
    episode: episodeReducer,
    location: locationReducer,
  };

  const combinedReducers = combineReducers(reducers);

  // @ts-expect-error
  const store = createStore(combinedReducers, applyMiddleware(ThunkMiddleware));

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
