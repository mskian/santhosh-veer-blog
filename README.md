# Santhosh Veer Blog

Ghost theme with Membership Feature

Ghost theme for My Personal Blog - Automatically deploy to Ghost Admin Dasboard

## Features

- Responsive (Build using Bulma CSS Framework)
- Ghost Membership
- Minimal and Simple Look
- Social Share Buttons
- Social Profile Icons
- user login and Registration form
- Membership Dashboard
- Paid Membership (Soon)
- Many More Features Coming Soon...

## Development

- Install Modules via `yarn`

```bash
yarn
```

- Workflow

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

- Enable Members Pages - Upload the routes file on Lab Section

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

## LICENSE

MIT
