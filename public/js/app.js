class ParentComponent extends React.Component {
    render(){
        return (
            <div className='ui unstackable items'>
                 <ChildComponent/>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div className='ui centered card'>
                <div className='field'>
                    <label>ChildComponent</label>
                </div>
                <button className='ui basic blue button'>
                    Submit!
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ParentComponent />,
    document.getElementById("content")
);