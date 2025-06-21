export interface IUser {
    _id: string;
    username: string;
    password: string;
    email: string;
    full_name: string;
    phone: string;
    address: string;
    role: 'customer' | 'admin';
    status: 'active' | 'unactive' | 'banned';
    created_at: string;
    updated_at: string;
}
