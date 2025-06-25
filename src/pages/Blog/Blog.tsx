import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "services/blog/blog.service";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  category?: {
    name: string;
  };
  publishedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs()
      .then((res) => setBlogs(res.data.blogs))
      .catch((err) => console.error("Lỗi khi lấy blog:", err));
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <span className="text-gray-500 font-semibold text-sm ml-11">Blog Page</span>
        <div className="flex items-center gap-2 text-gray-500 mr-2">
          <a href="#" className="text-sm hover:text-green-500">Home</a>
          <span className="text-gray-400 text-sm">›</span>
          <span className="text-green-500 font-medium text-sm">Blog Page</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content: blog posts grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {blogs.map((post) => (
              <article key={post._id} className="bg-[#f0f4f7] p-6">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-auto mb-4"
                />
                <p className="text-xs text-gray-400 mb-1">
                  {new Date(post.publishedAt).toLocaleDateString()} · {post.category?.name}
                </p>
                <h3 className="text-sm font-semibold mb-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3 leading-tight">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-gray-600 hover:underline"
                >
                  Read More &gt;
                </Link>

              </article>
            ))}
          </div>

          {/* Right sidebar */}
          <aside className="w-full max-w-xs">
            {/* <form className="relative text-gray-800 mb-5">
              <input
                type="search"
                name="search"
                placeholder="Search Our Blog"
                className="w-full border border-gray-300 text-gray-800 rounded px-3 py-2 text-[12px] focus:outline-none focus:ring-1 focus:ring-green-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-400"
              >
                <i className="fas fa-search"></i>
              </button>
            </form> */}


            <div className="mb-7 border border-gray-200 rounded p-4">
              <h4 className="text-lg font-semibold py-2">Recent Articles</h4>
              <ul className=" text-xs text-gray-600">

                <li className="text-sm text-gray-500">Feature coming soon...</li>
              </ul>
            </div>


            <div className="border border-gray-200 rounded p-4">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <p className="text-sm text-gray-500">Will be fetched from API</p>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>Showing {blogs.length > 0 ? `1-${blogs.length}` : 0} of {blogs.length} item(s)</p>
          <nav className="inline-flex items-center space-x-1 gap-1">
            <button
              className="px-2 py-1 rounded text-gray-300 cursor-not-allowed border border-gray-200"
              disabled
            >
              Prev
            </button>
            <button
              aria-current="page"
              className="px-2 py-1 rounded bg-green-400 text-white border border-green-400"
            >
              1
            </button>
            <button className="px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-200 hover:bg-green-400 hover:text-white transition">
              2
            </button>
            <button className="px-2 py-1 rounded bg-green-400 text-white border border-green-400">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;
