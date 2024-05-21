import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <span class="logo" style=""></span>
        <span class="title">{title}</span>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.page-title .logo {
  display: inline-block;
  float: left;
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  background-image: url(static/icon.png);
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid var(--lightgray);
}

@media all and (max-width: 600px) {
  .page-title .title {
    display: none;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
