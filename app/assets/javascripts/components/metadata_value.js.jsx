var MetadataValue = React.createClass({
  propTypes: {
    value: React.PropTypes.any.isRequired,
  },

  render: function() {
    return (
      <dd className="metadata-value">
        {this.props.value}
      </dd>
    );
  }
});
