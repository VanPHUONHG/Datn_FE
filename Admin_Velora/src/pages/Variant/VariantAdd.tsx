import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import type { IProductVariant } from "types/variant";
import { createVariant } from "services/variant/variant.service";
import { getAllProducts } from "services/product/product.service";
import type { Product } from "types/product";

type VariantFormInput = Omit<IProductVariant, "_id" | "created_at" | "updated_at" | "isDeleted"> & {
  images: string;
  product_id: string;
};

const VariantAdd = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<VariantFormInput>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res.products || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const onSubmit = async (data: VariantFormInput) => {
    const variantData = {
      ...data,
      images: data.images
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url.startsWith("http")),
    };

    console.log("✅ Dữ liệu gửi lên:", variantData);

    try {
      await createVariant(variantData);
      message.success("Thêm biến thể thành công");
      nav("/admin/variant-list");
    } catch (error: any) {
      const errorMsg = error?.response?.data?.message || "Đã xảy ra lỗi";
      const rawError = error?.response?.data?.error || "";

      if (
        (errorMsg.includes("duplicate key") || rawError.includes("E11000")) &&
        rawError.includes("sku")
      ) {
        setError("sku", { type: "manual", message: "SKU đã tồn tại." });
        return;
      }

      message.error(errorMsg);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Thêm biến thể</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block font-semibold mb-1">Sản phẩm</label>
          <select {...register("product_id", { required: true })} className="w-full border rounded p-2">
            <option value="">-- Chọn sản phẩm --</option>
            {products.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.product_id && <p className="text-red-500 text-sm">Vui lòng chọn sản phẩm</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Size</label>
          <select {...register("size", { required: true })} className="w-full border rounded p-2">
            <option value="">-- Chọn size --</option>
            {[38, 39, 40, 41, 42].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {errors.size && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Màu sắc</label>
          <input {...register("color", { required: true })} className="w-full border rounded p-2" placeholder="Đen, trắng..." />
          {errors.color && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Ảnh đại diện (thumbnail)</label>
          <input {...register("image", { required: true })} className="w-full border rounded p-2" placeholder="https://..." />
          {errors.image && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Danh sách ảnh (ngăn cách bằng dấu ,)</label>
          <textarea
            {...register("images")}
            className="w-full border rounded p-2 h-24 resize-none"
            placeholder="https://... , https://..."
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">SKU</label>
          <input {...register("sku", { required: true })} className="w-full border rounded p-2" placeholder="SKU123..." />
          {errors.sku && <p className="text-red-500 text-sm">{errors.sku.message || "Không được để trống"}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Giá gốc</label>
          <input {...register("price", { required: true, valueAsNumber: true, min: 0 })} type="number" className="w-full border rounded p-2" />
          {errors.price && <p className="text-red-500 text-sm">Giá không hợp lệ</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Giá khuyến mãi</label>
          <input
            {...register("discount_price", {
              valueAsNumber: true,
              validate: (val) =>
                val === undefined || val < getValues("price") || "Giá KM phải nhỏ hơn giá gốc",
            })}
            type="number"
            className="w-full border rounded p-2"
          />
          {errors.discount_price && <p className="text-red-500 text-sm">{errors.discount_price.message}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Tồn kho</label>
          <input {...register("stock_quantity", { required: true, valueAsNumber: true, min: 0 })} type="number" className="w-full border rounded p-2" />
          {errors.stock_quantity && <p className="text-red-500 text-sm">Không được để trống</p>}
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded">
            Thêm biến thể
          </button>
        </div>
      </form>
    </div>
  );
};

export default VariantAdd;
