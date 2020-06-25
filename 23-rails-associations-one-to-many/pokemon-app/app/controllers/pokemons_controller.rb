class PokemonsController < ApplicationController
  before_action :find_pokemon, only: [:show, :edit, :update, :destroy]
  # skip_before_action :auth_token, only

  def index
    @pokemons = Pokemon.all
  end

  def update
    @pokemon.update(pokemon_params)
    redirect_to pokemon_path(pokemon.id)
  end

  def create
    pokemon = Pokemon.create(pokemon_params)
    redirect_to pokemon_path(pokemon.id)
  end

  def destroy
    @pokemon.delete
    redirect_to pokemons_path
  end

  private
  def find_pokemon
    @pokemon = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url)
  end
end