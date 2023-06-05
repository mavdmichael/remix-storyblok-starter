import { storyblokEditable } from "@storyblok/react";
import { TeaserStoryblok } from "~/types/component-types-sb";

export const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-6xl text-center">{blok.headline}</h2>
    </div>
  );
};
