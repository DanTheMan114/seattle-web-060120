class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    # byebug
    @teacher = Teacher.create(teacher_params)
    # session[:teacher_id] = @teacher.id
    flash[:message] = "Welcome, please log in!!"
    redirect_to login_path
  end

  private
  def teacher_params
    params.require(:teacher).permit(:username)
  end
end
