import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import wikilinks from "markdown-it-wikilinks";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nukeguys",
  description: "Record unorganized thoughts. Keep organized notes.",

  markdown: {
    config: (md: any) => {
      md.use(
        wikilinks({
          baseURL: "/",
          relativeBaseURL: "./",
          suffix: "",
          generatePageNameFromLabel: (label: string) => {
            return label;
          },
          postProcessPageName: (pageName: string) => {
            return pageName.trim();
          },
        }),
      );
    },
  },

  // _로 시작하는 폴더 제외
  srcExclude: ["**/_*/**", "**/_*.md"],

  // sitemap
  sitemap: {
    hostname: "https://journal.kkick.xyz",
  },

  // 마지막 수정일 표시
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Learn", link: "/learn/" },
    ],

    // 사이드바 자동 생성
    sidebar: generateSidebar([
      {
        documentRootPath: "docs",
        scanStartPath: "notes",
        basePath: "/notes/",
        resolvePath: "/notes/",
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        rootGroupText: "Notes",
        rootGroupLink: "/",
        collapsed: true,
        excludePattern: ["index.md"],
      },
      {
        documentRootPath: "docs",
        scanStartPath: "learn",
        basePath: "/learn/",
        resolvePath: "/learn/",
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        rootGroupText: "Learn",
        rootGroupLink: "/",
        collapsed: true,
        excludePattern: ["index.md"],
      },
    ]),

    socialLinks: [
      { icon: "github", link: "https://github.com/nukeguys" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/seungkyu-sung" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Built with VitePress",
      copyright: "© 2026 nukeguys",
    },

    outline: {
      level: "deep",
    },

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
  },
});
