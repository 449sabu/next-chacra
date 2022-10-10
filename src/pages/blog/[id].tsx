import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { client } from 'libs/client';
import type { Blog } from 'types/blog';

// Props（blog）の型
type Props = {
  blog: Blog;
};

export default function BlogId({ blog }: Props) {
  console.log(blog);
  return (
    <div className="bg-gray-200">
      <div className="lg:px-10 lg:py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <Image
            className="object-cover w-full shadow-sm h-full"
            src={blog.image.url}
            alt="Sunset in the mountains"
            width="700"
            height="500"
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blog.title}
            </div>
          </div>
          {/* {blog.tags && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{blog.tags}
              </div>
            </div>
          )} */}
          <div className="mt-2">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};

// APIリクエストを行うパスを指定
// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await client.get({ endpoint: 'blog' })
//   const paths = data.contents.map((content) => `/blog/${content.id}`)
//   return { paths, fallback: false }
// }
// microCMSへAPIリクエスト
// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id
//   const data = await client.get({ endpoint: 'blog', contentId: `${id}` })
//   return {
//     props: {
//       blog: data,
//     },
//   }
// }
