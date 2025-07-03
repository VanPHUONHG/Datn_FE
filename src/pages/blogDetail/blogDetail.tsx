import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "services/blog/blog.service";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  category?: {
    name: string;
  };
  publishedAt: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug)
        .then((res) => setBlog(res.data))
        .catch((err) => console.error("Lỗi khi lấy blog:", err));
    }
  }, [slug]);

  if (!blog) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <span className="text-gray-500 font-semibold text-sm ml-11">Blog Page</span>
        <div className="flex items-center gap-2 text-gray-500 mr-2">
          <Link to="/" className="text-sm hover:text-green-500">Home</Link>
          <span className="text-gray-400 text-sm">›</span>
          <span className="text-green-500 font-medium text-sm">{blog.title}</span>
        </div>
      </div>

      <div className="bg-white text-gray-900 font-sans text-[13px] leading-[18px] max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
        {/* Left main content */}
        <main className="flex-1 max-w-4xl">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-auto object-cover rounded mb-3"
          />
          <p className="mt-3 text-base text-gray-500">
            {new Date(blog.publishedAt).toLocaleDateString()} - {blog.category?.name}
          </p>
          <h2 className="mt-2 font-semibold text-lg">{blog.title}</h2>
          <div
            className="mt-4 text-sm leading-relaxed text-gray-700 space-y-3"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <p className="mt-4 text-sm text-gray-600">
            Vui lòng <a href="#" className="text-blue-700 underline">đăng nhập</a> hoặc{" "}
            <a href="#" className="text-blue-700 underline">đăng ký</a> để bình luận bài viết.
          </p>
        </main>

        <aside className="w-full max-w-xs">
          Search
          <form className="relative text-gray-800 mb-5 flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Search Our Blog"
              className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-400">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Recent Articles */}
          <div className="mb-7 border border-gray-200 rounded p-4">
            <h4 className="text-lg font-semibold py-2">Recent Articles</h4>
            <ul className="text-xs text-gray-600">
              <li className="text-sm text-gray-500">Coming soon...</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="border border-gray-200 rounded p-4">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <p className="text-sm text-gray-500">Đang cập nhật từ API...</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;
