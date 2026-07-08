"use client"

import React, { useState } from "react"
import { Trash2, ArrowUp, ArrowDown, Plus } from "lucide-react"

export function TodoList() {
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
    <div className="max-w-md mx-auto w-full">
      <h2 className="text-[17px] font-semibold text-center mb-8 text-[var(--ink)]">To-Do List</h2>
      
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 bg-[var(--background)] border border-[var(--gray-200)] rounded-md focus:outline-none focus:border-[var(--gray-400)] transition-colors text-[14px] text-[var(--ink)]"
        />
        <button
          onClick={handleAddTask}
          className="bryl-button px-4"
        >
          <Plus size={16} />
        </button>
      </div>

      <ul className="space-y-0 border-t border-[var(--gray-200)]">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between py-3 border-b border-[var(--gray-200)] group">
            <span className="flex-1 text-[15px] font-medium text-[var(--ink)]">{task}</span>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => moveTaskUp(index)} className="p-1.5 text-[var(--gray-400)] hover:text-[var(--ink)] transition-colors">
                <ArrowUp size={14} />
              </button>
              <button onClick={() => moveTaskDown(index)} className="p-1.5 text-[var(--gray-400)] hover:text-[var(--ink)] transition-colors">
                <ArrowDown size={14} />
              </button>
              <button onClick={() => handleDeleteTask(index)} className="p-1.5 text-[var(--gray-400)] hover:text-[var(--ink)] transition-colors ml-2">
                <Trash2 size={14} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}