class Librarian < ApplicationRecord
  has_many :books, as: :user
end