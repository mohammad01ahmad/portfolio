const { transform } = require("framer-motion");
const t = transform([0, 1], ["-100vh", "0vh"]);
console.log(t(0.5));
