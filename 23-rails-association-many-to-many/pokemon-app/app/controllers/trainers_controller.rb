class TrainersController < ApplicationController
  before_action :find_trainer, only:[:show, :choose_pokemon, :create_pokemons]
  def index
    @trainers = Trainer.all
  end

  def create_pokemons
    @trainer.pokemon_ids = params[:trainer][:pokemon_ids]
    redirect_to trainers_path
  end

  private
  def trainer_params
    params.require(:trainer).permit(:name, :age, pokemon_ids: [])
  end

  def find_trainer
    @trainer = Trainer.find(params[:id])
  end
end
