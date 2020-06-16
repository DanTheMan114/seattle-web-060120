class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :ghost
      t.string :motto
      t.integer :points
    end
  end
end
