import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react";
import { StoryblockCache } from "~/types/remix";

interface Props {
  slug: string;
  cache?: StoryblockCache;
  resolve_relations?: string[];
}

const dev = process.env.NODE_ENV === "development";
export const fetchStoryblokPage = async ({
  slug,
  cache,
  resolve_relations = [],
}: Props) => {
  let story: any;

  let params: ISbStoriesParams = {
    version: dev ? "draft" : "published",
    resolve_relations,
  };

  const storyblokApi = getStoryblokApi();

  if (cache) {
    const cached = await cache.has(slug);
    if (cached) {
      story = JSON.parse(cached.data);

      // dev && console.log("🚀 cache hit");
      // dev && console.log("🚀 cached", cached);
    } else {
      let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
      story = data.story;
      await cache.add(data.id, slug, JSON.stringify(data.story));
    }
  } else {
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
    story = data.story;
  }

  return story;
};
