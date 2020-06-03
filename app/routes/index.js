import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

    /*async model(){
        return {
            title: "Chores",
            description: "Checklist for household chores",
            status: "unstarted",
            items: [
                {title: 'Wash dishes'},
                {title: 'make bed'},
            ],
        }
    }*/

    async model(){
        let response = await fetch('/api/checklists.json');
        let {data} = await response.json();

        return data.map(model => {
            let { attributes } = model;

            return {...attributes};
        })
    }
}
