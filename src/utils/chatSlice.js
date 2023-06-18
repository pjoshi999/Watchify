import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_YOUTUBE_LIVECHAT } from "./config";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.messages.splice(OFFSET_YOUTUBE_LIVECHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addmessage } = chatSlice.actions;

export default chatSlice.reducer;
