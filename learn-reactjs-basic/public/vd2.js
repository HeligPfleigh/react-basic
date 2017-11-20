
var Album = React.createClass({
    getInitialState(){
        return {hinh: 1};
    },

    render(){
        return(
            <div className='div-album'>
                <img src={"images/"+this.state.hinh+".png"}/>
                <button onClick={this.next}>Next</button>
                <button onClick={this.previous}>Previous</button>
            </div>
        );
    },

    next(){
        if(this.state.hinh < 7)
            this.state.hinh += 1;
        this.setState(this.state);
    },

    previous(){
        if(this.state.hinh > 1)
            this.state.hinh -= 1;
        this.setState(this.state);
    }
});

ReactDOM.render(
    <div>
        <Album/>
    </div>,
    document.getElementById("root")
);