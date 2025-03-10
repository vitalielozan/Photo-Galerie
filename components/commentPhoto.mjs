//import Router from "./router.mjs";

export default class CommentPhoto {
    constructor(props) {
        this.props = props;
    }

    render() {
        return `
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Live your comment</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="input-group">
                <span class="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" class="form-control">
                <input type="text" aria-label="Last name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
        `;
    }
}

