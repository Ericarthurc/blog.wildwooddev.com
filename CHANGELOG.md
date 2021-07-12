# Changelog

All notable changes to this project will be documented in this file.

Addition of markdown posts will not be versioned or require a changelog update.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
