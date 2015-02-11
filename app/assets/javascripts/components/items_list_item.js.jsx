var ItemsListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="items-list-item">
        {this.props.item.name}
      </div>
    );
  }
});
