import Home from './Home.vue'
import Portfolio from './components/portfolio/portfolio.vue'
import Stocks from './components/stocks/stocks'

export const routes = [
  {path: '/', component: Home},
  {path: '/portfolio', component: Portfolio},
  {path: '/stocks', component: Stocks}
]
