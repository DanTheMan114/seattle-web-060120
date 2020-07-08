class Trainer < ApplicationRecord
  has_many :pokemons_trainers
  has_many :pokemons, through: :pokemons_trainers

  def to_s
    self.name + ": " + self.age.to_s  + " years old"
  end
end
