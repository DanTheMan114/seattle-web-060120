class Brew < ApplicationRecord
  has_many :brews_customers
  has_many :customers, through: :brews_customers

  validates :blend_name, uniqueness: true
  
  def self.strongest_brews
    @brews = Brew.all
    strongrest_br = @brews.max_by { |brew| brew.strength}
    @strongest_brews = Brew.all.collect { |brew| 
      if brew.strength = strongrest_br.strength
        brew
      end
    }.uniq
  end
end