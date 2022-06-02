<template>
  <main>
    <div class="sidebar">
      <div class="sidebar-inner">
        <div class="sidebar-header">
          <h3>Dashboard</h3>
        </div>
        <div class="sidebar-body">
          <ul class="sidebar-nav">
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <dashboard-icon />
                <span>Dashboard</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <ProfileIcon />
                <span>Profile</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <ServicesIcon />
                <span>Services</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <MedicalRecordsIcon />
                <span>Medical Records</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <CareWalletIcon />
                <span>Care Wallet</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <MessagesIcon />
                <span>Messages</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <ResourcesIcon />
                <span>Resources</span>
              </nuxt-link>
            </li>
            <hr class="border w-100" />
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <AccountSettingIcon />
                <span>Account Settings</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <ContactSupportIcon />
                <span>Contact Support</span>
              </nuxt-link>
            </li>
            <li class="sidebar-nav-item">
              <nuxt-link to="#" class="sidebar-nav-link">
                <LogoutIcon />
                <span>Logout</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="close-btn">
          <button class="btn btn-primary" @click="toggleSidebar">
            <b-icon icon="x-lg"></b-icon>
          </button>
        </div>
        <button @click.prevent="login" class="mt-5 btn">click</button>
      </div>
    </div>
    <div class="main-section">
      <div class="top-nav">
        <b-navbar toggleable="lg" fixed="top" variant="light">
          <button class="btn btn-white toggle-btn" @click="toggleSidebar">
            <b-icon icon="arrow-right-square" variant="primary"></b-icon>
          </button>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto align-items-center">
              <b-nav-item href="#" class="text-primary">Take a tour</b-nav-item>
              <b-nav-item href="#">
                <Notification />
              </b-nav-item>
              <b-nav-item href="#">
                <Bell />
              </b-nav-item>
              <b-nav-item href="#">
                <User />
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="content-section">
        <nuxt />
      </div>
    </div>
  </main>
</template>

<script>
import gql from 'graphql-tag'
export default {
  methods: {
    toggleSidebar() {
      console.log('toggle sidebar')
      document.body.classList.toggle('sidebar-open')
    },
    async login() {
      try {
        await this.$apollo.mutate({
            mutation: gql` mutation login ($email: String!, $password: String!) {
                login(email: $email, password: $password)
              }
            `,
            variables: {
              email: 'tester@kompletecare.com',
              password: 'password',
            },
          })
          .then((res) => {
            console.log(res)
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
body {
  background: #f5f5fb;
}
main {
  display: flex;
  position: relative;
}

.sidebar {
  width: 250px;
  min-height: 100vh;
  padding: 20px 0;
  background: #fff;
  position: fixed;
}

.sidebar-inner {
  position: relative;
}

.sidebar-inner .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.toggle-btn {
  display: none;
}

.sidebar-open .sidebar {
  display: block;
}

.main-section {
  min-height: 100vh;
  position: relative;
}

.main-section {
  width: calc(100% - 250px);
  padding: 0 20px;
  margin-left: 250px;
}

.main-section nav {
  width: calc(100% - 250px);
  margin-left: 250px;
  padding: 15px 30px;
}

.sidebar-header {
  padding: 20px;
}

.sidebar-nav-item {
  list-style: none;
  display: block;
}

.sidebar-nav-item:hover {
  background: #2a36a4;
}

.sidebar-nav-item:hover a {
  color: #fff;
}

.sidebar-nav-item a {
  text-decoration: none;
  padding: 10px;
  color: #a0a0a0;
  display: block;
}

.sidebar-nav-item span {
  margin-left: 10px;
}

.sidebar ul {
  padding-left: 0;
}

.text-primary {
  color: #382f90 !important;
}

.btn-primary {
  background: #382f90 !important;
}

.text-mild {
  color: #9fa2b4;
}

.main-section .content-section {
  padding-top: 100px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .toggle-btn {
    display: block;
  }

  .main-section,
  .main-section nav {
    width: 100%;
    margin-left: 0;
  }

  .sidebar-open .sidebar {
    z-index: 1500;
  }

  .sidebar-inner .close-btn,
  .toggle-btn {
    display: block;
  }
}

@media (max-width: 425px) {
  .main-section,
  .main-section nav {
    width: 100%;
    margin-left: 0;
  }

  .sidebar-open .sidebar {
    z-index: 1500;
  }

  .sidebar-inner .close-btn,
  .toggle-btn {
    display: block;
  }
}
</style>