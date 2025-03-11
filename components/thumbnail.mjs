import Router from "./router.mjs";


export default class Thumbnail {
  constructor(props) {
    this.props = props;

    document.addEventListener('click', (e) => (e.target && e.target.classList.contains('link-button')) && this.onLinkClicked(e));
  }

  onLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const { title, link } = e.target.dataset;
    Router.instance.pushHistory({ title, link });
  }

  render() {
    return `
        <div class="thumbnail">
            <figure class="figure">
                <img src="${this.props.srcThumbnail}" alt="${this.props.title}" class="rounded" height="130" alt="fluture">
                <figcaption class="figure-caption">
                        <h4>${this.props.title}</h4>
                        <p>${this.props.shortDesc}</p>
                        <button data-title="${this.props.title}" data-link="/single-photo?id=${this.props.id}" class="btn btn-success link-button" role="button">See more</button>
                </figcaption>
            </figure>
        </div>    
    `;
  }
}
