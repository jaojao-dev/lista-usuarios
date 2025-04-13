export async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Falha ao carregar usuários");
    }
    return response.json();
  }
  