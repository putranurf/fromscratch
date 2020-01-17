import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QInput,
  QToggle,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator,
  Notify,
  QTable
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QToggle,
    QCard,
    QCardSection,
    QCardActions,
    QSeparator,
    QTable
  },
  directives: {
  },
  plugins: {
    Notify 
  }
})
