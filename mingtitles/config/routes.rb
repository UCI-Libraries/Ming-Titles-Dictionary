Rails.application.routes.draw do

  # devise_for :users

  # post 'auth_user' => 'authentication#authenticate_user'

  root to: "home#index"

  # devise_for :users
  # resources :users

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }

  resources :users, :only => [:show], :defaults => { :format => 'json' }

  resources :comments
  resources :translations
  resources :institutions
  resources :titles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
