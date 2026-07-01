type RequestOptions = {
    method?: "GET" | "POST" | "PATCH" | "DELETE";
    body?: unknown;
};

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const request = async <T>(path: string, options: RequestOptions = {}): Promise<T> => {
    const { method = "GET", body } = options;
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
        throw new Error(`Request failed: ${method} ${path} (${response.status})`);
    }
    if (response.status === 204) {
        return undefined as T;
    }
    return response.json() as Promise<T>;
};
