class Guest < ApplicationRecord
  has_many :books, as: :user
end