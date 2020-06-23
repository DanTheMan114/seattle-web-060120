class ApplicationController < ActionController::Base
  #this is a rails actions, not really a ruby method
  # you can't pass in parameters, return values etc.
  # There are two parts to a rails action
  # you will talk to the model to figure out the data the user wants
  # you will instantiate that data, and pass it to the view.
  def home
    # We didn't talk to any models
    # through impilicit rendering rails automatically finds the home view.
  end
end
