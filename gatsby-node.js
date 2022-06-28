exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
	createRedirect({
    fromPath: `/page-2`,
    toPath: `/using-typescript`,
    conditions: {
      language: [`zh`]
    }
  });
}
