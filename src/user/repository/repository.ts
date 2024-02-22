export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getByDocument(document: string): T | null;
}