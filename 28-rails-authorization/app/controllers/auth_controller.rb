class AuthController < ApplicationController
  def login #similar to our new action
  end

  def verify_username #similar to our post
    @teacher = Teacher.find_by(username: params[:auth][:username])
    # byebug
    if @teacher && @teacher.authenticate(params[:auth][:password])
      session[:teacher_id] = @teacher.id
      redirect_to students_path
    else
      flash[:message] = "Please enter the right credentials"
      render :login
    end
  end

  def logout
    # byebug
    session.clear
    redirect_to login_path
  end
end