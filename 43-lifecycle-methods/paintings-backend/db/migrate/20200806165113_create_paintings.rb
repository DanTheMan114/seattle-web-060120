class CreatePaintings < ActiveRecord::Migration[6.0]
  def change
    create_table :paintings do |t|
      t.string :painting_id
      t.string :title
      t.string :image
      t.string :name

      t.timestamps
    end
  end
end
