//importações
import "../style/Pagination.css";

//definindo propriedades
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

//criando o componente
export function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
