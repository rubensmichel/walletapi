export interface Repository<T> {
    create(entity: Partial<T>): void;
    getAll(): T[];
    getById(id: number): T | null;
    getByUser(userId: number): T | null;
    credit(entity: Partial<T>, value: number): void
    debit(entity: Partial<T>, value: number): void
}