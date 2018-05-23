module.exports = {
  // 一行的字符数
  printWidth: 120,

  // true: 使用单引号包裹字符串
  singleQuote: true,

  // false: JSX 标签结尾不独占单一行
  jsxBracketSameLine: false,

  overrides: [
    {
      files: '*.js',
      options: {
        semi: false // 语句结尾不使用分号
      }
    },
    {
      files: '*.jsx',
      options: {
        semi: false // 语句结尾不使用分号
      }
    }
  ]
};
