var ExhibitShow = React.createClass({
  propTypes: {
    exhibit_url: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      exhibit: {},
    };
  },

  componentDidMount: function() {
    $.get(this.props.exhibit_url, function(result) {
      this.setState({
        exhibit: result,
      })
    }.bind(this));
  },

  render: function() {
    var exhibit = this.state.exhibit;
    return (
      <div className="exhibit-show">
        <ExhibitNav exhibit={exhibit} />
        {exhibit.name}
      </div>
    );
  }
});
