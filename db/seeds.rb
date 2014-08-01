# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

seeders = ["Thor", "Loki", "AwEsOmeStArK", "BBanner18", "BlkWdw666", "TheFury", "CoulsonP9", "clint_barton", "USAsteve"]

seeders.each do |user|
  seed = User.find_by_username(user)
  seed.delete
end


thor = User.create(username: "Thor", email: "thor@asguard.net", password: "hammertime")
loki = User.create(username: "Loki", email: "loki@asguard.net", password: "whyamihere")
tony = User.create(username: "AwEsOmeStArK", email: "tony@starkind.com", password: "imthebest")
bruce = User.create(username: "BBanner18", email: "BBanner18@gmail.com", password: "greenman")
natasha = User.create(username: "BlkWdw666", email: "natasha@shield.net", password: "kickyrbutt")
fury = User.create(username: "TheFury", email: "fury@shield.net", password: "igotmyeyeonyou")
coulson = User.create(username: "CoulsonP9", email: "coulson@shield.net", password: "iplaythecello")
clint = User.create(username: "clint_barton", email: "barton@shield.net", password: "ilikearrows")
capt = User.create(username: "USAsteve", email: "stever@aol.com", password: "shieldtime")

capt_habit1 = capt.habits.create(title: "Practice using the Google", num_days_per_week: 3, weight: 3)
capt_habit2 = capt.habits.create(title: "Go for a run - Cardio!", num_days_per_week: 6, weight: 2)
capt_habit3 = capt.habits.create(title: "Team dinner w/Natasha", num_days_per_week: 1, weight: 2)

capt_habit1.habit_days.create([{day: "tue"}, {day: "wed"}])
capt_habit2.habit_days.create([{day: "mon"}, {day: "tue"}, {day: "wed"}, {day: "fri"}])
capt_habit3.habit_days.create([{day: "sat"}])

capt_frands = capt.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id}])

thor_frands = thor.created_friendships.create([{recp_friend_id: capt.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id},
              {recp_friend_id: loki.id}])

loki_frands = loki.created_friendships.create([{recp_friend_id: thor.id}])

tony_frands = tony.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: capt.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id}])

bruce_frands = bruce.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: capt.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id}])

natasha_frands = natasha.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: capt.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id}])

fury_frands = fury.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: capt.id}, {recp_friend_id: coulson.id}, {recp_friend_id: clint.id}])

coulson_frands = coulson.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: capt.id}, {recp_friend_id: clint.id}])

clint_frands = clint.created_friendships.create([{recp_friend_id: thor.id}, {recp_friend_id: tony.id}, {recp_friend_id: bruce.id},
              {recp_friend_id: natasha.id}, {recp_friend_id: fury.id}, {recp_friend_id: coulson.id}, {recp_friend_id: capt.id}])
