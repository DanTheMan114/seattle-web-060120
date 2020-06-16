class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :hometown
      t.integer :age
      t.integer :points
    end
  end
end