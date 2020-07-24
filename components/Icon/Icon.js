import React from 'react'

import { ReactComponent as Burger } from './burger.svg'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as GooglePlay } from './google-play.svg'
import { ReactComponent as AppStore } from './app-store.svg'
import { ReactComponent as Download } from './download.svg'
import { ReactComponent as Globe } from './globe.svg'
import { ReactComponent as Graphic } from './graphic.svg'
import { ReactComponent as Guide } from './guide.svg'
import { ReactComponent as Decentralized } from './decentralized.svg'
import { ReactComponent as NonCostodial } from './non-costodial.svg'
import { ReactComponent as OpenSource } from './open-source.svg'
import { ReactComponent as Rect } from './rect.svg'
import { ReactComponent as Anonym } from './anonym.svg'
import { ReactComponent as Tor } from './tor.svg'
import { ReactComponent as Sort } from './sort.svg'
import { ReactComponent as Arrow } from './arrow.svg'

const iconComponent = name => {
  switch (name) {
    case 'menu':
      return <Burger />
    case 'menu-close':
      return <Close />
    case 'arrow':
      return <Arrow />

    //  Buttons
    case 'google-play':
      return <GooglePlay />
    case 'app-store':
      return <AppStore />
    case 'download':
      return <Download />

    //  Pages
    case 'globe':
      return <Globe />
    case 'graphic':
      return <Graphic />
    case 'guide':
      return <Guide />
    case 'decentralized':
      return <Decentralized />
    case 'non-costodial':
      return <NonCostodial />
    case 'open-source':
      return <OpenSource />
    case 'anonym':
      return <Anonym />
    case 'tor':
      return <Tor />
    case 'sort':
      return <Sort />

    //  Wallet
    case 'rect':
      return <Rect />

    default:
      return null
  }
}

function Icon({ name }) {
  return iconComponent(name)
}

export default Icon