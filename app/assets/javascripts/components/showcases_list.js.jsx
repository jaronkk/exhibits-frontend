var ShowcasesList = React.createClass({
  propTypes: {
    showcasesUrl: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      showcases: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.showcasesUrl, function(result) {
      this.setState({
        showcases: result,
      })
    }.bind(this));
  },

  render: function() {
    var showcaseNodes = this.state.showcases.map(function(showcase) {
      return (
        <div className="col-sm-4" key={showcase['@id']}>
          <ShowcasesListItem showcase={showcase} />
        </div>
      );
    });
    return (
      <div className="showcases-list">
        <div className="container">
          <div className="row">
            {showcaseNodes}
          </div>
        </div>
      </div>
    );
  }
});
