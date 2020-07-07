class CreateTableLibrarian < ActiveRecord::Migration[6.0]
  def change
    create_table :librarians do |t|
      t.string :name
    end
  end
end
