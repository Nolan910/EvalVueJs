export const rssService = {
    getAllFeeds() {
      const feeds = JSON.parse(localStorage.getItem('rssFeeds')) || []
      return feeds
    },
  
    addFeed(feed) {
      const feeds = this.getAllFeeds()
      feeds.push(feed)
      localStorage.setItem('rssFeeds', JSON.stringify(feeds))
    },
  
    deleteFeed(feedId) {
      let feeds = this.getAllFeeds()
      feeds = feeds.filter(feed => feed.id !== feedId)
      localStorage.setItem('rssFeeds', JSON.stringify(feeds))
    },
  
    updateFeed(updatedFeed) {
      const feeds = this.getAllFeeds()
      const index = feeds.findIndex(feed => feed.id === updatedFeed.id)
      if (index !== -1) {
        feeds[index] = updatedFeed
        localStorage.setItem('rssFeeds', JSON.stringify(feeds))
      }
    },
  
    saveNews(news) {
      let savedNews = JSON.parse(localStorage.getItem('savedNews')) || []
      if (!savedNews.some(item => item.id === news.id)) {
        savedNews.push(news)
        localStorage.setItem('savedNews', JSON.stringify(savedNews))
      }
    },
  
    getSavedNews() {
      return JSON.parse(localStorage.getItem('savedNews')) || []
    },
  
    deleteSavedNews(newsId) {
      let savedNews = this.getSavedNews()
      savedNews = savedNews.filter(news => news.id !== newsId)
      localStorage.setItem('savedNews', JSON.stringify(savedNews))
    }
  }
  