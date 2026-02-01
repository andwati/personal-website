import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";
import remarkGfm from "remark-gfm";

export interface Content<TMetadata = { [key: string]: any }> {
  metadata: TMetadata;
  content: string;
}

export type MaybeContent<TMetadata> = Content<TMetadata> | undefined;

export async function getMdxContent<TMetadata>(
  ...paths: string[]
): Promise<MaybeContent<TMetadata>> {
  const contentPath = path.join(process.cwd(), "content", ...paths);

  if (!fs.existsSync(contentPath)) {
    return undefined;
  }

  const content = fs.readFileSync(contentPath, "utf-8");

  const source = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      development: false,
    },
  });


  const footnotes =  /_jsx\(_components.h2, {.*?children: "Footnotes".*?}\), "\\n", /gs;
  const hr = ``
  const compiledSource = source.compiledSource.replace(footnotes, hr);

  return{
    metadata: source.frontmatter as TMetadata,
    content: compiledSource,
  }
  
}
