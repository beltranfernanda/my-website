import { getAbsoluteURL } from './common/util.js';
import { config } from './config.js';

const url = getAbsoluteURL(config.home);
window.location.replace(url);