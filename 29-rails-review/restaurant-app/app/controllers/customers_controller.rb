class CustomersController < ApplicationController
  before_action :find_customer, only: [:edit, :update, :destroy]

  def index
    @customers = Customer.all
  end

  def new
    @customer = Customer.new
  end

  def create
    # byebug
    @customer = Customer.create(customer_params)
    redirect_to customers_path
  end

  # def edit
  #   # @customer = Customer.find(params[:id])
  # end

  def update
    # @customer = Customer.find(params[:id])
    @customer.update(customer_params)
    redirect_to customers_path
  end

  def destroy
    # byebug
    # @customer = Customer.find(params[:id])
    @customer.delete
    redirect_to customers_path
  end

  private
  def customer_params
    params.require(:customer).permit(:name, :age, :location, restaurant_ids: [])
  end

  def find_customers
    @customer = Customer.find(params[:id])
  end
end
