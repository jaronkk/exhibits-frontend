var ExhibitNav = React.createClass({
  propTypes: {
    exhibit: React.PropTypes.object.isRequired,
  },

  render: function() {
    var exhibit = this.props.exhibit;
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>

        <ExhibitLink className="navbar-brand" exhibit={this.props.exhibit} />
      </nav>
    );
  }
});

