class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    @teacher = Teacher.create(teacher_params)
    # byebug
    # session[:teacher_id] = @teacher.id
    flash[:message] = "Welcome, please log in!!"
    redirect_to login_path
  end

  private
  def teacher_params
    params.require(:teacher).permit(:username, :password)
  end
end
