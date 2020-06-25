class PokemonsController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :set_pokemon, only: [:show, :edit, :update, :destroy]

  def index
    @pokemons = Pokemon.all
  end

  def show
  end

  def new
  end

  def edit
  end

  def update
    pokemon.update(pokemon_params)
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
  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url)
  end
end