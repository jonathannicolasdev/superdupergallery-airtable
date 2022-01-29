export const combineArtistData = (
  artistNames: String[],
  artistUsernames: String[]
) =>
  artistNames.map((name, index) => ({
    name: name,
    username: artistUsernames[index],
  }))
