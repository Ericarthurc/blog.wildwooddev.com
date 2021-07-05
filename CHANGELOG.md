# Changelog

All notable changes to this project will be documented in this file.

Addition of markdown posts will not be versioned or require a changelog update.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-Beta.6] - 2021-07-05

### Added

- Added changelog.md
- Added favicon
- Added head.ejs

### Changed

- Updated main.ts [Ln 31] | process.env.PORT to PORT constant
- Updated blogindex.ejs, blogpost.ejs and 404.ejs to use include(head.ejs)