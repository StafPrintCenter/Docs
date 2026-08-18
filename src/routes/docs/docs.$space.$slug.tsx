import { createFileRoute, notFound } from "@tanstack/react-router";
import { resolveArticle } from "@/data/docs-registry";
import { DocsViewer } from "@/components/pages/docs/DocsViewer";

export const Route = createFileRoute("/docs/docs/$space/$slug")({
  loader: ({ params }) => {
    const resolved = resolveArticle(params.space, params.slug);
    if (!resolved) throw notFound();
    return {
      title: resolved.article.title,
      description: resolved.article.description,
      spaceName: resolved.space.name,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article introuvable — STAF Docs" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — ${loaderData.spaceName} | STAF Docs`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { space, slug } = Route.useParams();
  const resolved = resolveArticle(space, slug);
  if (!resolved) return null;
  return <DocsViewer resolved={resolved} />;
}
