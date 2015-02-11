var ExhibitsListItem = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="well exhibits-list-item">
        <ExhibitLink exhibit={this.props.exhibit} />
      </div>
    );
  }
});
