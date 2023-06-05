# Welcome to this Remix Storyblok starter!

- [Remix Docs](https://remix.run/docs)
- [Storyblok Docs](https://www.storyblok.com/docs)

## Installed packages

- Tailwind - basic conf, stylesheet located .app/styles/tailwind.css

## Initial setup

### 1. Localhost https

First, install [homebrew](https://docs.brew.sh/Installation), then create a self signed cert.

```
brew install mkcert
mkcert -install
```

In the root-folder of this project, run

```
mkcert localhost
```

Then install [local-ssl-proxy]() globally to act as a proxy.

```
npm install -g local-ssl-proxy
```

A package.json script is already set up to serve as a proxy for https://localhost:3010 -> http://localhost:3000, this can be configured in ./ssl.config.json

```
{
  "LocalHttps": {
    "hostname": "localhost",
    "source": 3010,
    "target": 3000,
    "cert": "localhost.pem",
    "key": "localhost-key.pem"
  },
  "LocalLiveReload": {
    "hostname": "localhost",
    "source": 8012,
    "target": 8002,
    "cert": "localhost.pem",
    "key": "localhost-key.pem"
  }
}
```

### 2. Set up storyblock

Create a new space, then;

- rename .env.example -> .env
- replace the keys, space id and region
- replace the accesstoken in root.tsx

Storyblok components live in the _./app/components/storyblok_ folder.

**that's it**... Go make your app/page/site/thing.

---

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
