export interface VideoDetail {
  keyword: string
  timestamp: string
}

export interface Video {
  _id: string
  title: string
  duration: number
  keywords: string[]
  genres: string[]
  overview: string
  posterUrl: string
  details: VideoDetail[]
}
