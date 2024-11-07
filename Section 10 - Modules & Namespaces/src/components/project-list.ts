/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../state/project-state.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

namespace App {
    // ProjectList Class
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        assignedProjects: Project[];

        constructor(private type: 'active' | 'finished') {
            super('project-list', 'app', false, `${type}-projects`);

            this.assignedProjects = [];

            this.configure();
            this.renderContent();
        }

        @autoBind
        dragOverHandler(event: DragEvent) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable');
            }
        }

        @autoBind
        dropHandler(event: DragEvent) {
            const projId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(
                projId,
                this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
            );
        }
        
        @autoBind
        dragLeaveHandler(_: DragEvent) {
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.remove('droppable');
        }

        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);

            projectState.addListener((projects: Project[]) => {
                const relevantProjects = projects.filter((project) => {
                    if (this.type === 'active') {
                        return project.status === ProjectStatus.Active;
                    } else if (this.type === 'finished') {
                        return project.status === ProjectStatus.Finished;
                    }
                    return false;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }

        renderContent() {
            const listId = `${this.type}-project-list`;
            this.element.querySelector('ul')!.id = listId;
            this.element.querySelector('h2')!.textContent = this.type.toString().toUpperCase() + ' PROJECTS';
        }

        private renderProjects() {
            const listEl = document.getElementById(`${this.type}-project-list`) as HTMLUListElement;
            listEl.innerHTML = '';

            for (const projItem of this.assignedProjects) {
                new ProjectItem(this.element.querySelector('ul')!.id, projItem);
            }
        }
    }
}