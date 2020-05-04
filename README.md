# Middleman Template
![GitHub Actions](https://github.com/jorgenkrieger/Middleman-Template/workflows/Push/badge.svg)

This repo contains an extensive template for [Middleman](https://www.middlemanapp.com), running in a [Docker](https://www.docker.com) environment.<br>
In this setup you'll find Webpack with support for Sass/SCSS, TypeScript and testing via Jest.</p>

## Installation
_**Prerequisites:** Docker_

Simply clone this repo and run the actions at **Usage** to start developing
```
git clone git@github.com:JorgenKrieger/Blank-Middleman.git
```


## Usage
The package provides tools for every aspect of development, from local development environment to testing and deployment.

### Development
| Action | Run command... |
| - | - |
| Local server | `docker-compose up serve` |
| Local testing | `docker-compose up test` |
| Build | `docker-compose up build` |

#### Helper containers
For easy access to node modules and ruby gem you can use the following helper containers.

| Helper container | Run command... |
| - | - |
| NPM | `docker-compose run npm ...` |
| Gem | `docker-compose run gem ...` |

### Testing & deployment
The `.github/workflows` folder contains two preset workflows for automated testing and deployment to Amazon S3 buckets. For this to function, add the following variables to your repository secrets.

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_REGION`
- `AWS_BUCKET`

## License
![GitHub](https://img.shields.io/github/license/jorgenkrieger/Middleman-Template)<br>
Released 2020 by <a href="https://www.github.com/jorgenkrieger">J&ouml;rgen Krieger