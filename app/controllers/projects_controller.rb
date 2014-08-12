class ProjectsController < ApplicationController
  def index
    if current_user
  	 @projects = current_user.projects.all
    else
      redirect_to new_sessions_path
    end

  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  	@project = Project.new
  end

  def create
  	@project = current_user.projects.new(params.require(:project).permit(:title, :text))
  	if @project.save
      redirect_to projects_path
  	end
  end

  def edit
    if current_user && current_user.id == Project.find(params[:id]).user_id
  	 @project = Project.find(params[:id])
   else
    redirect_to projects_path
   end
  end
  
  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(params.require(:project).permit(:title, :text))
      redirect_to projects_path
    else
      render 'edit'
    end
  end

  def destroy
    @project = Project.find(params[:id]).destroy
    redirect_to projects_path
  end


end
