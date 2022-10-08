//https://zenn.dev/elletech/articles/nextjs_microcms
import Image from 'next/image'
import Link from 'next/link'
import { client } from 'libs/client'
import type { Blog, Tag } from 'types/blog'

export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: 'blog',
  })
  const tag = await client.get({
    endpoint: 'tag',
  })
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  }
}

type Props = {
  blogs: Array<Blog>
  tags: Array<Tag>
}

export default function Test({ blogs }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div className="rounded overflow-hidden shadow-lg" key={blog.id}>
            <Image
              className="w-full"
              src={blog.image.url}
              alt="Sunset in the mountains"
              width="300"
              height="200"
            />
            <Link href={`/blog/${blog.id}`}>
              <div className="px-6 py-4">{blog.title}</div>
            </Link>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Cardano
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
