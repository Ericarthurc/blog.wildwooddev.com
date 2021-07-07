# Changelog

All notable changes to this project will be documented in this file.

Addition of markdown posts will not be versioned or require a changelog update.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

### Removedf

- Capture.png

## [0.1.0-Beta.6] - 2021-07-05

### Added

- Added changelog.md
- Added favicon
- Added head.ejs

### Changed

- Updated main.ts [Ln 31] | process.env.PORT to PORT constant
- Updated blogindex.ejs, blogpost.ejs and 404.ejs to use include(head.ejs)
