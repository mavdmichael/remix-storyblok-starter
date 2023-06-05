import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";

export const loader = ({ context }: LoaderArgs) => {
  context.cache.clear();
  return redirect("/");
};

export const action = ({ request, context }: ActionArgs) => {
  console.log("WEBBHOOK BODY: ", request.body);
  context.cache.clear();
  return redirect("/");
};
