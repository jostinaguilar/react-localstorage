export function VisibilityControl({ setShowCompleted, cleanTask, isChecked }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 rounded">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          className="form-check-input"
        />
        <label>Show Tak Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
}
