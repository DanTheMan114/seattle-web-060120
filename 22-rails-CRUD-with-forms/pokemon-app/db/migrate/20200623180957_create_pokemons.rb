class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :level
      t.string :skill
      t.string :ability
      t.string :image_url
    end
  end
end
