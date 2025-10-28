'use client';

import { useState, useEffect } from 'react';

export default function TaskModal({ isOpen, onClose, onSubmit, task, loading }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status
      });
    } else {
      setFormData({ title: '', description: '', status: 'pending' });
    }
    setErrors({});
  }, [task, isOpen]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must not exceed 100 characters';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 5) {
      newErrors.description = 'Description must be at least 5 characters';
    } else if (formData.description.length > 500) {
      newErrors.description = 'Description must not exceed 500 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleClose = () => {
    setFormData({ title: '', description: '', status: 'pending' });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {task ? 'Edit Task' : 'Create New Task'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              id="task-title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter task title"
              maxLength={100}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>
          
          <div>
            <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="task-description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              rows="4"
              placeholder="Enter task description"
              maxLength={500}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            <p className="mt-1 text-xs text-gray-500">{formData.description.length}/500</p>
          </div>
          
          <div>
            <label htmlFor="task-status" className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              id="task-status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : task ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
