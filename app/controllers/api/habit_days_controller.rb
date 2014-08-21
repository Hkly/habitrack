class Api::HabitDaysController < ApplicationController

  def create
    # these params might need to be fixed
    @habit = Habit.find(params[:habit_id])
    @habit_day = @habit.habit_days.new(habit_params)
    @habit_day.week_of = Date.today.beginning_of_week

    if @habit_day.save
      render json: @habit_day
    else
      render json: @habit_day.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @habit_day = HabitDay.find(params[:id])
    @habit_day.delete
    render json: @habit_day
  end

  private

  def habit_params
    params.require(:habit).permit(:day)
  end
end
