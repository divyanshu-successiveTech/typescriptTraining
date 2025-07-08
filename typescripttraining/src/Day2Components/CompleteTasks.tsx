"use client";
import { useCallback, useState } from "react";

interface TasksItem{
    id:number,
    task:string,
    complete:boolean;
}

export default function CompleteTasks() {
 
  const [task, setTask] = useState<TasksItem[]>([
    { id: 1, task: "task1", complete: false },
    { id: 2, task: "task2", complete: false },
    { id: 3, task: "task3", complete: false },
  ]);

  const taskCompletion = useCallback((id:number) => {
    setTask((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, complete: true } : task))
    );
  }, []);

  return (
    <div>
      {task.map((curr,index) => (
        <div key={index}>
          <p>{curr.task} {curr.complete?`completed`:`incomplete`}</p>
          <button onClick={()=>taskCompletion(curr.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}
