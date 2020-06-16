class House < ActiveRecord::Base
  has_many :sortings
  has_many :students, through: :sortings

  def self.display_houses
    # binding.pry
    puts "All the houses"
  end
end