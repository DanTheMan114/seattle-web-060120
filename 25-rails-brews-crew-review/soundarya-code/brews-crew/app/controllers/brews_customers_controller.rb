class BrewsCustomersController < ApplicationController
  def new
    @brews_customer = BrewsCustomer.new
    @brews = Brew.all
    @customers = Customer.all
  end

  def create
    # byebug
    @brews_customer = BrewsCustomer.new(brews_customer_params)
    # params[:brews_customer][:customer_id]
    if @brews_customer
      # @customers = Customer.all
      # @brews = Brew.all
      redirect_to customer_path(@brews_customer.customer_id)
      # render :new
    else
      render :new
    end
  end

  private
  def brews_customer_params
    params.require(:brews_customer).permit(:customer_id, :brew_id)
  end
end
