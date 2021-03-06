# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160401063036) do

  create_table "friendships", force: true do |t|
    t.integer  "init_friend_id", null: false
    t.integer  "recp_friend_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "friendships", ["init_friend_id", "recp_friend_id"], name: "index_friendships_on_init_friend_id_and_recp_friend_id", unique: true
  add_index "friendships", ["recp_friend_id"], name: "index_friendships_on_recp_friend_id"

  create_table "habit_days", force: true do |t|
    t.integer  "habit_id",   null: false
    t.string   "day",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "habit_days", ["habit_id"], name: "index_habit_days_on_habit_id"

  create_table "habits", force: true do |t|
    t.string   "title",             null: false
    t.integer  "user_id",           null: false
    t.integer  "num_days_per_week", null: false
    t.integer  "weight",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "habits", ["title"], name: "index_habits_on_title"
  add_index "habits", ["user_id"], name: "index_habits_on_user_id"

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true
  add_index "users", ["username"], name: "index_users_on_username", unique: true

end
