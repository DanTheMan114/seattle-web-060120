Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  
  root to: "students#index"
  get '/login', to: "auth#login", as: "login_path"
  post '/login', to: "auth#verify_username"
end
