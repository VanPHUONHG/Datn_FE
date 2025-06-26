import { Form, Input, Button, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogCategoryDetail, updateBlogCategory } from 'services/blogcategory/blogcategories.service';


const BlogCategoryEdit = () => {
  const [form] = Form.useForm();
  const { slug } = useParams();
  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const { data } = await getBlogCategoryDetail(slug!);
      form.setFieldsValue(data.data);
    } catch (err) {
      message.error("Không thể lấy chi tiết danh mục");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const onFinish = async (values: any) => {
    try {
      await updateBlogCategory(slug!, values);
      message.success("Cập nhật thành công");
      navigate("/admin/blog-category-list");
    } catch {
      message.error("Cập nhật thất bại");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Chỉnh sửa danh mục blog</h2>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Tên danh mục" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BlogCategoryEdit;
