const initializePage = `
如果是静态路由匹配，初始页面代码参考结构如下：
---
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            {pathName}
          </Typography>
          <BlogsSection />
        </Box>
      </Container>
---

如果是动态路由匹配，初识页面代码参考结构如下：
---
interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default async function PropertyPage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  return (
      <div>{resolvedParams.id}</div>
  );
}
---
`;

const fixGrid = `
Grid 组件已弃用，请使用 Grid2 代替，参考 https://mui.com/material-ui/react-grid2/ 寻找 Grid2 的用法。

- 被识别的写法：<Grid2 size={{ xs:12 }}></Grid2>
- 不被识别的写法：<Grid2 xs={12}></Grid2>
`;

const matchProps = `
你需要从提供的 props 文件中获取对应的填充图文信息，并对 props 进行解构。

- 例如：

const { title, subtitle, verticalCard, horizontalCard } = sectionBProps;

你需要将这些信息填充到对应的组件中。

- 例如：

<Typography variant={title.variant} textAlign="center" color="text.primary" fontWeight={600} mb={1}>
  {title.content}
</Typography>
`;

export const replaceWithMUI = `
你是一名专业的前端开发者，你的团队约定不在代码中使用原生 HTML 标签，你需要将它们全部替换为 Material UI 组件。

1. 【布局调整】最外层使用 <Container>，Flex 布局使用 <Stack>，Grid 布局使用 <Grid2>，其余布局使用 <Box>；

1.1 如果 Grid 使用出现问题，参考${fixGrid};

2. 【自有组件匹配】优先根据提供的 UI index 文件，搜寻匹配的 UI 组件进行替换；

3. 【Material UI Icon 匹配】Icon 先从 @mui/icons-material 库中寻找匹配，如果不存在则自行绘制 svg；

4. 【Material UI 组件替换】将前3步未覆盖到的 HTML 标签替换为 Material UI 组件。
`;

export const matchCTA = `
你需要从提供的 references 文件中获取对应特殊事件。

- 案例一，例如：

{ cta_button: { path: '/properties'} },

即需要寻找匹配的 button 并传递 路由跳转至对应的 path 的 onClick 事件。

你需要将这些信息填充到对应的组件中。

匹配返回的代码结果应该如下：
---
const router = useRouter();

const handleClick = () => {
  router.push(properties.cta_button.path);
};

...

<WoopBtn onClick={handleClick}>
  All Properties
</WoopBtn>
---

- 案例二，例如：

card_item: { dynamic_path: "/properties/:id" },

即需要寻找匹配的 card item 并传递 路由跳转至对应的 path 的 onClick 事件。

如果 dynamic_path 对应的路径文件尚未存在，执行${initializePage},

匹配返回的代码结果应该如下：
---
const router = useRouter();

const handleCardClick = (id: string) => {
  router.push(properties.card_item.dynamic_path.replace(":id", id));
};

...

<Box
  onClick={() => handleCardClick(card.id)}
  sx={{ cursor: "pointer" }}
>
  <VerticalCard {...card} />
</Box>
---


`;

export const matchAndReplace = `
第一步，${matchProps}, 

第二步，${replaceWithMUI}
`;

export const fullMatch = `
第一步，${matchProps}, 

第二步，${replaceWithMUI},

第三步，${matchCTA},
`;
