import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { GridStoryblok } from "~/types/component-types-sb";

export const Grid = ({ blok }: { blok: GridStoryblok }) => (
  <ul {...storyblokEditable(blok)} className="grid grid-cols-3 gap-8">
    {blok.columns?.map((blok) => (
      <li key={blok._uid} className="text-center">
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);
