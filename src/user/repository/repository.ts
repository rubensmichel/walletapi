export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getByDocument(document: string): T | null;
    getByEmail(document: string): T | null;
}