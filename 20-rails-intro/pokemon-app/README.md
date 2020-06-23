# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
  create_table "pokemons", force: :cascade do |t|
    t.integer "base_attack"
    t.integer "base_defense"
    t.integer "base_stamina"
    t.string "form"
    t.integer "pokemon_id"
    t.string "pokemon_name"
  end