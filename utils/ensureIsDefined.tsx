export const ensureIsDefined = function <T>(arg: T | undefined | null) {
  if (arg === undefined || arg === null)
    throw new Error("arg is undefined unexpectedly");
  return arg;
};
