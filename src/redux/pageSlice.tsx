import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pageIndex: 0,
}

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: state => {
      state.pageIndex++
    },
    prevPage: state => {
      state.pageIndex = Math.max(0, state.pageIndex - 1)
    },
  },
})

export const { nextPage, prevPage } = pageSlice.actions
export default pageSlice.reducer