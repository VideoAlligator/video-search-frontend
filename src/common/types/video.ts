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
  runtime: number
  genres: string[]
  overview: string
  posterUrl: string
  trailerUrl: string
  releaseDate: string
  annotations: Annotation[]
  segments: Segment[]
}
