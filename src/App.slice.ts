import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CLEANUP_STATE, INITIAL_STATE } from './App.constant'
import { ReviewInfo } from './App.interface'
import { RootState } from './App.store'

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setIsDimmed: (state, { payload }: PayloadAction<boolean>) => {
      state.isDimmed = payload
    },
    setReviewInfo: (state, { payload }: PayloadAction<ReviewInfo>) => {
      state.reviewInfo = payload
    },
    cleanupState: (state) => {
      state = CLEANUP_STATE
    },
  },
})

export const { cleanupState, setIsDimmed, setReviewInfo } = appSlice.actions

export const selectIsDimmed = ({ appSlice }: RootState) => appSlice.isDimmed
export const selectReviewInfo = ({ appSlice }: RootState) => appSlice.reviewInfo

export default appSlice.reducer
