var ExhibitsListItem = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
  },

  render: function() {
    var exhibit = this.props.exhibit;
    var url = "/exhibits/" + encodeURIComponent(exhibit['@id']);
    return (
      <div className="exhibits-list-item">
        <a href={url}>{exhibit.name}</a>
      </div>
    );
  }
});
