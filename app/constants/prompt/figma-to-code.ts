export const figmaToCode = `
根据现有各元素的嵌套层级，修改当前代码，要求：

1. 如果不存在absolute布局, 则跳过此条指令。存在absolute布局, 则移除现有代码中的 absolute 样式设置，根据目标布局，用 flexbox 实现。
2. 保持当前元素样式，如字体样式、圆角样式、阴影样式等；
3. 将当前代码块抽取组件, 支持传参;
4. 替换组件中的基础 html 元素为 mui 组件， 例如<Box>, <Stack>, <Typography>, tailwind 样式以 sx 属性替代;
5. 在保持第4步替换后的组件样式的前提下, 用 mui card 替换;
`;
