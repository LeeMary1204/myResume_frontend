import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "w1h2v7s6",
    dataset: 'production',
    useCdn: true,
    token: 'skDOfs0uOXDETFshQO6XYANzALM4eZzPaUMWO1WLsWEXfAirmOzc7nGRB5xvWkJvASTAelntWwntLxHZmjgIFqwM8Xhe3nc3KVtgoeiJcfkcne5uVTDInuJ6bSopyraw784FHjcfa41s4H3wUjoFMhIwLE4JY81e0ApbijAK6R3oZ8vOnqlC',
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);