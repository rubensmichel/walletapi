export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
}