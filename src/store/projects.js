export default {
    namespaced: true,
    state: {
        projects: null
    },
    actions: {
        save({state, getters}, project){
            state.projects = getters.projects 
            state.projects.unshift(project)
            window.localStorage.setItem('projects', JSON.stringify(state.projects))
        }
    },
    getters: {
        projects(state){
            if(state.projects) {
                return state.projects
            }
            let storageProjects = window.localStorage.getItem('projects')
            return storageProjects ? JSON.parse(storageProjects) : []
        }
    }
}