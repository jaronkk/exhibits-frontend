var ExhibitLink = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
  },

  render: function() {
    var exhibit = this.props.exhibit;
    var url = "/exhibits/" + encodeURIComponent(exhibit['@id']);
    return (
      <a className={this.props.className} href={url}>{exhibit.name}</a>
    );
  }
});

