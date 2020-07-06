Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  
  root to: "students#index"
  get '/login', to: "auth#login", as: "login"
  post '/login', to: "auth#verify_username"
  get '/logout', to: "auth#logout", as: "logout"
end
