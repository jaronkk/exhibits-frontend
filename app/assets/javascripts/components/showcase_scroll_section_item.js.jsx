var ShowcaseScrollSectionItem = React.createClass({
  mixins: [ItemMixin],

  render: function() {
    var item = this.state.item;
    var imageNode;
    if (item.image) {
      imageNode = (
        <Thumbnail image={item.image} thumbnailType='medium' />
      );
    }
    return (
      <div className="showcase-scroll-section-item">
        {imageNode}
      </div>
    );
  }
});
