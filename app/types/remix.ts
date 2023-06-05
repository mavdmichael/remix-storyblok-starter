import "@remix-run/node";
import type { DataFunctionArgs } from "@remix-run/node";

declare module "@remix-run/node" {
  export interface LoaderArgs extends DataFunctionArgs {
    context: {
      cache: StoryblockCache;
    };
  }

  export interface ActionArgs extends DataFunctionArgs {
    context: {
      cache: StoryblockCache;
    };
  }
}

export type StoryblockCache = {
  has: (slug: string) => Promise<{
    id: number;
    external_id: number;
    slug: string;
    data: string;
    expiration: number;
  }>;
  add: (
    external_id: number,
    slug: string,
    data: string,
    expiration?: number
  ) => void;
  clear: () => void;
};
