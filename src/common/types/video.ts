export interface Annotation {
  keyword: string
  score: number
}

export interface Segment {
  keyword: string
  start: number
  end: number
}

export interface Video {
  _id: string
  title: string
  duration: number
  genres: string[]
  overview: string
  posterUrl: string
  annotations: Annotation[]
  segments: Segment[]
}
