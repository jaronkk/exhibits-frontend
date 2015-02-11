var ShowcasesListItemThumbnail = React.createClass({
  mixins: [ItemMixin],

  render: function() {
    var item = this.state.item;
    var thumbnail;
    if (item.image) {
      thumbnail = (
        <Thumbnail image={item.image} />
      );
    }
    return (
      <span className="showcase-thumbnail">
        {thumbnail}
      </span>
    );
  }
});
