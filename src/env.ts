const registry: string = 'https://npm.jamko.ir';
const MIRROR_URL: string = 'https://download.jamko.ir';

const env = {
  SASS_BINARY_SITE: `${MIRROR_URL}/node-sass`,
  npm_config_registry: registry,
  yarn_registry: registry,
};

export default env;