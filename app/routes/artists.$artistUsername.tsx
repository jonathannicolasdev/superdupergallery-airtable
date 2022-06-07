import { gql } from "@urql/core";
import { json, LoaderFunction, useLoaderData } from "remix";
import { Hero, AnimatedHeading, Center, ArtworkList } from "~/components";
import { airtableFetch, graphcmsClient } from "~/lib";
import { ArtistContent, ArtworkContent } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  const { artistUsername } = params;
  // console.log({ artistUsername })

  const queryArtistByUsername = gql`
    query ArtistByUsername($username: String!) {
      artist(where: { username: $username }) {
        id
        name
        username
        artworks {
          id
          slug
          title
          date
          images {
            url(transformation: { image: { resize: { width: 500 } } })
          }
          artists {
            id
            username
            name
          }
        }
      }
    }
  `;

  const response = await graphcmsClient
    .query(queryArtistByUsername, { username: artistUsername })
    .toPromise();
  const { artist } = response.data;

  return json(artist);
};

export default function ArtistUsernamePage() {
  const artist = useLoaderData();

  return (
    <div>
      <Hero>
        <AnimatedHeading sentence={artist.name} />
      </Hero>

      <Center>
        <ArtworkList artworks={artist.artworks} />
      </Center>
    </div>
  );
}
