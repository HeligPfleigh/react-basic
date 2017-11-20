var list;

var Note = React.createClass({
    getInitialState(){
        return ({onEdit: false});
    },

    delete(){
        $.post("/delete", {idXoa: this.props.id}, function(data){
            list.setState({mang: data});
        });
    },

    modify(){
        this.setState({onEdit: true});
    },

    save(){
        $.post('/modify', {idModify: this.props.id, content: this.refs.txt2.value}, function(data){
            list.setState({mang: data});
        });
        this.setState({onEdit: false});
    },

    cancel(){
        this.setState({onEdit: false});
    },

    render() {
        if(this.state.onEdit)
        {
            return (
                <div className="div-note">
                    <input defaultValue={this.props.children} ref='txt2'/>
                    <button onClick={this.save.bind(this)}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            );
        }
        return (
            <div className="div-note">
                <p>{this.props.children}</p>
                <button onClick={this.delete}>Delete</button>
                <button onClick={this.modify}>Modify</button>
            </div>
        );
    }
});

function addDiv(){
    ReactDOM.render(
        <InputDiv />,
        document.getElementById('div-add')
    );
}

var List = React.createClass({
    getInitialState(){
        list = this;
        return({mang: []});
    },

    render(){
        return(
            <div className="div-list">
                <div id="div-add"></div>
                <button onClick={addDiv}>Add</button>
                {this.state.mang.map((note, index)=>{
                    return(<Note key={index} id={index}>{note}</Note>);
                })}
            </div>
        );
    },

    componentDidMount(){
        $.post("/getNotes", (data) => {
            this.setState({mang: data});
        });
    }
});

var InputDiv = React.createClass({
    render(){
        return(
            <div className="div-input">
                <input type='text' ref='txt' placeholder='Enter your note!'/>
                <button onClick={this.send}>Send</button>
            </div>
        );
    },
    send(){
        //list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
        $.post("/add", {note: this.refs.txt.value}, (data) => {
            list.setState({mang: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    }
});


ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById("root")
);