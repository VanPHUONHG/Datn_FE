import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { createBlogCategory } from "services/blogcategory/blogcategories.service";

const BlogCategoryAdd = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            await createBlogCategory(values);
            message.success("Thêm danh mục thành công");
            navigate("/admin/blog-category-list");
        } catch (error: any) {
            message.error(error.response?.data?.message || "Lỗi thêm danh mục");
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Thêm danh mục blog</h2>
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item
                    label="Tên danh mục"
                    name="name"
                    rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm mới
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BlogCategoryAdd;