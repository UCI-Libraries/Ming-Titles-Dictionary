class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(resource)
    '/an/example/path' # Or :prefix_to_your_route
    MyMailer.notify_superadmin_new_scholar(resource).deliver
    sign_out resource
  end
end
