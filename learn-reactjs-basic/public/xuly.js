function getName(name){
    alert(name);
}

var TuanTran = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.ten}</h1>
                <div>So hoc vien: {this.state.tongHocVien}</div>
                <button onClick={this.addStudent}>Them Hoc Vien</button>
                <p>{this.props.children}</p>
                <button onClick={()=>{getName(this.props.ten)}}>Thong tin</button>
                <KhoaHoc ten={this.props.ten}/>
            </div>
        );
    },

    layThongTin: function(){
        alert(this.props.children);
    },
    addStudent: function(){
        this.state.tongHocVien += 1;
        this.setState(
            this.state
        );
    },
    getInitialState(){
        return {tongHocVien: parseInt(this.props.tongHocVien)};
    }
});

var KhoaHoc = React.createClass({
    render: function () {
        return (
            <h3>Lap trinh {this.props.ten}</h3>
        );
    }
});

var InputTag = React.createClass({
    render(){
        return(
            <div>
                <select ref='sl'>
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>

                </select>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi</button>
            </div>
        );
    },

    show(){
        var text = this.refs.sl.value;
        alert(text);
    }
});

ReactDOM.render(
    <div>
        <InputTag />
        <TuanTran ten="ReactJS" tongHocVien="10">Mon hoc React</TuanTran>
        <TuanTran ten="NodeJS" tongHocVien="20">Mon hoc Node</TuanTran>
    </div>,
    document.getElementById("root")
);