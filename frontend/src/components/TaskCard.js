'use client';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          task.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {task.status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
