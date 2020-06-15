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

ActiveRecord::Schema.define(version: 2020_06_15_024248) do

  create_table "houses", force: :cascade do |t|
    t.string "name"
    t.string "motto"
    t.string "house_ghost"
    t.integer "points", default: 150
  end

  create_table "houses_students", id: false, force: :cascade do |t|
    t.integer "house_id", null: false
    t.integer "student_id", null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "home_town"
    t.integer "age"
    t.integer "power"
  end

end