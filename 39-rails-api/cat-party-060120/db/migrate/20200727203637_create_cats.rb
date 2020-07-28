class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.belongs_to :role, null: false, foreign_key: true
      t.string :imgUrl
      t.string :catchphrase

      t.timestamps
    end
  end
end
