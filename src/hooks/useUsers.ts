import { useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const LOCAL_STORAGE_KEY = "users-data";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localData) {
        setUsers(JSON.parse(localData)); // Carrega os usuários do localStorage
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // Salva os usuários no localStorage
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Executa apenas uma vez quando o componente for montado

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users)); // Atualiza o localStorage sempre que o estado users mudar
    }
  }, [users]); // Sempre que os usuários forem atualizados, atualiza o localStorage

  const addUser = (user: Omit<User, "id">) => {
    const newUser: User = { ...user, id: Date.now() };
    setUsers(prev => [...prev, newUser]); // Adiciona o novo usuário ao estado
  };

  const editUser = (updatedUser: User) => {
    setUsers(prev =>
      prev.map(user => (user.id === updatedUser.id ? updatedUser : user)) // Atualiza o usuário no estado
    );
  };

  const deleteUser = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id)); // Remove o usuário do estado
  };

  return { users, loading, error, addUser, editUser, deleteUser };
}
