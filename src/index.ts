#!/usr/bin/env node

import env from './env';

// can not put inside run, ENOENT
import run from "./run";
run(env);