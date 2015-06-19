Rails.application.routes.draw do
get 'sessions/new'
get '/users/:zip_code', to: 'user#show'
get '/users', to: 'users#index'
resources :comments
resources :posts
resources :users
get '/signup', to: 'users#new'

get '/login', to: 'sessions#new', as: 'login'
post '/login', to: 'sessions#create', as: 'create_session'
get '/logout', to: 'sessions#destroy', as: 'logout'
root 'application#index'
end
