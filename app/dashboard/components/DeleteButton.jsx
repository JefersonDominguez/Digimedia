export default function DeleteButton({ id, onDelete }) {
    const handleClick = () => {
      const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este servicio?')
      if (confirmDelete) {
        onDelete(id)
      }
    }
  
    return (
      <button 
        className="bg-red-600 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        Eliminar
      </button>
    )
  }