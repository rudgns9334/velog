import Component from "../core/Component";

export default class Button extends Component {

    setup () {
        this.$state = {
            mode:"",
            selectId: 2,
            list:[
                {
                    id: 1,
                    value: "오늘"
                },
                {
                    id: 2,
                    value: "이번 주"
                },
                {
                    id: 3,
                    value: "이번 달"
                },
                {
                    id: 4,
                    value: "올해"
                },
            ],
            clicked: false
        }
    }
    
    template () {
        const { selectId, mode, list } = this.$state;
        return `
            <div class="dropDown">
                <button class="dropDown-btn">${list.find((e) => e.id === selectId).value}</button>
                
                <div class="subMenu ${mode}">
                    ${list.map((e) =>`
                        <div id=${e.id} ${e.id===selectId ? 'class="menu selected"':'class="menu"'}>${e.value}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    setEvent() {
        this.addEvent('click','html',({target}) => {
            const { clicked } = this.$state;
            console.log(target.className);
            if(target.className==='dropDown-btn' && !clicked){
                this.modeChange("fadeIn");
                this.clickBtn();
                console.log(1);
            }
            else if(clicked){
                this.modeChange("fadeOut");
                this.clickBtn();
                console.log(2);
            }
        })

        this.addEvent('click','.menu',({target}) => {
            this.changeList(Number(target.id));
        })
    }

    modeChange(str) {
        this.setState({
            mode: str
        });
    }

    clickBtn() {
        const { clicked } = this.$state;
        const changeClicked = !clicked;
        this.setState({
            clicked: changeClicked
        });
    }

    changeList(id) {
        this.setState({
            selectId: id,
            clicked: false
        });
    }
}