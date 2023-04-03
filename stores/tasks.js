export const useTaskStore = definePiniaStore(
    'taskStore',
    {
        state: () => (
            {
                tasks: [],
                isLoading: false,
            }
        ),
        getters: {
            favorites() {
                return this.tasks.filter(t => t.isFav)
            },
            favoritesCount() {
                return this.tasks.reduce((p, c) => {
                    return c.isFav ? p + 1 : p
                }, 0)
            },
            totalCount: (state) => {
                return state.tasks.length;
            }

        },
        actions: {
            async getTasks() {
                this.isLoading = true;

                try {
                    const response = await fetch('http://localhost:3000/tasks');
                    const data = await response.json();
                    this.tasks = data;
                    this.isLoading = false;
                } catch (error) {
                    console.error(error);
                    this.isLoading = false;
                }
            },
            async addTask(task) {
                this.tasks.push(task);
                try {
                    await fetch('http://localhost:3000/tasks', {
                        method: 'POST',
                        body: JSON.stringify(task),
                        headers: { 'Content-Type': 'application/json' }
                    })
                } catch (error) {
                    console.error(error)
                }

            },
            async deleteTask(id) {
                this.tasks = this.tasks.filter(t => {
                    return t.id !== id
                })
                try {
                    await fetch('http://localhost:3000/tasks/' + id, {
                        method: 'DELETE',

                    })
                } catch (error) {
                    console.error(error)
                }
            },
            async toggleFavorites(id) {
                const task = this.tasks.find(t => t.id === id)
                task.isFav = !task.isFav;
                try {
                    await fetch('http://localhost:3000/tasks/' + id, {
                        method: 'PATCH',
                        body: JSON.stringify({ isFav: task.isFav }),
                        headers: { 'Content-Type': 'application/json' }

                    })
                } catch (error) {
                    console.error(error)
                }
            },    

        },
    }
)