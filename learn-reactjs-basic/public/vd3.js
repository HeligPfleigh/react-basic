var Note = React.createClass({
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <p>{this.props.src}</p>
            </div>
            
        );
    }
});

var List = React.createClass({
    getInitialState(){
        return({mang: [
            {src:"image1.png", noiDung:"hello"},
            {src:"image2.png", noiDung:"hi"},
            {src:"image3.png", noiDung:"ciao"}
        ]});
    },

    add(){
        this.state.mang.push({src:"Bonjour", noiDung:"Nihao"});
        this.setState(this.state);
    },

    render(){
        return (
            <div>
                <button onClick={this.add}>Them</button>
                {this.state.mang.map((note, index)=>{
                    return (<Note src={note.src} key={index}>{note.noiDung}</Note>);
                })}
            </div>
        );
    }
});


ReactDOM.render(
    <div>
        <List />
    </div>,
    document.getElementById("root")
);