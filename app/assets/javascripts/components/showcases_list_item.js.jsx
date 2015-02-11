var ShowcasesListItem = React.createClass({
  propTypes: {
    showcase: React.PropTypes.object.isRequired,
  },

  render: function() {
    var showcase = this.props.showcase;
    var thumbnail;
    if (showcase['hasPart/item']) {
      thumbnail = (
        <ShowcasesListItemThumbnail itemUrl={showcase['hasPart/item']} />
      );
    }
    return (
      <div className="well showcases-list-item">
        {thumbnail}
        <br />
        {showcase.name}
      </div>
    );
  }
});
