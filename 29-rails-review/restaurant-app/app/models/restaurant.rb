class Restaurant < ApplicationRecord
  has_many :customers_restaurants
  has_many :restaurants, through: :customers_restaurants
end
