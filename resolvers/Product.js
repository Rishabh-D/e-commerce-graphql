
exports.Product = {
    category: (parent, args, context) => {
      const {categories} = context
      const catergoryId = parent.categoryId
      return categories.find(category => category.id === catergoryId)
    }
}
  