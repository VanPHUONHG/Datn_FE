export interface ICategory {
  _id?: string; // sẽ có khi lấy từ DB
  name: string;
  description?: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
