// فقط کامپوننت کامنت صادر می‌شود تا هیچ تداخلی با پلاگین‌های دیگر ایجاد نشود
export { default as CommentsGarden } from "./components/CommentsGarden";

// صادر کردن تایپ آپشن‌های کامپوننت شما
export type { CommentsGardenOptions } from "./components/CommentsGarden";

// Re-export shared types from @quartz-community/types
export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
  PageMatcher,
  PageGenerator,
  VirtualPage,
} from "@quartz-community/types";
