class CustomersController < ApplicationController
  before_action(:customer_find, {only: [:show]})

  # make one
  def index
    @customers = Customer.all
  end

  # def show
  # end

  private
  def customer_find
    @customer = Customer.find(params[:id])
  end
end
