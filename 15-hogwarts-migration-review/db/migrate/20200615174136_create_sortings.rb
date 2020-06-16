class CreateSortings < ActiveRecord::Migration[5.2]
  def change
    create_table :sortings do |t|
      t.integer :house_id
      t.integer :student_id
    end
    # create_join_table(:houses, :students, table_name: :sortings)
  end
end
