var ShowcaseScrollSections = React.createClass({
  propTypes: {
    showcase: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      sections: [],
    };
  },

  componentDidMount: function() {
    $.get(this.props.showcase['hasPart/sections'], function(result) {
      this.setState({
        sections: result,
      })
    }.bind(this));
  },

  render: function() {
    var sectionNodes = this.state.sections.map(function(section) {
      return (
        <ShowcaseScrollSection key={section['@id']} section={section} />
      )
    });
    return (
      <div className="showcase-scroll-sections">
        {sectionNodes}
      </div>
    );
  }
});
