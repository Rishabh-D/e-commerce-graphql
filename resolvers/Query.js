
exports.Query = {
    hello: () => {
      return "World!"
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 12.5
    },
    isCool: () => {
      return true
    },
    products: (parent, args, context) => {
      const { products } = context
      return products
    },
    product: (parent, args, context) => {
      const { products } = context
      console.log(args)
      // const res = products.filter(product => product.id === args.id)
      // console.log(res)
      // if (!res) return null
      // return res[0]
      // filter functions returns an array always (blank array if nothing found) and blank array is truthy so if statement will fail

      const res = products.find(product => product.id === args.id)
      if (!res) return null
      return res
    },
    categories: (parent, args, context) => {
      const { categories } = context
      return categories
    },
    category: (parent, args, context) => {
      const { categories } = context
      return categories.find(catergory => catergory.id === args.id)
    }
  }