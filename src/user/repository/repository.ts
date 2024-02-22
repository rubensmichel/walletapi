export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getOne(document: string): T | null;
}