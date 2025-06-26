
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "services/blog/blog.service";
import { getBlogCategories } from "services/blog/category.service";


const BlogAdd = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", thumbnail: "", content: "", category: "" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBlogCategories().then((res) => setCategories(res.data.data));
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createBlog(form);
    navigate("/admin/blog-list");
  };

return (
  <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">📝 Thêm Blog Mới</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
        <input
          name="title"
          placeholder="Nhập tiêu đề blog"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
        <input
          name="slug"
          placeholder="slug-cua-blog"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Link ảnh (Thumbnail)</label>
        <input
          name="thumbnail"
          placeholder="https://link-to-image.jpg"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn</label>
        <input
          name="excerpt"
          placeholder="Tóm tắt ngắn gọn"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
        <select
          name="category"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung bài viết</label>
        <textarea
          name="content"
          placeholder="Nhập nội dung dạng HTML..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={8}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          💾 Lưu bài viết
        </button>
      </div>
    </form>
  </div>
);

};

export default BlogAdd;