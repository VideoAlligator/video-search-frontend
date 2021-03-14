import { Dispatch } from '@reduxjs/toolkit'
import qs from 'query-string'
import { AxiosResponse } from 'axios'

import * as api from 'common/api'
import { videos } from 'common/store/videos'
import { Video } from 'common/types/video'

export const getAllVideos = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const res = await api.client.get(api.paths.URL_VIDEO)
    dispatch(videos.actions.setVideos(res.data))
  } catch (err) {
    console.log(err)
  }
}

interface VideosResponse extends AxiosResponse {
  videos?: Video[]
}

export const queryVideos = (keyword: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const query = {
      keyword: keyword.toLowerCase(),
    }
    const res: VideosResponse = await api.client.get(
      `${api.paths.URL_VIDEO}?${qs.stringify(query, {
        arrayFormat: 'bracket',
      })}`
    )
    dispatch(videos.actions.setResultedVideos(res.data))
  } catch (err) {
    console.log(err)
  }
}
