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
  # resources :titles

  get 'api/institutions/all_with_ancestry' => 'institutions#all_with_ancestry'
  get 'api/titles' => 'titles#index'
  get 'api/titles/institution/:id' => 'titles#titles_by_institution'
  get 'api/titles/:id' => 'titles#show'

  get 'admin/users_to_approve' => 'users#authorize'
  get 'admin/all_users' => 'users#index'
  put 'admin/approve_user/:id' => 'users#approve'
  get 'admin/translations' => 'translations#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
