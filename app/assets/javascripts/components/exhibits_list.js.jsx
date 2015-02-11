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
      var nodes = [];
      if (index > 0) {
        if (index%3 == 0) {
          nodes.push ((
            <div className="clearfix"></div>
          ));
        }
      }
      nodes.push((
        <div className="col-sm-4" key={exhibit['@id']}>
          <ExhibitsListItem exhibit={exhibit} />
        </div>
      ));
    });
    return (
      <div className="exhibits-list">
        <div className="container">
          <h1>Exhibits</h1>
          <div className="row">
            {exhibitNodes}
          </div>
        </div>
      </div>
    );
  }
});
