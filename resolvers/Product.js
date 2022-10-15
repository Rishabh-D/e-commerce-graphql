
exports.Product = {
    category: (parent, args, context) => {
      const {categories} = context
      const catergoryId = parent.categoryId
      return categories.find(category => category.id === catergoryId)
    },
    reviews: (parent, args, context) => {
      const id = parent.id
      const reviews = context.reviews
      return reviews.filter(review => review.productId == id)
    }
}
  