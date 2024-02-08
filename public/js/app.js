class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ["Item 1"],
      };
    }
  
    render() {
      return (
        <div className="ui unstackable items">
          {this.state.items.map((item, index) => (
            <ChildComponent
              key={index}
              item={item}
              changeColor={() => this.changeColor(index)}
            />
          ))}
          <button className="add-item-btn" onClick={this.addItem}>
            Add Item
          </button>
        </div>
      );
    }
  
    addItem = () => {
      const newItem = `Item ${this.state.items.length + 1}`;
      this.setState(prevState => ({
        items: [...prevState.items, newItem]
      }));
    };
  
    changeColor(index) {
      const items = [...this.state.items]; 
      items[index] = (
        <span style={{ color: this.getRandomColor() }}>{items[index]}</span>
      ); 
      this.setState({ items }); 
    }
  
    getRandomColor() {
      // Generate a random color
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  
  class ChildComponent extends React.Component {
    render() {
      const { item } = this.props;
      return (
        <div className="ui centered card">
          <div className="field">
            <label>{item}</label>
          </div>
          <button className="change-color-btn" onClick={this.handleChangeColor}>
            Click here to change color
          </button>
        </div>
      );
    }
  
    handleChangeColor = () => {
      this.props.changeColor();
    };
  }
  
  ReactDOM.render(<ParentComponent />, document.getElementById("content"));
  