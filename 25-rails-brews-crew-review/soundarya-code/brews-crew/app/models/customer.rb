class Customer < ApplicationRecord
  has_many :brews_customers
  has_many :brews, through: :brews_customers
end
