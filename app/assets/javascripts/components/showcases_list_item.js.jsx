var ShowcasesListItem = React.createClass({
  propTypes: {
    showcase: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="well showcases-list-item">
        {this.props.showcase.name}
      </div>
    );
  }
});
