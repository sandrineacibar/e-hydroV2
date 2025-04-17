<template>
  <NavigationBar>
    <template #content>
      <v-container fluid class="bg-image">
        <!-- Notification Box with Custom Styles -->
        <div class="notification-box">
          <h2 class="notification-title">All Notifications</h2>

          <!-- Notification Items -->
          <div
            v-for="(notification, index) in notifications.slice(0, visibleNotifications)"
            :key="index"
            class="notification-item"
          >
            <img :src="notification.icon" alt="icon" class="notification-icon" />
            <div class="notification-content">
              <strong>{{ notification.title }}!</strong>
              <p>{{ notification.message }}</p>
            </div>
          </div>

          <!-- Load More Button -->
          <button @click="loadMoreNotifications" v-if="showLoadMore">
            Load More Notifications
          </button>
        </div>
      </v-container>
    </template>
  </NavigationBar>
</template>

<script>
import NavigationBar from '@/components/layout/NavigationBar.vue'

export default {
  name: 'Notification',
  components: {
    NavigationBar,
  },
  data() {
    return {
      notifications: [
        {
          title: 'Order Confirmed',
          message: 'Your order #12345 is confirmed. Expect delivery on March 31, 2025.',
          icon: require('@/assets/icons/order-confirmed.png'),
        },
        {
          title: 'Your Order is on the Way',
          message: 'Great news! Your water delivery is out for delivery. Stay hydrated!',
          icon: require('@/assets/icons/delivery.png'),
        },
        {
          title: 'Claim Your Discount Voucher',
          message:
            'Hi Regine, you have a 10% OFF voucher valid until March 30, 2025. Use it on your next order!',
          icon: require('@/assets/icons/voucher.png'),
        },
        {
          title: 'New Water Station Near You',
          message: 'We’ve partnered with a new clean & safe water refill station in your area!',
          icon: require('@/assets/icons/station.png'),
        },
        {
          title: 'Profile Updated',
          message: 'Your profile information was successfully saved.',
          icon: require('@/assets/icons/profile.png'),
        },
        {
          title: 'System Update',
          message: 'A new system update is available.',
          icon: require('@/assets/icons/update.png'),
        },
        {
          title: 'Event Reminder',
          message: 'Reminder: Event at 3 PM today.',
          icon: require('@/assets/icons/reminder.png'),
        },
        {
          title: 'Maintenance Scheduled',
          message: 'Scheduled maintenance will occur tomorrow at midnight.',
          icon: require('@/assets/icons/maintenance.png'),
        },
      ],
      visibleNotifications: 5,
      showLoadMore: true,
    }
  },
  methods: {
    loadMoreNotifications() {
      const remaining = this.notifications.length - this.visibleNotifications
      if (remaining > 0) {
        this.visibleNotifications += 5
      }
      if (this.visibleNotifications >= this.notifications.length) {
        this.showLoadMore = false
      }
    },
  },
}
</script>

<style scoped>
.bg-image {
  background-image: url('@/assets/img/bg-home-no-gallon.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
}

.notification-box {
  position: absolute;
  width: 1324px;
  height: 831px;
  left: 57px;
  top: 146px;
  background: #dee8ef;
  border-radius: 5px;
  padding: 30px;
  overflow-y: auto;
}

.notification-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.notification-icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
  object-fit: contain;
}

.notification-content {
  flex: 1;
  color: #000;
}

.notification-content p {
  margin: 5px 0 0;
}

button {
  background-color: #02adef;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0281b5;
}
</style>
