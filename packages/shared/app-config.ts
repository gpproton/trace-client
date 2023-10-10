export const appHeader = (baseURL: string = '/', title: string = 'Trace') => {
  return {
    baseURL,
    head: {
      titleTemplate: `'%s :: ${title}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' }
      ]
    }
  }
}
