import { User } from "./user.interface";

export interface Api {
    'page': number,
    'per_page': number,
    'total_pages': number,
    'results': User[]
}
