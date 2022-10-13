exports.Category = {
    products: (parent, args, context) => {
      const {products} = context
      const categoryId = parent.id
      console.log(categoryId)
      return products.filter(product => product.categoryId == categoryId)
    }
  }
  