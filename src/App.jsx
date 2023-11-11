import { useState } from "react";
import Form from "./UI/Form";
import Layout from "./UI/Layout";
import NoProject from "./UI/NoProject";
import Sidebar from "./UI/Sidebar";
import ProjectTask from "./UI/ProjectTask";
import ProjectList from "./UI/ProjectList";
import Main from "./UI/Main";

function App() {
  const [projects, setProject] = useState([])
  const [tasks, setTasks] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [activeId, setActiveId] = useState(null);


  const handleSaveProject = (data) => {
    setShowForm(false)
    setProject((prevProject) => {
      return [
        ...prevProject,
        data
      ]
    })
  }

  const handleClick = (data) => {
    setShowForm(false)
    setSelectedProject(data)
  }

  const handleAddProject = (data) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        data
      ]
    })
  }

  const handleClearTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.task_id !== taskId)
    })
  }

  const handleDeleteProject = (projectId) => {
    setProject((prevProject) => {
      return prevProject.filter(project => project.id !== projectId)
    })

    setSelectedProject(null)
  }

  return (
    <Layout>

      <Sidebar
        setFormStatus={setShowForm}
        setSelectedProjectStatus={setSelectedProject}
        onSetActiveId={setActiveId}
      >
        <ProjectList projects={projects}
          onSelectProject={handleClick}
          onSetActiveId={setActiveId}
          activeId={activeId}
        />
      </Sidebar>

      <Main>
        {!showForm && !selectedProject &&
          <NoProject
            onCreateProject={setShowForm}
            onSetSelectedProjectStatus={setSelectedProject}
          />}
        {showForm &&
          <Form
            onSaveProject={handleSaveProject}
            onCreateProject={setShowForm}
            onSetSelectedProjectStatus={setSelectedProject}
          />
        }
        {selectedProject &&
          <ProjectTask
            project={selectedProject}
            onAddProject={handleAddProject}
            list={tasks}
            onClearTask={handleClearTask}
            onDeleteProject={handleDeleteProject}
          />}
      </Main>

    </Layout>
  );
}

export default App;
