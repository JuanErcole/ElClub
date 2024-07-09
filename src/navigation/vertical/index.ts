// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'ic:outline-home',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'home',
      icon: 'ic:outline-home',
    },
    {
      path: '/second-page',
      action: 'read',
      subject: 'acl-page',
      title: 'Shop',
      icon: 'tdesign:shop',
    },
  ]
}

export default navigation
