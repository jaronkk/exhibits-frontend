var MetadataLabel = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <dt className="metadata-label">
        {this.props.label}
      </dt>
    );
  }
});
