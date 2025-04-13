//importações
import { User } from "../hooks/useUsers";
import "../style/UserList.css";

//definindo propriedades
interface UserListProps {
  users: User[];
}

//criando o componente
export function UserList({ users }: UserListProps) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
