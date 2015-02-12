var ShowcaseScrollTitle = React.createClass({
  propTypes: {
    showcase: React.PropTypes.object.isRequired,
  },

  render: function() {
    var showcase = this.props.showcase;
    return (
      <div className="showcase-scroll-title">
        <h1>{showcase.name}</h1>
        <div dangerouslySetInnerHTML={{__html: showcase.description}}></div>
      </div>
    );
  }
});
