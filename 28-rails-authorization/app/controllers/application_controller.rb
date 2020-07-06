class ApplicationController < ActionController::Base
  helper_method :current_user, :redirect_user, :logged_in?

  def logged_in?
    !!current_user
  end

  def current_user
    user = Teacher.find(session[:teacher_id]) if session[:teacher_id]
  end

  def redirect_user
    if !current_user
      flash[:message] = "Please login to view this data"
      redirect_to login_path
    end
  end
end