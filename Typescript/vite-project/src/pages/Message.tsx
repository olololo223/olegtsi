import { useState, useEffect } from 'react';

interface ApiData {
    message: string;
    title: string;
}

const Message = () => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/data");
                const result: ApiData = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
                console.error("Error: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (!data) {
        return <div>Нет данных</div>;
    }

    return (
        <div>
            <h1>Данные:</h1>
            <h2>{data.title}</h2>
            <p>{data.message}</p>
        </div>
    );
};

export default Message;