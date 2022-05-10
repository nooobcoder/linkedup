import { createAsyncThunk } from "@reduxjs/toolkit";

// A mock function to mimic making an async request for data
const fetchCount = createAsyncThunk('post/getCounts', async (amount = 1) => new Promise((resolve) =>
  setTimeout(() => resolve({ data: amount }), 500)
))

export { fetchCount }
