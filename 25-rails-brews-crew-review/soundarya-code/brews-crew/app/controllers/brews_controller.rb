class BrewsController < ApplicationController
  def index
    @brews = Brew.all
  end

  def show
    # byebug
    @brew = Brew.find(params[:id])
  end

  def destroy
    @brew = Brew.find(params[:id])
    @brew.delete
    redirect_to brews_path
  end

  def new
    @brew = Brew.new
  end

  def create
    # byebug
    @brew = Brew.new(brew_params)
    if @brew.save
      redirect_to @brew
    else 
      render :new
    end
  end

  def strongest
    @strongest_brews = Brew.strongest_brews
  end
  
  private
  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end
end
