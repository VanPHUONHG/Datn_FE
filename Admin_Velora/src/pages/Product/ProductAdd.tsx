import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Product } from "types/product";
import type { Category } from "types/category";
import { useEffect, useState } from "react";
import { getAllCategories } from "services/category/category.service";
import { createProduct } from "services/product/product.service";

type ProductFormInput = Omit<Product, "images"> & {
  images: string;
};

const ProductAdd = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<ProductFormInput>();
  const nav = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const onSubmit = async (formData: ProductFormInput) => {
    const productData: Product = {
      ...formData,
      images: formData.images.split(",").map((url) => url.trim()),
    };
    try {
      await createProduct(productData);
      alert("Thêm mới thành công");
      nav("/admin/product-list");
    } catch (error: any) {
      alert("Lỗi khi thêm sản phẩm: " + (error.message || error));
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Thêm sản phẩm mới</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block font-semibold mb-1">Tên sản phẩm</label>
          <input {...register("name", { required: true })} className="w-full border rounded p-2 focus:outline-none focus:ring" placeholder="Tên sản phẩm"/>
          {errors.name && <p className="text-red-500 text-sm">Tên không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">URL hình ảnh (cách nhau dấu ,)</label>
          <input {...register("images", { required: true })}className="w-full border rounded p-2 focus:outline-none focus:ring"placeholder="https://... , https://..."/>
          {errors.images && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Giá gốc (VNĐ)</label>
          <input {...register("price", { required: true, valueAsNumber: true , min:{ value:0 , message: "Giá kho ko âm" } })}type="number"className="w-full border rounded p-2 focus:outline-none focus:ring"placeholder="100000"/>
          {errors.price && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Giá khuyến mãi (VNĐ)</label>
          <input {...register("discount_price", { required: true, valueAsNumber: true , validate: (value) => value < getValues("price") || "Giá khuyến mãi phải nhỏ hơn giá gốc" })} type="number"className="w-full border rounded p-2 focus:outline-none focus:ring"placeholder="90000"/>
          {errors.discount_price && <p className="text-red-500 text-sm">Giá khuyến mãi phải nhỏ hơn giá gốc</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Số lượng tồn kho</label>
          <input {...register("stock_quantity", { required: true, valueAsNumber: true , min:0 })}type="number"className="w-full border rounded p-2 focus:outline-none focus:ring"placeholder="10"
          />
          {errors.stock_quantity && <p className="text-red-500 text-sm">Số lượng tồn kho ko âm</p>}
        </div>

    

        <div>
          <label className="block font-semibold mb-1">Xuất xứ</label>
          <input {...register("origin", { required: true })}className="w-full border rounded p-2 focus:outline-none focus:ring"placeholder="Việt Nam"
          />
          {errors.origin && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Danh mục</label>
          <select {...register("category_id", { required: true })}className="w-full border rounded p-2 focus:outline-none focus:ring">
            <option value="">-- Chọn danh mục --</option>
            {categories.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.category_id && <p className="text-red-500 text-sm">Phải chọn danh mục</p>}
        </div>

      
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Mô tả sản phẩm</label>
          <textarea {...register("description", { required: true })} className="w-full border rounded p-2 h-24 focus:outline-none focus:ring" placeholder="Mô tả chi tiết sản phẩm..."/>
          {errors.description && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded">
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
