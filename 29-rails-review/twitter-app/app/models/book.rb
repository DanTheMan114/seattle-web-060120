class Book < ApplicationRecord
  belongs_to :user, polymorphic: :true
end
