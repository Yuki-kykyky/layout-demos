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

1. 保留所有的的宽高设置 maxHeight、maxWidth;
2. 如果不存在absolute布局, 则跳过此条指令。存在absolute布局, 则移除现有代码中的 absolute 样式设置，根据目标布局，用 flexbox 实现;
3. 参考 data-layer 属性，优先寻找匹配的 woop-ui 组件, 填充所有props, 必要时调整组件的宽高，图片替换为'/goooose30.jpg';
4. 如果 svg 元素可以用 mui-icon 组件替换，请替换;
5. 用 mui 组件替换原代码块中的 html 元素;
6. 替换后的组件样式与原代码块样式保持一致, 若最终宽高超过第1步设定的 maxHeight、maxWidth, 设置 overflow: hidden;
7. 移除作为分区提示的背景色块和辅助线；
`;

export const fillFigmaLayoutWithWoopUI = `
根据当前代码块各元素的嵌套层级，修改当前代码，要求：

1. 保留当前 box 的宽高设置;
2. 参考 data-layer 属性, 匹配的 [参考图文] 中对应的元素;
3. 根据第2步的匹配结果, 优先寻找匹配的 woop-ui 组件, 并根据匹配结果填充组件 props;
4. 替换组件中的基础 html 元素为 mui 组件， 例如<Box>, <Stack>, <Typography>, tailwind 样式以 sx 属性替代;
5. 移除作为分区提示的背景色块和辅助线;
`;

export const fillTemplateLayoutWithWoopUI = `
根据当前代码块各元素的嵌套层级，修改当前代码，要求：

1. 参考 template 中的文字描述, 匹配的 [参考图文] 中对应的元素;
2. 根据第1步的匹配结果, 优先寻找匹配的 woop-ui 组件, 并根据匹配结果填充组件 props;
3. 替换组件中的基础 html 元素为 mui 组件， 例如<Box>, <Stack>, <Typography>, tailwind 样式以 sx 属性替代;
4. 移除作为分区提示的背景色块和辅助线;
`;
