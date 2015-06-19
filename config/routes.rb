Rails.application.routes.draw do


get '/users/:zip_code', to: 'user#show'
get '/users',  to:'users#index'
post '/users', to: 'users#create'
get '/users/edit/:id', to: 'users#update'
put '/users/edit/:id', to: 'users#update'
delete '/users/:id', to: 'users#destroy'


get '/signup', to: 'users#new'

get '/login', to: 'sessions#new', as: 'login'
post '/login', to: 'sessions#create', as: 'create_session'
get '/logout', to: 'sessions#destroy', as: 'logout'
root 'application#index'
end
