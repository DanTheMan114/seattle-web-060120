class Student < ActiveRecord::Base
  has_many :sortings
  has_many :houses, through: :sortings
  has_many :supplies
end