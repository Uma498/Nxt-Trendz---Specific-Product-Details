import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props

  const {title, brand, imageUrl, price, rating} = productDetails

  return (
    <li className="similar-products-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-img"
      />
      <p className="similar-products-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-products-price-container">
        <p className="similar-products-price">Rs {price}</p>
        <div className="similar-products-rating-container">
          <p className="similar-products-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-products-star-img"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
