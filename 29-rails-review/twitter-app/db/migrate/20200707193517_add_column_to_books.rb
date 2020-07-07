class AddColumnToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :user_id, :integer
    add_column :books, :user_type, :string
  end
end
