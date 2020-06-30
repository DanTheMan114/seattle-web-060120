class CreateBrewsCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :brews_customers do |t|
      t.integer :brew_id
      t.integer :customer_id
      t.float :price

      t.timestamps
    end
  end
end
