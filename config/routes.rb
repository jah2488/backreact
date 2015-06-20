Rails.application.routes.draw do
  get '/users/:id', to: 'users#show'
  get '/users',  to:'users#index'
  post '/users', to: 'users#create'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  get '/search/zipcode/:zip_code', to: 'users#get_pair'

  get '/posts/:id', to: 'posts#show'
  get '/posts',  to:'posts#index'
  post '/posts', to: 'posts#create'
  put '/posts/:id', to: 'posts#update'
  delete '/posts/:id', to: 'posts#destroy'
  get '/recentpost', to: 'posts#get_recent_post'

  get '/comments/:id', to: 'comments#show'
  get '/comments',  to:'comments#index'
  post '/comments', to: 'comments#create'
  put '/comments/:id', to: 'comments#update'
  delete '/comments/:id', to: 'comments#destroy'

  get '/signup', to: 'users#new'

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create', as: 'create_session'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  root 'application#index'
end
