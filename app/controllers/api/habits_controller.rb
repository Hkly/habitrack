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

  def update
    @habit = Habit.find(params[:id])

    if @habit.update_attributes(habits_params)
      render json: @habit
    else
      render json: @habit.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @habit = Habit.find(params[:id])
    @habit.delete
    render json: @habit
  end

  private

  def habits_params
    params.require(:habit).permit(:title, :weight, :num_days_per_week)
  end
end
