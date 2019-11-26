export default {
    routes: [
      {
        path : "/register",
        name : "register",
        component : resolve => require(['modules/basic/register.vue'], resolve)
        
      },

      {
        path : "/login",
        name : "login",
        component : resolve => require(['modules/basic/login.vue'], resolve)
      },

      {
        path : "/dashboard",
        name : "dashboard",
        component : resolve => require(['modules/basic/dashboard.vue'], resolve),

        meta: {
          token: true
        }
      },

      {
        path : "/profile",
        name : "profile",
        component : resolve => require(['modules/basic/profile.vue'], resolve),
        meta: {
          token: true
        }

      },

      {
        path : "/serviceProviderCard",
        name : "serviceProviderCard",
        component : resolve => require(['modules/basic/serviceProviderCard.vue'], resolve),
        meta: {
          token: true
        }
        
      }
    ]
  }
  