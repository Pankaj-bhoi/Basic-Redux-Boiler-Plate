import { createStore } from 'redux';
import reducer from "../reducers";

const initalState = {
    type: "SET_TECHNOLOGY",
    tech: "React-Redux"
}
export const store = createStore(reducer, initalState);