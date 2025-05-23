# app/controllers/todos_controller.rb
class TodosController < ApplicationController
  before_action :set_todo, only: %i[update destroy toggle]

  def index
    render inertia: 'Dashboard',
      props: { todos: Todo.order(created_at: :desc).as_json(only: %i[id title completed]) }
  end

  def create
    Todo.create!(todo_params)
    redirect_to todos_path, inertia: { replace: true }
  end

  def update
    @todo.update!(todo_params)
    redirect_to todos_path, inertia: { replace: true }
  end

  def destroy
    @todo.destroy!
    redirect_to todos_path, inertia: { replace: true }
  end

  def destroy_completed
    Todo.where(completed: true).destroy_all
    redirect_to todos_path, inertia: { replace: true }
  end

  def toggle
    @todo.update!(completed: !@todo.completed)
    redirect_to todos_path, inertia: { replace: true }
  end

  private

    def set_todo
      @todo = Todo.find(params[:id])
    end

    def todo_params
      params.require(:todo).permit(:title, :completed)
    end
end