import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-10 lg:py-10"
    >
      <div className="container">

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog
                blog={{
                  ...blog,
                  title: blog.title.slice(0, 45),
                  paragraph: blog.paragraph.slice(0, 124),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
