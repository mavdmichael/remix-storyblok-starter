import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { apiPlugin, storyblokInit } from "@storyblok/react";
import components from "./components/storyblok";
import tailwindStyles from "./styles/tailwind.css";

storyblokInit({
  accessToken: "3fwGlDgJOnUEw3JBRVVJZgtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: tailwindStyles }]),
];

export const loader: LoaderFunction = ({ request }) => {
  return {
    isSSL: request.headers.get("x-forwarded-proto") === "https",
  };
};

export default function App() {
  const { isSSL } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={isSSL ? 8012 : 8002} />
      </body>
    </html>
  );
}
