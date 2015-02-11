var ItemsListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="well items-list-item">
        {this.props.item.name}
      </div>
    );
  }
});
