//importações
import { useEffect, useState } from "react";

//definindo usuários
export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

//buscando dados dos usuários
export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //buscando usuários na API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        //requisitando usuários de API pública
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setError(false);
      } catch (err) {
        // Tratamento de erro
        if (err instanceof Error) {
          console.error("Erro ao buscar usuários:", err.message);
        } else {
          console.error("Erro desconhecido:", err);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
}
