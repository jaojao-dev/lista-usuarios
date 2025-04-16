import { useState, useEffect } from "react";
import { User } from "../hooks/useUsers";
import "../style/UserForm.css";

interface Props {
  onSave: (user: Omit<User, "id"> | User) => void;
  onCancel: () => void;
  editingUser?: User | null;
}

export function UserForm({ onSave, onCancel, editingUser }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setCity(editingUser.address.city);
    }
  }, [editingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      address: { city },
    };

    if (editingUser) {
      onSave({ ...userData, id: editingUser.id });
    } else {
      onSave(userData);
    }

    setName("");
    setEmail("");
    setCity("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{editingUser ? "Editar Usuário" : "Novo Usuário"}</h2>
      <h4>Nome:</h4>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <h4>E-mail:</h4>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <h4>Cidade</h4>
      <input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
      />
      <div className="form-buttons">
        <button className="add-btn" type="submit">{editingUser ? "Salvar" : "Adicionar"}</button>
        <button className="cancel-btn" type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}
