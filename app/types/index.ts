export type ArtistContent = {
  readonly name?: string
  readonly username?: string
}

export type ImageContent = {
  readonly url?: string
}

export type ArtworkContent = {
  readonly slug?: string
  readonly title?: string
  readonly date?: string
  readonly images?: ImageContent[]
  readonly artist?: ArtistContent
}
