import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchTodos = async () => {
  const { data } = await axios.get('http://localhost:5000/');
  return data;
}

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    retry: false
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">My Tasks</h2>
        <p className="text-gray-400">Manage your daily goals with ease</p>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6">
        {isLoading ? (
          <p className="text-center font-medium animate-pulse">Checking API connection...</p>
        ) : error ? (
          <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300">
            Error: Could not connect to the backend server.
          </div>
        ) : (
          <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300">
            Connected to API: {data?.message}
          </div>
        )}
      </div>

      <div className="grid gap-4 mt-6">
        {/* Placeholder for Todo list */}
        <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between border border-gray-600 hover:border-blue-500 transition-colors">
          <span>Get started by adding a task</span>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-transform active:scale-95 shadow-lg">
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
