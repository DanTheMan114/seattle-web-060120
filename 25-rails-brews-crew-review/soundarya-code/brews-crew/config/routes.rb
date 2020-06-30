Rails.application.routes.draw do
  resources :brews_customers
  resources :customers
  get "/brews/strongest", to: "brews#strongest", as: "strongest"
  resources :brews
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
