Rails.application.routes.draw do

  root to: "home#index"

  devise_for :users

  get 'users/password' => 'devise/passwords#new' , :defaults => { :format => 'json' }

  resources :users, :only => [:show, :index], :defaults => { :format => 'json' }


  resources :comments
  resources :pinyin_comments
  resources :title_comments
  resources :translations
  # resources :institutions
  # resources :titles

  get 'api/institutions/all_with_ancestry' => 'institutions#all_with_ancestry'
  get 'api/titles' => 'titles#index'
  get 'api/titles/institution/:id' => 'titles#titles_by_institution'
  get 'api/titles/:id' => 'titles#show'
  get 'api/pinyin_comments' => 'pinyin_comments#index'
  get 'api/title_comments' => 'title_comments#index'
  get 'api/user/:id/translations' => 'users#show_translations'
  get 'api/user/:id/comments' => 'users#show_comments'
  get 'api/users/contributors/:has_contributed' => 'users#contributors'
  put 'api/users/change_password' => 'users#change_password'
  put 'api/users/update_profile' => 'users#update_profile'


  get 'admin/users_to_approve' => 'users#authorize'
  get 'admin/all_users' => 'users#index', :defaults => { :format => 'json' }
  put 'admin/approve_user/:id' => 'users#approve'
  get 'admin/translations' => 'translations#index'
  put 'admin/translations/:id' => 'translations#update', :defaults => { :format => 'json' }
  get 'admin/translations_export' => 'translations#export'
  get 'admin/comments_export' => 'comments#export'
  get 'admin/titles_export' => 'titles#export'
  get 'admin/scholars_export' => 'users#export'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
