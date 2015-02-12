var ShowcaseScrollSectionText = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <div className="showcase-scroll-section-text">
        <h2>{this.props.name}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.description}} />
      </div>
    );
  }
});
