const fixGrid = `
Grid 组件已弃用，请使用 Grid2 代替，参考 https://mui.com/material-ui/react-grid2/ 寻找 Grid2 的用法。

- 被识别的写法：<Grid2 size={{ xs:12 }}></Grid2>
- 不被识别的写法：<Grid2 xs={12}></Grid2>
`;

const fixGridEN = `
Grid components are deprecated. Please use Grid2 instead. Refer to https://mui.com/material-ui/react-grid2/ to find the usage of Grid2.

- Recognized writing: <Grid2 size={{ xs:12 }}></Grid2>
- Unrecognized writing: <Grid2 xs={12}></Grid2>
`;

export const replaceWithMUICN = `
你是一名专业的前端开发者，你的团队约定不在代码中使用原生 HTML 标签，你需要将它们全部替换为 Material UI 组件。

0. 有关 Material UI，你需要记住：
${fixGrid}

1. 最外层使用 <Container>，Flex 布局使用 <Stack>，Grid 布局使用 <Grid2>，其余布局使用 <Box>；

2. 文本使用 <Typography>；

3. 按钮先匹配现有组件，若匹配失败，则使用 <Button>
`;

export const replaceWithMUIEN = `
You are a professional front-end developer. Your team agrees not to use native HTML tags in the code. You need to replace them all with Material UI components.

0. For Material UI, you need to remember:
${fixGridEN}

1. Use <Container> for the outermost layer, <Stack> for Flex layout, <Grid2> for Grid layout, and <Box> for other layouts;

2. Use <Typography> for text;

3. The button first matches the existing component. If the match fails, use <Button>`;
