export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getById(id: number): T | null;
}