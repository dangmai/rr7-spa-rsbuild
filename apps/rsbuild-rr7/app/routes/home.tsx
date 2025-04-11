import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "React Router Demo" },
    { name: "description", content: "A modern React Router demo application" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>Hello from RSPack</>;
}
