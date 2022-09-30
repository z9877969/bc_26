import { CHANGE_TITLE } from "./helloConstants";

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: title,
});
