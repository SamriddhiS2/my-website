import { client } from "@/sanity/lib/client";
import BlogPostCard from "@/app/blog/components/BlogPost";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
    title,
    description,
    date,
    "slug":slug.current,
    image
  }`;

  const posts = await client.fetch(query);
  return posts;
}