# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# demo_user = User.create(username: "DemoBob", email: "bob@demoman.com", password: "bobthedemoman")
#
# habit1 = demo_user.Habit.create(title: "Do pushups", )

thor = User.create(username: "Thor", email: "thor@asguard.net", password: "hammertime")
capt = User.create(username: "SteveR", email: "stever@aol.com", password: "shieldtime")

capt_habit1 = capt.habits.create(title: "Practice using the Google", num_days_per_week: 3, weight: 3)
capt_habit2 = capt.habits.create(title: "Go for a run - Cardio!", num_days_per_week: 6, weight: 2)
capt_habit3 = capt.habits.create(title: "Team dinner w/Natasha", num_days_per_week: 1, weight: 2)

capt_habit1.habit_days.create([{day: "tue"}, {day: "wed"}])
capt_habit2.habit_days.create([{day: "mon"}, {day: "tue"}, {day: "wed"}, {day: "fri"}])
capt_habit3.habit_days.create([{day: "sat"}])
