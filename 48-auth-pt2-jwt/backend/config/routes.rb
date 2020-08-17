Rails.application.routes.draw do
  resources :arts, only: [:create]
  resources :artists
  resources :users, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/login", to: "users#login"
  get "/persist", to: "users#persist"
end
