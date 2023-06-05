import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblok } from "~/types/component-types-sb";

export const Feature = ({ blok }: { blok: FeatureStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-xl font-bold">{blok.name}</h2>
    </div>
  );
};
