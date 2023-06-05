import { LoaderArgs, V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StoryblokComponent, useStoryblokState } from "@storyblok/react";
import { fetchStoryblokPage, genStoryBlokSlug } from "~/lib/storyblok";

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    { title: `${data.name} | The starter` },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request, context }: LoaderArgs) => {
  const url = new URL(request.url);
  let slug = genStoryBlokSlug(url.pathname);

  // const story = await fetchStoryblokPage({ slug, cache: context.cache });
  const story = await fetchStoryblokPage({ slug });

  return json(story);
};

export default function Index() {
  let story = useLoaderData<typeof loader>();

  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}
