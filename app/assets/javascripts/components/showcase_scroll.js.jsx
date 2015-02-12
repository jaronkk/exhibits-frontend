var ShowcaseScroll = React.createClass({
  mixins: [ShowcaseMixin],

  render: function() {
    var showcase = this.state.showcase;
    return (
      <div className="showcase-scroll">
        <h1>{showcase.name}</h1>
      </div>
    );
  }
});
