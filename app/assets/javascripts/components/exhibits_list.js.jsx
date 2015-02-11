var ExhibitsList = React.createClass({
  propTypes: {
    exhibits_url: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      exhibits: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.exhibitsUrl, function(result) {
      this.setState({
        exhibits: result,
      })
    }.bind(this));
  },

  render: function() {
    var exhibitNodes = this.state.exhibits.map(function(exhibit) {
      return (
        <ExhibitsListItem key={exhibit['@id']} exhibit={exhibit} />
      );
    });
    return (
      <div className="exhibits-list">
        {exhibitNodes}
      </div>
    );
  }
});
