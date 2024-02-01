"use client";
import RelatedPost from "@/components/Blog/RelatedPost";
import BlogSearch from "@/components/Blog/BlogSearch";
import TagButton from "@/components/Blog/TagButton";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

const BlogSidebarPage = ({ params: { lang } }) => {
  const { dictionary } = getDictionaryUseClient(lang);
  const uniqueTags = Array.from(
    new Set(dictionary.blog.BlogPost.flatMap((blog) => blog.tags)),
  );

  return (
    <>
      <Breadcrumb
        pageName={dictionary.blog.title}
        description={dictionary.blog.descripition}
      />
      <section className="mb-10 overflow-hidden pb-[120px] pt-[18px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
                {dictionary.blog.BlogPost.map((blog) => (
                  <div key={blog.id} className="w-full">
                    <SingleBlog
                      blog={{
                        ...blog,
                        title: blog.title.slice(0, 40),
                        paragraph: blog.paragraph.slice(0, 80),
                      }}
                      link={`/blog-details/${blog.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <BlogSearch />
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  {dictionary.blog.latestNews}
                </h3>
                <ul className="p-8">
                  {dictionary.blog.BlogPost.slice(0, 3).map((blog) => (
                    <li
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 
                      dark:border-white dark:border-opacity-10"
                      key={blog.id}
                    >
                      <RelatedPost
                        {...blog}
                        slug={`/blog-details/${blog.id}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  {dictionary.blog.tag}
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  {uniqueTags.map((tag, index) => (
                    <TagButton key={index} text={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
