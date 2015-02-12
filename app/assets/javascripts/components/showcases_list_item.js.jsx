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
    var url = location.pathname + "/showcases/" + encodeURIComponent(showcase['@id']);
    return (
      <div className="well showcases-list-item">
        <a href={url}>
          {thumbnail}
          <br />
          {showcase.name}
        </a>
      </div>
    );
  }
});
