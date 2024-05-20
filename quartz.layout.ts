import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/bborysenko",
      LinkedIn: "https://www.linkedin.com/in/bborysenko",
      Twitter: "https://x.com/b_borysenko",
      RSS: "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    Component.RecentNotes({
      limit: 5,
      filter: (f) =>
        f.slug!.toLowerCase().startsWith("notes/") && f.slug!.toLowerCase() !== "notes/index",
      linkToMore: "Notes/" as SimpleSlug,
    }),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  afterBody: [],
  left: [],
  right: [],
}
