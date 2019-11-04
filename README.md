# Santhosh Veer Blog 😉

A Simple and Responsive Ghost Blog theme.

- Ghost v3 - <https://ghost.org/3/>
- Ghost theme with Membership Feature - <https://ghost.org/members/>
- Ghost theme for My Personal Blog - Automatically deploy to Ghost Admin Dasboard

## Features 📑

- Responsive (Build using Bulma CSS Framework)
- Ghost Membership - <https://ghost.org/docs/members/introduction/>
- Minimal and Simple Look
- Social Share Buttons
- Social Profile Icons
- user login and Registration form
- Membership Account Page
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
