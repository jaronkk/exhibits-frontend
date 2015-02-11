var ItemsList = React.createClass({
  render: function() {
    return (
      <div className="items-list">
        <a href={this.props.itemsUrl}>Items</a>
      </div>
    );
  }
});
