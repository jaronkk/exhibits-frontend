var ExhibitsList = React.createClass({
  propTypes: {
    exhibitsUrl: React.PropTypes.string.isRequired,
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
        <div className="col-sm-4" key={exhibit['@id']}>
          <ExhibitsListItem exhibit={exhibit} />
        </div>
      );
    });
    return (
      <div className="exhibits-list">
        <div className="container">
          <div className="row">
            {exhibitNodes}
          </div>
        </div>
      </div>
    );
  }
});
