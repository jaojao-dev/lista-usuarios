import { User } from "../hooks/useUsers";
import "../style/UserList.css";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export function UserList({ users, onEdit, onDelete }: UserListProps) {
  return (
    <div className="user-list-container">
      <div className="user-header">
        <span>Nome:</span>
        <span>E-mail:</span>
        <span>Cidade:</span>
      </div>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <span className="name">{user.name}</span>
              <span className="email">{user.email}</span>
              <span className="city">{user.address.city}</span>
            </div>
            <div className="user-actions">
              <button className="edit-btn" onClick={() => onEdit(user)}>Editar</button>
              <button className="delete-btn" onClick={() => onDelete(user.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
