import React from "react";
import { useState } from "react";
import { useUsers, User } from "./hooks/useUsers";
import { SearchBar } from "./components/SearchBar";
import { UserList } from "./components/UserList";
import { Pagination } from "./components/Pagination";
import { UserForm } from "./components/UserForm";
import "./style/App.css";

const USERS_PER_PAGE = 5;

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { users, loading, error, addUser, editUser, deleteUser } = useUsers();

  // Primeiramente, filtra os usuários
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Depois, aplica a paginação
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  // Exibe os logs agora que as variáveis foram declaradas
  console.log("Users carregados:", users);
  console.log("Filtrados:", filteredUsers);
  console.log("Paginados:", currentUsers);

  const handleSave = (user: Omit<User, "id"> | User) => {
    if ("id" in user) {
      editUser(user);
    } else {
      addUser(user);
    }
    setShowForm(false);
    setEditingUser(null);
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Usuários</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <button className="new-user-btn" onClick={() => setShowForm(true)}>+ Novo Usuário</button>

      {showForm && (
        <UserForm
          editingUser={editingUser}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingUser(null);
          }}
        />
      )}

      {loading && <p>Carregando...</p>}
      {error && <p className="error">Erro ao carregar usuários.</p>}
      {!loading && filteredUsers.length === 0 && (
        <p className="no-users">Nenhum usuário encontrado.</p>
      )}
      <UserList
        users={currentUsers}
        onEdit={(user) => {
          setEditingUser(user);
          setShowForm(true);
        }}
        onDelete={deleteUser}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
