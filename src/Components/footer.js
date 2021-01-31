

function Footer() {
  return (
    <footer className="page-footer hf-background footer-set">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Note:</h5>
            <p className="grey-text text-lighten-4">All tools are in alpha stage of development and will continue to be fine-tuned.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/dyson1602/NBAnalyst-front-end">Github</a></li>
              <li><a className="grey-text text-lighten-3" href="https://christopher-michael-clark.medium.com/">Blog</a></li>
              <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/christopher-michael-clark/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Christopher Michael Clark
      </div>
      </div>
    </footer>
  )
}


export default Footer