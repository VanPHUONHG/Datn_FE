
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug, updateBlog } from "services/blog/blog.service";
import { getBlogCategories } from "services/blog/category.service";

const BlogEdit = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    thumbnail: "",
    content: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug)
        .then((res) => {
          const blog = res.data;
          setForm({
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt || "",
            thumbnail: blog.thumbnail || "",
            content: blog.content || "",
            category: blog.category?._id || "",
          });
        })
        .catch((err) => console.error("Lỗi lấy blog:", err));
    }

    getBlogCategories().then((res) => setCategories(res.data.data));
  }, [slug]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await updateBlog(slug || "", form);
      navigate("/admin/blog-list");
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
    }
  };

  return (
  <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">✏️ Sửa Blog</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Nhập tiêu đề"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="slug-cua-blog"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Link ảnh</label>
        <input
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          placeholder="https://link-anh.jpg"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn</label>
        <input
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Tóm tắt blog"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map((cat: any) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung HTML</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          rows={8}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Cập nhật bài viết
        </button>
      </div>
    </form>
  </div>
);

};

export default BlogEdit;
