class BrewsCustomer < ApplicationRecord
  belongs_to :customer
  belongs_to :brew
  validates_uniqueness_of :customer_id, scope: :brew_id
end
