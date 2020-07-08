class Pokemon < ApplicationRecord
  has_many :pokemons_trainers
  has_many :trainers, through: :pokemons_trainers
end