var MetadataList = React.createClass({
  propTypes: {
    metadata: React.PropTypes.array,
  },

  render: function() {
    var metadataNodes;
    if (this.props.metadata) {
      metadataNodes = this.props.metadata.map(function(metadataField) {
        return [
          (<MetadataLabel key={"label" + metadataField.label} label={metadataField.label} />),
          (<MetadataValue key={"value" + metadataField.label} value={metadataField.value} />)
        ]
      });
    }
    return (
      <dl className="metadata-list">
        {metadataNodes}
      </dl>
    );
  }
});
