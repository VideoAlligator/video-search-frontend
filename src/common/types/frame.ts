export interface Frame {
  _id: string
  videoName: string
  keyword: string
  //   img: { data: Buffer; contentType: string }
  img: { data: any; contentType: string }
}
