# Changelog

All notable changes to this project will be documented in this file.

Addition of markdown posts will not be versioned or require a changelog update.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\

## [0.3.0-Beta.2] - 2021-08-06

### Changed

- main.css | updated look of h1 tags for blog post headers

## [0.3.0-Beta.1] - 2021-08-06

### Changed

- pretty massive frontend ui overhaul, UI v2.0

## [0.2.4-Beta.1] - 2021-07-25

### Changed

- starting ui overhaul | this version will be frontend prioritized and will by subject to a lot of change

## [0.2.3-Beta.9] - 2021-07-23

### Added

- main.css | `.navbar { border-bottom: 1px solid #ff5874; }` | this helps will contrast between the content and the navbar

### Changed

- blogindex.css | adjusted @media sizing for all device sizes
- series.css | adjusted @media sizing for all device sizes
- seriesindex.css | adjusted @media sizing for all device sizes
- blogpost.css | `@media screen and (max-width: 768px) { .blog-container { font-size: 15px; } } `

## [0.2.3-Beta.8] - 2021-07-21

### Added

- main.css | `* { text-rendering: geometricPrecision; }`
- blogpost.css | `.tags { color: #82aaff; }`
- blogpost.ejs | added two spaces after a tag `&#160;&#160;`

### Changed

- main.css | `html { font-family: "Nunito Sans", sans-serif; }` | changed the whole site font
- blogpost.css | moved line-height to `.blog-container p` to avoid weird line-height on `h` tags
- blogpost.ejs | move "tags" into `.blog-container` div

## [0.2.3-Beta.7] - 2021-07-21

### Added

- /public/js/version.js
- end.ejs | added `<script src="/js/version.js"></script>` before service worker

### Changed

- main.css | `html { color: #bec0c4; }` | lighter white for easier reading
- blogpost.css | `.blog-container { line-height: 1.5rem; }` | more space between lines to improve readability
- markdown.css | `pre code.hljs { line-height: 1.5rem; }` | keep line-height the same for code blocks
- moved highlight.min.js to /public/js/
- blogpost.ejs | updated script path for highlight.min.js
- 404.ejs | updated script path for highlight.min.js

### Fixed

- blogpost.ejs | `<%- include('./includes/head', {title: `${blog.header.title} - WildwoodTech`}); -%>` | fixed typo in title passthrough

## [0.2.3-Beta.6] - 2021-07-20

### Changed

- package.json | start script | `"ts-node --transpile-only main.ts"` added `--transpile-only` mode for production

## [0.2.3-Beta.5] - 2021-07-20

### Changed

- blogindex.css | added `:visted` and `:visted:hover` pseudo-classes to `a` tag
- seriesindex.css | added `:visted` and `:visted:hover` pseudo-classes to `a` tag
- series.css | added `:visted` and `:visted:hover` pseudo-classess to `a` tag

## [0.2.3-Beta.4] - 2021-07-17

### Added

- parsers.ts | getSeriesIndexArray() | pass array through a `Set` to remove duplicate values
- tsconfig.json | uncommented `"downlevelIteration": true` to allow Set
- parsers.ts | getSeriesPosts() | returns blog links by series tag

### Changed

- home.route.ts | route all '/' traffic to '/blog' until I can come up with a home page
- navbar.ejs | comment out 'home' '/' link
- series.controller.ts | getSeries() | working route now
- seriesindex.ejs | updated to work with new object
- series.ejs | updated to work with new object
- series.css | added class styles
- updated some blog markdown files with the new 'series' category

## [0.2.3-Beta.3] - 2021-07-16

### Added

- series.ejs
- series.css
- parsers.ts | getSeriesIndexArray method

### Changed

- blog.controller.ts [Ln31] | changed to sending the whole object
- blogpost.ejs | udpated to reflect single object injection
- blogindex.ejs | updated css classes to match other html classes
- blogindex.css | updated class names
- seriesindex.ejs | fixed class name typo, service => seriesindex
- series.css => seriesindex.css | fixed class name typo, service => seriesindex

## [0.2.3-Beta.2] - 2021-07-15

### Added

- /controllers/blog.controller.ts
- /controllers/series.controller.ts

### Changed

- series.ejs => seriesindex.ejs
- moved handlers out of routes and into separate controllers

## [0.2.3-Beta.1] - 2021-07-15

### Added

- Parser v3 allows for better meta data control, and future setup for /series
- js-yaml package

### Changed

- blogindex.ejs | updated blog object fields to match new parser

### Removed

- pug package
- cheerio package
- node-html-parser package

## [0.2.2-Beta.3] - 2021-07-12

### Added

- head.ejs [Ln7] | &lt;meta name="description" content="Wildwood Tech Blog For Learning"&gt;
- /public/robots.txt
- mainfest.json | added 512x512 .png

### Changed

- blogindex.css [Ln39] | .blogindex-container\_\_post a .new { color: #acf876; }
- blogindex.css [Ln53] | .blogindex-container\_\_post a .new:hover { color: #60e772; }
- blogindex.css [Ln22] | .blogindex-container\_\_post { margin-bottom: 14px; }
- logo.svg | updated font to be consistent with site font

## [0.2.2-Beta.2] - 2021-07-11

### Added

- head.ejs | added fonts.googleapis.com link to ubuntu font
- manifest.json | added icon

### Changed

- main.css [Ln 3] | font-family: Ubuntu, sans-serif;

### Removed

- /public/fonts/\*

## [0.2.2-Beta.1] - 2021-07-11

### Added

- /public/js/sw.js | service worker for PWA and caching
- /views/includes/end.ejs | contains script injection for sw.js
- /public/manifest.json
- head.ejs [Ln 8] | &lt;link rel="manifest" href="/manifest.json" /a&gt;

### Changed

- Moved app to PWA with service worker, still needs some metadata work

## [0.2.1-Beta.3] - 2021-07-08

### Changed

- Updated main.ts [Ln 12] | const app = new koa({proxy: true})

## [0.2.1-Beta.2] - 2021-07-07

### Changed

- /public/images/logo.svg

## [0.2.1-Beta.1] - 2021-07-07

### Added

- markdown.css | @media screen and (max-width: 1300px) { code.hljs {
  font-size: 12px;
  }}
- markdown.css | @media screen and (max-width: 768px) { code.hljs {
  font-size: 10px;
  }}
- main.css | .blogindex-container {align-items: center}
- head.ejs
- series.ejs
- home.route.ts
- series.route.ts
- /public/styles/templates | separate css for clearner files

### Changed

- navbar.ejs | &lt;a class="navbar-link <%= path === '/' ? 'active' : '' %>" href="/">Home</a&gt;

## [0.2.0-Beta.1] - 2021-07-05

### Added

- navbar.ejs | added id="navbar" for href=""
- main.css | @keyframes shine on .new class for cool shine effect on release post

### Changed

- main.css | h3 { color: #61aeee; }
- main.css | h4 { color: #56b6c2; }

### Removed

- Capture.png

## [0.1.0-Beta.6] - 2021-07-05

### Added

- Added changelog.md
- Added favicon
- Added head.ejs

### Changed

- Updated main.ts [Ln 31] | process.env.PORT to PORT constant
- Updated blogindex.ejs, blogpost.ejs and 404.ejs to use include(head.ejs)
