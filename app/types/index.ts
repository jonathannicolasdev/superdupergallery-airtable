export type ArtistContent = {
  readonly id?: string
  readonly name?: string
  readonly username?: string
  readonly artworks?: ArtworkContent[]
}

export type ImageContent = {
  readonly id?: string
  readonly url?: string
}

export type ArtworkContent = {
  readonly id?: string
  readonly slug?: string
  readonly title?: string
  readonly date?: string
  readonly images?: ImageContent[]
  readonly artists?: ArtistContent[]
}

export type ExhibitionContent = {
  readonly id?: string
  readonly slug?: string
  readonly title?: string
  readonly date?: string
  readonly coverImage?: ImageContent
  readonly description?: string
  readonly artists?: ArtistContent[]
  readonly artworks?: ArtworkContent[]
}
