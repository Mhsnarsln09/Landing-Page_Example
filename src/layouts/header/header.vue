<template>
    <div class="navbar">
        <div class="logo">
          YOUR LOGO
        </div>
        <div class="links">
            <Button label="İş İlanları" severity="contrast" text :pt="{ root: 'link-btn' }" />
            <Button label="Markalarımız" severity="contrast" text :pt="{ root: 'link-btn' }" />
        </div>
        <div class="action-btn">
            <Button label="Giriş Yap" outlined style="color: white;" size="small" />
            <Button label="Üye Ol" severity="contrast" :pt="{ root: 'register-btn' }" size="small" />
        </div>
        <div class="responsive-btn">
            <Button label="☰" severity="contrast" text :pt="{ root: 'link-resp-btn' }" style="color: white;" @click="mobileNavClick"/>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { useMobileNavStore } from '@/stores/moblieNav';
const mobileNav = useMobileNavStore()

const mobileNavClick = () => {
   mobileNav.toggleMobileNav()
}

</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 60px;
    max-width: 1200px;


}

/* .logo img {
    transition: scale 0.3s ease;
} */

.logo {
    font-size: 24px;
    font-weight: 700;
    color: #fff;

}

.links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 24px;
}

.link-btn {
    color: #fff;
}

.link-resp-btn {
    color: #fff;
    font-size: 24px;
}



.responsive-btn {
    display: none;
}

.register-btn {
    color: #393E48;
    background: #fff;
    border: 1px solid #fff;
}

@media (max-width: 992px) {
    .links {
        display: none;
    }

    .responsive-btn {
        display: block;
    }
}

@media (max-width: 750px) {

    .links,
    .action-btn {
        display: none;
    }

    .responsive-btn {
        display: block;
    }

    /* .logo img {
        scale: 0.8;
    } */
}
</style>