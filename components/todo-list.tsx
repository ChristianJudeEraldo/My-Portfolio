"use client"

import React, { useState } from "react"
import { Trash2, ArrowUp, ArrowDown, Plus, CheckCircle2 } from "lucide-react"

export function TodoList() {
  const [tasks, setTasks] = useState<string[]>([
    "Profile CNN landmark extraction pipeline",
    "Benchmark React 19 state transitions",
    "Verify dark mode high-contrast ramp",
  ])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask.trim()])
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
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-(--gray-400)" />
          <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-(--ink)">
            Interactive State Engine Demo
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-(--gray-400)">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"} active
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleAddTask()
            }
          }}
          className="flex-1 px-3.5 py-2 bg-(--background) border border-(--gray-200) rounded-md focus:outline-none focus:border-(--gray-400) transition-colors text-[13px] text-(--ink)"
        />
        <button
          type="button"
          onClick={handleAddTask}
          className="bryl-button px-3.5 gap-1 font-mono text-[11px] uppercase tracking-wider cursor-pointer"
          aria-label="Add task"
        >
          <Plus size={14} />
          <span>Add</span>
        </button>
      </div>

      <ul className="space-y-0 border-t border-(--gray-200) rounded-md overflow-hidden bg-(--background)/50">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-3 py-2.5 border-b border-(--gray-200) group hover:bg-(--gray-100)/50 transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="font-mono text-[11px] text-(--gray-400) shrink-0">
                0{index + 1}.
              </span>
              <span className="text-[13px] font-medium text-(--ink) truncate">
                {task}
              </span>
            </div>
            <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
              <button
                type="button"
                onClick={() => moveTaskUp(index)}
                disabled={index === 0}
                className="p-1 rounded text-(--gray-400) hover:text-(--ink) hover:bg-(--gray-200)/60 disabled:opacity-25 disabled:cursor-not-allowed transition-colors cursor-pointer"
                title="Move up"
                aria-label="Move task up"
              >
                <ArrowUp size={13} />
              </button>
              <button
                type="button"
                onClick={() => moveTaskDown(index)}
                disabled={index === tasks.length - 1}
                className="p-1 rounded text-(--gray-400) hover:text-(--ink) hover:bg-(--gray-200)/60 disabled:opacity-25 disabled:cursor-not-allowed transition-colors cursor-pointer"
                title="Move down"
                aria-label="Move task down"
              >
                <ArrowDown size={13} />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteTask(index)}
                className="p-1 rounded text-(--gray-400) hover:text-(--ink) hover:bg-(--gray-200)/60 transition-colors ml-1 cursor-pointer"
                title="Delete task"
                aria-label="Delete task"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="py-6 text-center text-[13px] font-serif text-(--gray-400)">
            All tasks completed! Add a new task above.
          </li>
        )}
      </ul>
    </div>
  )
}