
const defaults = {
  mode: "test",
  debugLevel: "error",
  logFolder: "root"
};

const userSetting = {
  mode: "production",
  debugLevel: "trace"
};

const merged1 = Object.assign({}, defaults, userSetting);
console.log("1. Object.assign():", merged1);


const merged2 = { ...defaults, ...userSetting };
console.log("2. Spread operator:", merged2);

function mergeSettings(base, override) {
  const result = {};
  for (const key in base) {
    result[key] = base[key];
  }
  for (const key in override) {
    result[key] = override[key]; // пріоритет userSetting
  }
  return result;
}

const merged3 = mergeSettings(defaults, userSetting);
console.log("3. Custom merge function:", merged3);
