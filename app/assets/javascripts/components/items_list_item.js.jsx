var ItemsListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    var item = this.props.item;
    var thumbnail;
    if (item.image) {
      thumbnail = (
        <Thumbnail image={item.image} />
      );
    }
    var url = "items/" + encodeURIComponent(item['@id']);
    return (
      <div className="well items-list-item">
        {thumbnail}
        <br />
        <a href={url}>{item.name}</a>
      </div>
    );
  }
});
