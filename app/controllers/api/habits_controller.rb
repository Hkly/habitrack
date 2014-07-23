class Api::HabitsController < ApplicationController
  def create
    @habit = current_user.habits.new(habits_params)

    if @habit.save
      render json: @habit
    else
      render json:@habit.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @habits = current_user.habits
    render json: @habits
  end

  def show

  end

  private

  def habits_params
    params.require(:habit).permit(:title, :weight, :num_days_per_week)
  end
end
