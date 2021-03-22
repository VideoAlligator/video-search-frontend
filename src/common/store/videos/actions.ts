import { Dispatch } from '@reduxjs/toolkit'
import qs from 'query-string'

import * as api from 'common/api'
import { videos } from 'common/store/videos'

export const getAllVideos = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(videos.actions.setLoading(true))
    const res = await api.client.get(api.paths.URL_VIDEO)
    dispatch(videos.actions.setVideos(res.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(videos.actions.setLoading(false))
  }
}

export const queryVideos = (keyword: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(videos.actions.setLoading(true))
    const query = {
      keyword: keyword.toLowerCase(),
    }
    const res = await api.client.get(
      `${api.paths.URL_VIDEO}?${qs.stringify(query, {
        arrayFormat: 'bracket',
      })}`
    )
    dispatch(videos.actions.setResultedVideos(res.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(videos.actions.setLoading(false))
  }
}

export const getVideoById = (videoId: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(videos.actions.setLoading(true))
    const res = await api.client.get(`${api.paths.URL_VIDEO}/${videoId}`)
    dispatch(videos.actions.setCurrVideo(res.data))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(videos.actions.setLoading(false))
  }
}
