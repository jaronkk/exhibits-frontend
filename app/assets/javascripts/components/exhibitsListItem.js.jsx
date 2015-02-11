var ExhibitsListItem = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="exhibits-list-item">
        <ExhibitLink exhibit={this.props.exhibit} />
      </div>
    );
  }
});
