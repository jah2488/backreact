Rails.application.routes.draw do
  get '/users/:id', to: 'users#show'
  get '/users',  to:'users#index'
  post '/users', to: 'users#create'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  get '/search/zipcode/:zip_code', to: 'users#get_pair'

  get '/signup', to: 'users#new'

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create', as: 'create_session'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  root 'application#index'
end
