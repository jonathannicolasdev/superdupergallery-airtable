export type ArtistContent = {
  readonly name: string
  readonly username: string
}

export type ArtworkContent = {
  readonly slug?: string
  readonly title?: string
  readonly artist?: string
  readonly imageUrl?: string
  readonly date?: string
  // readonly fullPath: string
}
