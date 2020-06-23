class PokemonsController < ApplicationController
  def index
    # Getting the data ie talking to the model
    # byebug
    # if you want your view to access this variable needs to be an instance variable.
    @pokemons = Pokemon.all
    # Going to the view to grab the html
  end

  def show
    # byebug
    # @pokemon = Pokemon.first
    @pokemon = Pokemon.find(params[:puppy])
  end
end