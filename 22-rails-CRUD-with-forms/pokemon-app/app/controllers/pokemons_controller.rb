class PokemonsController < ApplicationController
  # skip_before_action :verify_authenticity_token
  def index
    @pokemons = Pokemon.all
  end

  def new
  end

  def edit
    byebug
    @pokemon = Pokemon.find(params[:id])
  end

  def update
    # byebug
    pokemon = Pokemon.find(params[:id])
    pokemon.update(name: params[:name], image_url: params[:image_url])
    redirect_to pokemon_path(pokemon.id)
  end

  def show
    # byebug
    @pokemon = Pokemon.find(params[:id])
  end

  def create
    # byebug
    pokemon = Pokemon.create(name: params[:name], image_url: params[:image_url])
    redirect_to pokemon_path(pokemon.id)
  end
end