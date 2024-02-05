import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

const Blog = ({ lang }) => {
  
  const { dictionary } = getDictionaryServerOnly(lang);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-10 lg:py-10"
    >
      <div className="container">
        <SectionTitle
          title={dictionary.blog.titleHome}
          paragraph={dictionary.blog.descripitionHome}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {dictionary.blog.BlogPost.slice(0, 3).map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog
                blog={{
                  ...blog,
                  title: blog.title.slice(0, 40),
                  paragraph: blog.paragraph.slice(0, 124),
                }}
                link={`/blog-details/${blog.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
