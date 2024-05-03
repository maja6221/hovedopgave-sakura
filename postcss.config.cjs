const postcssjitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
const postcssNesting = require("postcss-nesting");
module.exports = {
    plugins: [postcssNesting, postcssjitProps(OpenProps)],
};