class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ['Item 1', 'Item 2', 'Item 3']
      };
    }
  
    render() {
      return (
        <div className="ui unstackable items">
          {this.state.items.map((item, index) => (
            <ChildComponent key={index} item={item} changeColor={() => this.changeColor(index)} />
          ))}
        </div>
      );
    }
  
    changeColor(index) {
        const items = [...this.state.items]; // Copy the items array
        items[index] = <span style={{ color: this.getRandomColor() }}>{items[index]}</span>; // Change the color of the item at the specified index
        this.setState({ items }); // Update the state with the new items array
      }
    
      getRandomColor() {
        // Generate a random color
        return '#' + Math.floor(Math.random()*16777215).toString(16);
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
      // Call the changeColor function passed from parent
      this.props.changeColor();
    }
  }
  
  ReactDOM.render(<ParentComponent />, document.getElementById("content"));