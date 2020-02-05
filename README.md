# Santhosh Veer Blog 😉

![Uptime Robot status](https://img.shields.io/uptimerobot/status/m777825813-ba00128268f41a778c9cda9a) [![devDependencies Status](https://david-dm.org/mskian/santhosh-veer-blog/dev-status.png)](https://david-dm.org/mskian/santhosh-veer-blog?type=dev) [![Github Workflow](https://github.com/mskian/santhosh-veer-blog/workflows/Test/badge.svg)](https://github.com/mskian/santhosh-veer-blog/actions)  

A Simple and Responsive Ghost Blog theme.

- Ghost v3 - <https://ghost.org/3/>
- Ghost theme with Membership Feature - <https://ghost.org/members/>
- Ghost theme for My Personal Blog - Automatically deploy to Ghost Admin Dasboard

## Features 📑

> ⚠ Post Editor Feature - CSS Styling only Written for Markdown Editor Me Personally Love Markdown Editor.CSS are not Properly written for `Koenig` Editor me Just add Example CSS Codes - <https://github.com/mskian/santhosh-veer-blog/blob/401b97e84d1d6260118683c65ff6646cbe65de5c/assets/css/style.css#L379>  

- Responsive (Build using Bulma CSS Framework)
- Ghost Membership - <https://ghost.org/docs/members/introduction/>
- Minimal and Simple Look
- Social Share Buttons
- Social Profile Icons
- user login and Registration form
- Membership Account Page
- Cookie Notice - <https://wpspeedmatters.com/fastest-cookie-consent-wordpress-plugin/>
- Paid Membership (Soon)
- Many More Features Soon...

## Development 🛠

- Download or install via git on your Ghost theme Directory `/content/themes/`

```bash
git clone https://github.com/mskian/santhosh-veer-blog.git
```

- Install Modules via `yarn`

```bash
yarn
```

- Workflow ⚙

```bash
## Development (Run build & watch for changes)
yarn dev
```

```bash
## Build
yarn buld
```

```bash
## Gscan
yarn test
```

```bash
## Bundle the theme to zip for Production use
yarn zip
```

- Enable Members Pages - Login to your Ghost Admin Dashboard and Upload this routes file on Lab Section

`routes.yaml`

```yaml
routes:
  /signup/: members/signup
  /signin/: members/signin
  /account/: members/account

collections:
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

## LICENSE 📜

MIT
