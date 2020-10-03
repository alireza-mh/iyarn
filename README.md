# iyarn
Alternative yarn for iran in case default registiry is not accesseble for various reasons.

## Why
Sometimes you need to install a package and there are network errors with `yarn add` so `iyarn` would come handy here to install your package quickly without changing yarn repository and create `.npmrc` and commit it to your project or using VPN or other methods.

## Usage
```sh
npm install yarn iyarn -g
```
then add your package of choice with `iyarn`.
```sh
iyarn add react react-dom
```
also you can use it without installing iyarn:
```sh
npx iyarn add react
```
