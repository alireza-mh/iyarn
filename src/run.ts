import spawn from "cross-spawn";

export default function (env: any) {
  const processEnv = process.env;
  for (const k in processEnv) {
    if (!processEnv.hasOwnProperty(k) || env[k]) {
      continue;
    }
    env[k] = processEnv[k];
  }
  spawn("yarn", process.argv.slice(2), {
    env: env,
    cwd: process.cwd(),
    stdio: "inherit",
  }).on("exit", function (code: any) {
    process.exit(code);
  });
}
