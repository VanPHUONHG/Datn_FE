import { message, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteVariant, getAllVariants  } from "services/variant/variant.service";
import type { IProductVariant } from "types/variant";

const VariantList = () => {
 const [variants, setVariants] = useState<IProductVariant[]>([]);
const [page, setPage] = useState(1);
const [total, setTotal] = useState(0); // tổng biến thể
const perPage = 5;
const currentVariants = variants;

useEffect(() => {
  const fetchVariants = async () => {
    try {
      const data = await getAllVariants({ page, limit: perPage });
      setVariants(data.variants || []);
      setTotal(data.pagination?.totalItem || 0); 
    } catch (error) {
      console.log(error);
    }
  };
  fetchVariants();
}, [page]);

const totalPages = Math.ceil(total / perPage); 


  const handleDelete = async (id: string) => {
    try {
      await deleteVariant(id);
      const updated = variants.filter((item) => item._id !== id);
      setVariants(updated);
    message.success("Xóa mềm biến thể thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Quản lý biến thể</h2>
      </div>

      <div className="mb-6 flex justify-end">
        <Link
          to="/admin/variant-delete"
          className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 shadow transition"
        >
          Xem biến thể đã xóa
        </Link>
      </div>

      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            {["STT", "Tên sản phẩm", "Sku", "Size", "Màu sắc", "Ảnh", "Giá gốc", "Giá KM", "Tồn kho", "Ngày cập nhật", "Thao tác"].map(header => (
              <th
                key={header}
                className="border px-4 py-3 text-left text-gray-700 font-medium select-none"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentVariants.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center py-6 text-gray-500">Không có biến thể nào</td>
            </tr>
          ) : (
            currentVariants.map((item, index) => (
              <tr key={item._id} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="border px-4 py-2">{(page - 1) * perPage + index + 1}</td>
<td className="border px-4 py-2">{(item.product_id as { name?: string })?.name || "Không có"}</td>
                <td className="border px-4 py-2">{item.sku}</td>
                <td className="border px-4 py-2">{item.size}</td>
                <td className="border px-4 py-2">{item.color}</td>
                <td className="border px-4 py-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 object-cover rounded-md shadow-sm"
                  />
                </td>
                <td className="border px-4 py-2">{item.price.toLocaleString()}₫</td>
                <td className="border px-4 py-2">{item.discount_price?.toLocaleString() || "—"}₫</td>
                <td className="border px-4 py-2">{item.stock_quantity}</td>
               <td className="border px-4 py-2 text-sm text-gray-600">
  {new Date(item.updated_at as string).toLocaleDateString()}
</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/variant-edit/${item._id}`}
                      className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Sửa
                    </Link>
                    <Popconfirm
                      title="Bạn có chắc muốn xóa?"
                      okText="Có"
                      cancelText="Không"
                      onConfirm={() => handleDelete(item._id)}
                    >
                      <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition">
                        Xóa
                      </button>
                    </Popconfirm>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="mt-6 flex justify-center items-center gap-2 text-sm select-none">
        <button disabled={page === 1} onClick={() => setPage(1)} className={`px-3 py-1 rounded-lg border transition font-medium ${page === 1 ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`} title="Trang đầu">«</button>
        <button disabled={page === 1} onClick={() => setPage(prev => Math.max(prev - 1, 1))} className={`px-3 py-1 rounded-lg border transition font-medium ${page === 1 ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`} title="Trang trước">‹</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded-lg border transition font-semibold ${page === i + 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}>{i + 1}</button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} className={`px-3 py-1 rounded-lg border transition font-medium ${page === totalPages ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`} title="Trang sau">›</button>
        <button disabled={page === totalPages} onClick={() => setPage(totalPages)} className={`px-3 py-1 rounded-lg border transition font-medium ${page === totalPages ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`} title="Trang cuối">»</button>
      </div>
    </div>
  );
};

export default VariantList;