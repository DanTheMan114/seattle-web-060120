class CreateJoinTableCustomersRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_join_table :customers, :restaurants do |t|
      # t.index [:customer_id, :restaurant_id]
      # t.index [:restaurant_id, :customer_id]
    end
  end
end
