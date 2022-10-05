import { createAction } from "@reduxjs/toolkit";

export const actionDecrement = createAction("counter/decrement");
export const actionIncrement = createAction("counter/increment/test");
export const actionReset = createAction("counter/reset");
