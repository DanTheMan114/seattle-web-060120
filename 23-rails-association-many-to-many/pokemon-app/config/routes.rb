Rails.application.routes.draw do
  resources :pokemons
  resources :pokemons_trainers
  resources :trainers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # This is like the switchboard for our website
  # It will process our request and figure out which controller and action to go to
  # We define the controllers and Actions
  # <HTTP VERB/METHOD/REQUEST TYPE> '<path>', to: "<controller>#<action>"
  # get '/home', to: "application#home"
  # get '/pokemons', to: "pokemons#index"
  # get 'pokemons/new', to: "pokemons#new"
  # get '/pokemons/:id', to: "pokemons#show", as: "pokemon"
  # post '/pokemons', to: "pokemons#create", as: "create_pokemon"
  # get '/pokemons/:id/edit',to: "pokemons#edit", as: "edit_pokemon"
  # patch 'pokemons/:id', to: "pokemons#update", as: "update_pokemon"
  get '/trainers/:id/choose_pokemon', to: "trainers#choose_pokemon", as: "choose_pokemon"
  post 'trainers/:id', to: "trainers#create_pokemons", as: "create_pokemons"
end
