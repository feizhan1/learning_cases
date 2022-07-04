// let router = null

function findComponentByPath(routes, path) {
  let result = null
  let recursion = (routes, path) => {
    for (let index = 0; index < routes.length; index++) {
      const item = routes[index]
      if (item.path === path) {
        result = item
        break
      }
      if (item.children && item.children.length > 0) {
        recursion(item.children, path)
      }
    }
  }
  recursion(routes, path)
  return result
}

function newRoutes(routes) {
  let result = []
  let recursion = (routes, result) => {
    let routeIndex = 0
    for (let index = 0; index < routes.length; index++) {
      const item = routes[index]
      const obj = {
        path: item.path,
        component: item.component,
        name: item.name,
        meta: item.meta
      }
      if (!obj.component()) {
        continue
      }
      result[routeIndex] = obj
      if (item.children && item.children.length > 0) {
        result[routeIndex].children = []
        recursion(item.children, result[routeIndex].children)
      }
      routeIndex++
    }
  }
  recursion(routes, result)
  return result
}

const routes = [
  {
    path: '/permission-manage',
    component: () => 1,
    redirect: '/permission-manage/permission',
    name: 'Permission-manage',
    meta: { title: '权限系统', icon: 'el-icon-folder-opened', roles: ['admin', 'editor'] },
    children: [
      {
        path: 'permission',
        component: () => 1,
        name: 'Permission',
        meta: { title: '权限管理', icon: 'el-icon-folder', roles: ['admin'] }
      },
      {
        path: 'role',
        component: () => null,
        name: 'Role',
        meta: { title: '角色管理', icon: 'el-icon-folder' },
        children: [
          {
            path: 'role_1',
            component: () => 1,
            name: 'Role_1',
            meta: { title: 'role_1', icon: 'el-icon-folder', roles: ['admin'] }
          },
          {
            path: 'role_2',
            component: () => null,
            name: 'Role_2',
            meta: { title: 'role_2', icon: 'el-icon-folder' }
          },
          {
            path: 'role_3',
            component: () => 3,
            name: 'Role_3',
            meta: { title: 'role_3', roles: ['admin'], icon: 'el-icon-folder' }
          }
        ]
      },
      {
        path: 'users',
        component: () => null,
        name: 'Users',
        meta: { title: '用户管理', roles: ['admin'], icon: 'el-icon-folder' }
      }
    ]
  }
]

let result = findComponentByPath(routes, 'role_2')
let result1 = newRoutes(routes)
console.log(result, '---findComponentByPath')
console.log(JSON.stringify(result1), '---newRoutes')