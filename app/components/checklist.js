import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChecklistComponent extends Component {
    @tracked status = 'unstarted';

    @action unstartedToStarted(){
        this.status = 'started'
    }

    @action startedToUnstarted(){
        this.status = 'unstarted'
    }

    @action startedToCompleted(){
        this.status = 'completed'
    }
}

