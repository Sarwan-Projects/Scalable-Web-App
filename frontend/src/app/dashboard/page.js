'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { profileAPI, taskAPI } from '@/lib/api';
import { handleApiError } from '@/lib/errorHandler';
import TaskCard from '@/components/TaskCard';
import TaskModal from '@/components/TaskModal';

export default function DashboardPage() {
  const { isLoading, logout } = useAuth(true);
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isLoading) {
      fetchProfile();
      fetchTasks();
    }
  }, [isLoading]);

  useEffect(() => {
    filterTasks();
  }, [tasks, searchTerm, statusFilter]);

  const fetchProfile = async () => {
    try {
      const response = await profileAPI.getProfile();
      if (response.data.success) {
        setProfile(response.data.user);
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      setError(handleApiError(error));
    }
  };

  const fetchTasks = async () => {
    try {
      setError('');
      const response = await taskAPI.getTasks();
      if (response.data.success) {
        setTasks(response.data.tasks);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const filterTasks = () => {
    let filtered = tasks;

    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(task => task.status === statusFilter);
    }

    setFilteredTasks(filtered);
  };

  const handleCreateTask = async (formData) => {
    setModalLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await taskAPI.createTask(formData);
      if (response.data.success) {
        setSuccess('Task created successfully!');
        setIsModalOpen(false);
        fetchTasks();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setModalLoading(false);
    }
  };

  const handleUpdateTask = async (formData) => {
    setModalLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await taskAPI.updateTask(editingTask._id, formData);
      if (response.data.success) {
        setSuccess('Task updated successfully!');
        setIsModalOpen(false);
        setEditingTask(null);
        fetchTasks();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    setError('');
    setSuccess('');
    try {
      const response = await taskAPI.deleteTask(id);
      if (response.data.success) {
        setSuccess('Task deleted successfully!');
        fetchTasks();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (error) {
      setError(handleApiError(error));
    }
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
    setError('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setError('');
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
            <div className="flex items-center gap-4">
              {profile && (
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-700">{profile.name}</p>
                  <p className="text-xs text-gray-500">{profile.email}</p>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        {/* Profile Card */}
        {profile && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-gray-800 font-medium">{profile.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800 font-medium">{profile.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-gray-800 font-medium">
                  {new Date(profile.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Tasks</p>
                <p className="text-gray-800 font-medium">{tasks.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Task Management Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl font-semibold text-gray-800">My Tasks</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
            >
              + Create Task
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tasks by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Task Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{tasks.length}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-yellow-800">
                {tasks.filter(t => t.status === 'pending').length}
              </p>
              <p className="text-sm text-yellow-700">Pending</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-800">
                {tasks.filter(t => t.status === 'completed').length}
              </p>
              <p className="text-sm text-green-700">Completed</p>
            </div>
          </div>

          {/* Task Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="mt-4 text-gray-500">
                  {searchTerm || statusFilter !== 'all'
                    ? 'No tasks found matching your criteria'
                    : 'No tasks yet. Create your first task!'}
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={openEditModal}
                  onDelete={handleDeleteTask}
                />
              ))
            )}
          </div>
        </div>
      </main>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
        task={editingTask}
        loading={modalLoading}
      />
    </div>
  );
}
