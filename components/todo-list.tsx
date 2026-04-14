"use client"

import React, { useState } from "react"
import { Trash2, ArrowUp, ArrowDown, Plus } from "lucide-react"

export function TodoList() {
  // Logic migrated from ToDoList.jsx
  const [tasks, setTasks] = useState<string[]>(["Eat breakfast", "Go to the gym", "Have lunch"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  function handleDeleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    // Styling migrated from index.css to Tailwind
    <div className="max-w-md mx-auto p-6 bg-background border border-foreground/10 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6">To-Do List</h2>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        <button
          onClick={handleAddTask}
          className="bg-[hsl(133,83%,37%)] hover:bg-[hsl(133,83%,27%)] text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      <ol className="space-y-3 p-0">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between p-3 bg-foreground/5 rounded-xl border border-foreground/5">
            <span className="flex-1 font-medium">{task}</span>
            <div className="flex gap-1">
              <button onClick={() => moveTaskUp(index)} className="p-2 text-[hsl(240,100%,72%)] hover:bg-foreground/5 rounded-md">
                <ArrowUp size={16} />
              </button>
              <button onClick={() => moveTaskDown(index)} className="p-2 text-[hsl(240,100%,72%)] hover:bg-foreground/5 rounded-md">
                <ArrowDown size={16} />
              </button>
              <button onClick={() => handleDeleteTask(index)} className="p-2 text-[hsl(0,83%,37%)] hover:bg-foreground/5 rounded-md">
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}