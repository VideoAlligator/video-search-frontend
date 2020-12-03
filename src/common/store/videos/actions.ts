import { Dispatch } from '@reduxjs/toolkit'

import * as api from 'common/api'
import { videos } from 'common/store/videos'

export const getVideos = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const res = await api.client.get(api.paths.URL_VIDEO)
    dispatch(videos.actions.setVideos(res.data))
  } catch (err) {
    console.log(err)
  }
}
