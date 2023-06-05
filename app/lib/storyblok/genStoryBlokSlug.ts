export const genStoryBlokSlug = (pathname: string) => {
  return pathname === "/" ? "home" : pathname.replace("/", "");
};
