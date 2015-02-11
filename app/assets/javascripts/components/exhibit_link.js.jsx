var ExhibitLink = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
    path: React.PropTypes.string,
    title: React.PropTypes.string,
  },

  render: function() {
    var exhibit = this.props.exhibit;
    var url = "/exhibits/" + encodeURIComponent(exhibit['@id']);
    if (this.props.path) {
      url = url + '/' + this.props.path;
    }
    var title = this.props.title || exhibit.name;
    return (
      <a className={this.props.className} href={url}>{title}</a>
    );
  }
});

