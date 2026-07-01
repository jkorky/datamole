export type TodoItem = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
    finishedAt?: number;
};
