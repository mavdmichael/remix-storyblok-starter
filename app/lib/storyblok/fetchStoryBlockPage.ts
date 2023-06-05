import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react";

interface Props {
  slug: string;
  resolve_relations?: string[];
}

export const fetchStoryblokPage = async ({
  slug,
  resolve_relations = [],
}: Props) => {
  let params: ISbStoriesParams = {
    version: "draft",
    // resolve_relations: "coworkerlist.coworkers",
    resolve_relations,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return data.story;
};
