import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChecklistChecklistItemComponent extends Component {
s
    @tracked isChecked = false;

    @action itemStatusChange(){
        this.isChecked = !this.isChecked;
    }
}
