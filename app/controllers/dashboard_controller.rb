# frozen_string_literal: true

class DashboardController < ApplicationController
  def index
    render inertia: 'Dashboard', props: {
      name: params.fetch(:name, 'World'),
      todos: Todo.all.as_json(only: [:id, :title, :completed])
    }
  end
end
