import { client } from "@/sanity/lib/client";
import BlogPostHeader from "./components/BlogPostHeader";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";

async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug] {
    title,
    description,
    date,
    "slug":slug.current,
    image,
    content
  }`;

  const posts = await client.fetch(query, { slug });
  return posts;
}

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).blur(10).fit("max").auto("format").url()}
      width={width}
      height={height}
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <>
      <div className="mx-auto max-w-prose space-y-8 py-8">
        <BlogPostHeader post={post} />
        <hr className="border-primary-200" />
        <article className="prose md:prose-md prose-primary mx-auto">
        <PortableText value={post.body} components={portableTextComponents} />
        </article>
      </div>
    </>
  );
}