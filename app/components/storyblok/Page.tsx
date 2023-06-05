import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { PageStoryblok } from "~/types/component-types-sb";

export const Page = ({ blok }: { blok: PageStoryblok }) => (
  <main
    {...storyblokEditable(blok)}
    className="flex flex-col space-y-20 w-full max-w-6xl justify-center"
  >
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
