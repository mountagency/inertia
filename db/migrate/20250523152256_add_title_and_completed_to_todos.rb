class AddTitleAndCompletedToTodos < ActiveRecord::Migration[8.0]
  def change
    add_column :todos, :title, :string
    add_column :todos, :completed, :boolean
  end
end
