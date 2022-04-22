import Button from "./components/Button";
import Component from "./core/Component";

export default class App extends Component {
    
    template() {
        return `
        <btn data-component="btn"></btn>
        `;
    }

    mounted () {
        const $btn = this.$target.querySelector('[data-component="btn"]');

        new Button($btn);
    }
}