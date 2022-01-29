export const combineArtists = (
  artistNames: String[],
  artistUsernames: String[]
) =>
  artistNames.map((name, index) => ({
    name: name,
    username: artistUsernames[index],
  }))

export const combineArtworks = (
  artworkTitles: String[],
  artworkSlugs: String[],
  artworkImages: any[]
) =>
  artworkTitles.map((title, index) => ({
    title: title,
    slug: artworkSlugs[index],
    image: artworkImages[index]?.url,
  }))
