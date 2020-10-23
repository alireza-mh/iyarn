## Alternative methods for changing regestiry

### Add `.npmrc`
You can easily add `.npmrc` to your projects and define your new registery like below:
```
registry = [Your repository address]
```
This methods works for both `npm` and `yarn` but you have to add this file to all of your projects so it maybe little troublesome.

### Set global registery
So you can set your default registery for npm with below command:
```sh
npm config set registry https://registry.your-registry.npme.io/
```
and also you can do one of these methods for yarn.
```sh
yarn config set registry <url-to-your-registry>
```
Verify that it has been set by typing the following command:
```sh
yarn config get registry
```
For a one-off change in registry you can use the variable YARN_REGISTRY like this:
```sh
YARN_REGISTRY="<url-to-your-registry>" yarn config get registry
```
So what is a downside of this method? 

In my opinion you have to remember that you have changed your default registery and in case you wan't to publish a library or package to `npm` you need to overide this registery.
[more info](https://stackoverflow.com/questions/49898859/how-to-specify-local-registry-in-yarn)

