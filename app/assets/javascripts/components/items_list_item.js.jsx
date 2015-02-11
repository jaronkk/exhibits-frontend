var ItemsListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    var thumbnail;
    if (this.props.item.image) {
      thumbnail = (
        <Thumbnail image={this.props.item.image} />
      );
    }
    return (
      <div className="well items-list-item">
        {thumbnail}
        <br />
        {this.props.item.name}
      </div>
    );
  }
});
