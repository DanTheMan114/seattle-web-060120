class StudentsController < ApplicationController
  before_action :current_user #, only: [:index, :show, :new]
  before_action :redirect_user #, only: [:index, :show, :create]
  
  def index
    # if a user is not logged in, they should not be able to see the index.
    # byebug
    # user = Teacher.find(session[:teacher_id])
    # if user
      @students = Student.all
    # else
    #   flash[:message] = "Please login to view this data"
    #   redirect_to login_path
    # end
  end

  def show
    # user = Teacher.find(session[:teacher_id])
    # if user
      @student = Student.find_by(id: params[:id])
    # else
      # flash[:message] = "Please login to view this data"
      # redirect_to login_path
    # end
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to @student
    else
      render :new
    end
  end

  private
  def student_params
    params.require(:student).permit(:name, :email, :cohort_id)
  end
end
