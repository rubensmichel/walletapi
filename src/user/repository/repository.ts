export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getByDocument(document: string): T | null;
    getByEmail(email: string): T | null;
    getById(id: number): T | null;
}