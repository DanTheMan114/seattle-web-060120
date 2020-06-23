Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # This is like the switchboard for our website
  # It will process our request and figure out which controller and action to go to
  # We define the controllers and Actions
  # <HTTP VERB/METHOD/REQUEST TYPE> '<path>', to: "<controller>#<action>"
  get '/home', to: "application#home"
  get '/pokemons', to: "pokemons#index"
  get '/pokemons/:puppy', to: "pokemons#show"
end
