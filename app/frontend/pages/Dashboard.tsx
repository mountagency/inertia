import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Trash } from 'lucide-react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface Props {
  todos: Todo[];
}

export default function Dashboard({ todos }: Props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const create = () => {
    if (!newTodoTitle.trim()) return;
    router.visit('/todos', {
      method: 'post',
      data: { todo: { title: newTodoTitle } },
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => setNewTodoTitle(''),
    });
  };

  const toggle = (id: number) => {
    router.visit(`/todos/${id}/toggle`, {
      method: 'patch',
      preserveScroll: true,
      preserveState: true,
    });
  };

  const remove = (id: number) => {
    router.visit(`/todos/${id}`, {
      method: 'delete',
      preserveScroll: true,
      preserveState: true,
    });
  };

  return (
    <>
      <Head title="Todo Dashboard" />

      <div className="min-h-screen bg-background py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Todo List
        </h1>

        <div className="flex gap-2 mb-4 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Add a new todo..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && create()}
          />
          <Button onClick={create}>Add</Button>
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          {todos.map((todo) => (
            <Card
              key={todo.id}
              className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer"
              onClick={(e) => {
                if (!(e.target as HTMLElement).closest('button')) {
                  toggle(todo.id);
                }
              }}
            >
              <div className="flex items-center gap-2 pl-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggle(todo.id)}
                  className="mr-2"
                />
                <span
                  className={todo.completed ? 'line-through text-gray-500' : ''}
                >
                  {todo.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(todo.id);
                }}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
