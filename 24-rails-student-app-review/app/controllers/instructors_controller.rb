class InstructorsController < ApplicationController
  before_action :set_instructor, only:[:show, :edit, :update]

  def index
    @instructors = Instructor.all
  end

  def new
    @instructor = Instructor.new
  end

  def create
    @instructor = Instructor.new(instructor_params)
    if @instructor.save
      redirect_to @instructor
    else 
      flash[:message] = @instructor.errors.full_messages
      render :new
    end
  end

  def update
    # byebug
    if @instructor.update(instructor_params)
      redirect_to @instructor
    else
      flash[:message] = @instructor.errors.full_messages
      render :edit
    end
  end

  private
  def instructor_params
    params.require(:instructor).permit(:name)
  end

  def set_instructor
    @instructor = Instructor.find(params[:id])
  end
end
