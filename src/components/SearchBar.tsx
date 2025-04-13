//importações
import "../style/SearchBar.css";

//definindo propriedades
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

//criando o componente
export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome..."
      className="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
