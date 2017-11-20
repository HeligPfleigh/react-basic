var Com = React.createClass({
    getInitialState(){
        return {num : 0};
    },

    render(){
        return (
            <button onClick={this.addNum}>Hello {this.state.num}</button>
        );
    },

    addNum(){
        this.state.num += 1;
        this.setState(this.state);
    }
})
ReactDOM.render(
    <div>
        <Com />
    </div>,
    document.getElementById("root")
);