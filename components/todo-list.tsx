"use client"

import React, { useState } from "react"
import { Trash2, ChevronUp, ChevronDown, Plus, Check, ListChecks } from "lucide-react"

export function TodoList() {
  const [tasks, setTasks] = useState<string[]>([
    "Profile CNN landmark extraction pipeline",
    "Benchmark React 19 state transitions",
    "Verify dark mode high-contrast ramp",
  ])
  const [completedIndices, setCompletedIndices] = useState<number[]>([])
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

  function toggleComplete(index: number) {
    if (completedIndices.includes(index)) {
      setCompletedIndices(completedIndices.filter(i => i !== index))
    } else {
      setCompletedIndices([...completedIndices, index])
    }
  }

  function handleDeleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
    setCompletedIndices(completedIndices.filter(i => i !== index).map(i => (i > index ? i - 1 : i)))
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
      {/* Apple Reminders Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-(--apple-blue)/10 text-(--apple-blue)">
            <ListChecks size={14} />
          </div>
          <span className="font-sans text-[13px] font-semibold text-(--ink)">
            State Engine Demo
          </span>
        </div>
        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/4 dark:bg-white/8 text-(--ink-secondary)">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2">
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
          className="min-w-0 flex-1 px-3.5 py-2 bg-black/3 dark:bg-white/5 border border-black/8 dark:border-white/12 rounded-xl focus:outline-none focus:border-(--apple-blue) focus:ring-3 focus:ring-(--apple-blue)/15 transition-all text-[13px] text-(--ink) placeholder:text-(--ink-tertiary)"
        />
        <button
          type="button"
          onClick={handleAddTask}
          className="apple-button-primary shrink-0 px-3.5 sm:px-4 gap-1.5 font-sans text-[12px] font-medium cursor-pointer"
          aria-label="Add task"
        >
          <Plus size={14} />
          <span>Add</span>
        </button>
      </div>

      {/* Reminders List */}
      <ul className="divide-y divide-black/6 dark:divide-white/8 rounded-xl overflow-hidden border border-black/6 dark:border-white/8 bg-white/50 dark:bg-black/30">
        {tasks.map((task, index) => {
          const isDone = completedIndices.includes(index)
          return (
            <li
              key={index}
              className="flex items-center justify-between px-3.5 py-2.5 group hover:bg-black/2 dark:hover:bg-white/2 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                {/* Apple Reminders Circular Checkbox */}
                <button
                  type="button"
                  onClick={() => toggleComplete(index)}
                  className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    isDone
                      ? "bg-(--apple-blue) border-(--apple-blue) text-white"
                      : "border-black/25 dark:border-white/35 hover:border-(--apple-blue)"
                  }`}
                  aria-label={isDone ? "Mark incomplete" : "Mark complete"}
                >
                  {isDone && <Check size={11} strokeWidth={3} />}
                </button>

                <span
                  className={`text-[13px] font-medium transition-all truncate ${
                    isDone
                      ? "line-through text-(--ink-tertiary)"
                      : "text-(--ink)"
                  }`}
                >
                  {task}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                <button
                  type="button"
                  onClick={() => moveTaskUp(index)}
                  disabled={index === 0}
                  className="p-1 rounded-md text-(--ink-tertiary) hover:text-(--ink) hover:bg-black/5 dark:hover:bg-white/8 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="Move up"
                  aria-label="Move task up"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => moveTaskDown(index)}
                  disabled={index === tasks.length - 1}
                  className="p-1 rounded-md text-(--ink-tertiary) hover:text-(--ink) hover:bg-black/5 dark:hover:bg-white/8 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  title="Move down"
                  aria-label="Move task down"
                >
                  <ChevronDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteTask(index)}
                  className="p-1 rounded-md text-(--ink-tertiary) hover:text-red-500 hover:bg-red-500/10 transition-colors ml-0.5 cursor-pointer"
                  title="Delete task"
                  aria-label="Delete task"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </li>
          )
        })}
        {tasks.length === 0 && (
          <li className="py-8 text-center text-[13px] text-(--ink-tertiary)">
            All tasks completed. Add a new task above.
          </li>
        )}
      </ul>
    </div>
  )
}