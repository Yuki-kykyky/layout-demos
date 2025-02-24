export const divideFigma = `
根据最外层的<div>标签的data-layer属性, 将当前代码分割为多个代码块。
`;

export const singleFigmaToUI = `
根据当前代码块各元素的嵌套层级，修改当前代码，要求：

1. 如果不存在absolute布局, 则跳过此条指令。存在absolute布局, 则移除现有代码中的 absolute 样式设置，根据目标布局，用 flexbox 实现；
2. 保持当前元素样式，如字体样式、圆角样式、阴影样式等；
3. 将当前代码块抽成组件, 代码块中的图文内容作为参数传入;
4. 替换组件中的基础 html 元素为 mui 组件， 例如<Box>, <Stack>, <Typography>, tailwind 样式以 sx 属性替代;
5. 在保持第4步替换后的组件样式的前提下, 用 mui card 替换;
`;

export const reorgnizeFigmaWithWoopUI = `
根据当前代码块各元素的嵌套层级，修改当前代码，要求：

1. 保持原代码中各元素之间的 margin、padding 等间距，必要时保留 absolute 绝对定位布局。替换原代码为 mui 组件;
2. 寻找匹配的 woop-ui 组件，替换当前代码块中的 mui 组件;
3. 替换后的组件样式与原代码块样式保持一致;
`;
