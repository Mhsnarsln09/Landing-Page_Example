<template>
  <header class="background-green">
    <headerLayout />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="background-green">
    <footerLayout />
  </footer>
  <Dialog v-model:visible="mobileNav.isOpen" modal position="right"
    :style="{ width: '30rem', height: '100%', maxHeight: '100%' }"
    :pt="{ root: 'mobile_nav_root', header: 'mobile_nav_header', content: 'mobile_nav_content' }">
    <div class="mobile_nav_container" style="position: relative;">
      <div class="mobile_nav_links custom_row">
        <div class="custom_col w-full align-items-center">
          <div class="mobile_nav_link custom_col justify-content-center">
            <p>İş İlanları</p>
          </div>
          <Divider :pt="{ root: 'mobile_nav_divider_root' }" />
          <div class="mobile_nav_link custom_col justify-content-center">
            <p> Markalarımız</p>
          </div>
        </div>
      </div>
      <div class="mobile_nav_action">
        <div class="action-btn">
          <Button label="Giriş Yap" outlined style="color: white; background-color: #1ABC9C;" />
          <Button label="Üye Ol" severity="contrast" :pt="{ root: 'register-btn' }" />
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import headerLayout from '@/layouts/header/header.vue';
import footerLayout from '@/layouts/footer/footer.vue';
import { ref } from 'vue';
import { useMobileNavStore } from '@/stores/moblieNav';
const mobileNav = useMobileNavStore()
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #F4F7FA;
}

header {
  position: sticky;
  top: 0;
  z-index: 99;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  z-index: 99;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #fff;  */
  z-index: 99;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  z-index: 99;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.background-green {
  background: linear-gradient(91.18deg, #1ABC9C 0.12%, #1ABC9C 51.05%, #1ABC9C 100%);

}

.custom_row {
  display: flex;
  flex-direction: row;
}

.custom_col {
  display: flex;
  flex-direction: column;
}

.mobile_nav_root {
  margin: 0 !important;
}

.mobile_nav_header {
  justify-content: end !important;
}

.mobile_nav_content {
  height: 100%;
  margin-top: -1px;
}

.mobile_nav_link {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  color: #1ABC9C;
}

.mobile_nav_action {
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  display: none;
}


@media(max-width:750px) {

  .mobile_nav_root {
    width: 100% !important;
  }

  .mobile_nav_action {
    display: block;
  }
}

.action-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 24px;
}
</style>
