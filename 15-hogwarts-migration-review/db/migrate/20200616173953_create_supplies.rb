class CreateSupplies < ActiveRecord::Migration[5.2]
  def change
    create_table :supplies do |t|
      t.integer :student_id
      t.string :name
      t.float :price
    end
  end
end
