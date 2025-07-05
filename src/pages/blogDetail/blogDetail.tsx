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
    <div className="bg-gray-50 min-h-screen pb-16">
    
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center text-sm text-gray-500">
          <span>Blog Page</span>
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>›</span>
            <span className="text-green-600 font-medium">{blog.title}</span>
          </div>
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto px-4 mt-10 space-y-8">
       
        <div className="rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-green-400">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

       
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <span>🗓 {new Date(blog.publishedAt).toLocaleDateString("vi-VN")}</span>
          {blog.category?.name && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
              {blog.category.name}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>

    
        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <hr className="my-10 border-gray-300" />

   
        {/* <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">📝 Bài viết liên quan</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside">
            <li>Coming soon...</li>
          </ul>
        </div>

   
        <div className="mt-8 text-sm text-gray-600 bg-white border rounded px-4 py-3">
          Vui lòng{" "}
          <a href="#" className="text-blue-600 underline">đăng nhập</a> hoặc{" "}
          <a href="#" className="text-blue-600 underline">đăng ký</a> để bình luận bài viết.
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetail;
