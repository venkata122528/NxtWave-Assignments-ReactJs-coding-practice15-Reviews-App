// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {clickCount: 0}
  }

  onClickDecrease = () => {
    const {clickCount} = this.state
    if (clickCount !== 0) {
      this.setState({
        clickCount: clickCount - 1,
      })
    }
  }

  onClickIncrease = () => {
    const {clickCount} = this.state
    const {reviewsList} = this.props
    const length = reviewsList.length - 1
    if (clickCount !== length) {
      this.setState({
        clickCount: clickCount + 1,
      })
    }
  }

  render() {
    const {clickCount} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[clickCount]

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="mainHeading">Reviews</h1>
          <div className="reviewDataContainer">
            <div className="arrowButtonsContainer">
              <button
                className="button"
                type="button"
                data-testid="leftArrow"
                onClick={this.onClickDecrease}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="leftArrowImage"
                />
              </button>
            </div>
            <div className="reviewPhotoContainer">
              <img src={imgUrl} alt={username} className="personPhoto" />
              <p className="userName">{username}</p>
            </div>
            <div className="arrowButtonsContainer">
              <button
                className="button"
                type="button"
                data-testid="rightArrow"
                onClick={this.onClickIncrease}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="rightArrowImage"
                />
              </button>
            </div>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="reviewText">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
