//importações
import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { SearchBar } from "./components/SearchBar";
import { UserList } from "./components/UserList";
import { Pagination } from "./components/Pagination";
import "./style/App.css";

const USERS_PER_PAGE = 5;

//componente principal da aplicação
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading, error } = useUsers();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //calculando páginas de acordo com a quantidade de usuários
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  // Página atual de usuários
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  // Retorno do componente
  return (
    <div className="app-container">
      <h1 className="title">Lista de Usuários</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {loading && <p>Carregando...</p>}
      {error && <p className="error">Erro ao carregar usuários.</p>}
      {!loading && filteredUsers.length === 0 && !searchTerm && (
        <p className="no-users">Nenhum usuário encontrado.</p>
      )}
      {!loading && filteredUsers.length === 0 && searchTerm && (
        <p className="no-users">Nenhum usuário encontrado com o nome "{searchTerm}".</p>
      )}

      <UserList users={currentUsers} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}
