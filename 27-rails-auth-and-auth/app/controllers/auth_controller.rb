class AuthController < ApplicationController
  def login #similar to our new action
  end

  def verify_username #similar to our post
    # byebug
    @teacher = Teacher.find_by(username: params[:auth][:username])
    if @teacher 
      session[:teacher_id] = @teacher.id
      redirect_to students_path
    else 
      flash[:message] = "Please enter the right credentials"
      render :login
    end
  end
end