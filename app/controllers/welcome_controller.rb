class WelcomeController < ApplicationController

  def create
    @student = Student.new(student_params)
    if @student.save
      log_in @student
      flash[:success] = "Welcome to the Analytics Rating App!"
      redirect_to @student
    else
      render 'new'
    end
  end
end
