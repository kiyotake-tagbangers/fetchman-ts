## TS Fetchman

### prepare

```shell
$ mv .env.sample .env
$ vi .env
```

### Build

```shell
$ npm

$ npm i
```

※If you don't use `git clone` Only first time

```shell
$ npm init y

# save records package.json
# i(not save) records package-lock.json only
# dev only records dev env config
$ npm i --save nodemon typescript axios @types/node @types/express dotenv
```

### Compile

```shell
# for tsconfig.json creation
$ tsc --init
$ tsc
```

### RUN

```shell
$ nodemon ./dist/index.js
```

- Access localhost

```
http://localhost:3000/
```