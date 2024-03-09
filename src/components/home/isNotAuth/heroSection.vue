<template>
    <div class="hero_container">
        <div class="search_contaier background-green">
            <div class="search_bar">
                <div class="search_a_section custom_row">
                    <div class="search_first_section custom_row gap_12 w-30" @click="toggle">
                        <div class="custom_col position_section_icon">
                            <svg-icon type="mdi" :path="mdiAccount" size="28"></svg-icon>
                        </div>
                        <div class="custom_col position_section_content">
                            <span class="position_section_content_title">Pozisyon</span>
                            <span class="position_section_content_text">Aradığınız pozisyon veya şirket</span>
                        </div>
                    </div>
                    <Divider layout="vertical" />
                    <div class="search_second_section custom_row gap_12 w-30">
                        <div class="custom_col position_section_icon">
                            <svg-icon type="mdi" :path="mdiMapMarker" size="28"></svg-icon>
                        </div>
                        <div class="custom_col position_section_content">
                            <span class="position_section_content_title">Lokasyon</span>
                            <span class="position_section_content_text">Şehirler</span>
                        </div>
                    </div>
                    <Divider layout="vertical" />
                    <div class="search_third_section custom_row gap_12 w-30">
                        <div class="custom_col position_section_icon">
                            <svg-icon type="mdi" :path="mdiBriefcase" size="28"></svg-icon>
                        </div>
                        <div class="custom_col position_section_content">
                            <span class="position_section_content_title">İlan Tipi</span>
                            <span class="position_section_content_text">İlan Tip</span>
                        </div>
                    </div>
                </div>
                <div class="search_b_section">
                    <div class="search_icon">
                        <i class="pi pi-search" style="font-size: 1rem"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="img_container">
            <p class="img_p">
                Hoşgeldin! <br>
                Bizimle Parlak Bir Gelecek Kurun
            </p>
        </div>
    </div>
    <OverlayPanel ref="open">
        <div>
            pozisyon
        </div>
    </OverlayPanel>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
import { mdiMapMarker } from '@mdi/js';
import { mdiBriefcase } from '@mdi/js';
import { ref } from "vue";




const open = ref();
const toggle = (event: any) => {
    open.value.toggle(event);
}
</script>

<style scoped>
.hero_container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
}

.search_contaier {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 24px;
}

.search_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 70px;
    background: #FFFFFF;
    border-radius: 40px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 12px;
    transition: scale 0.3s ease;
}



.search_a_section {
    width: 100%;
    cursor: pointer;
    margin-left: 16px;
}

.w-30 {
    width: 30%;
}


@media (max-width: 1120px) {
    .search_bar {
        scale: 0.8;
    }

    .position_section_content_text {
        display: none;
    }
}

@media (max-width: 992px) {
    .search_bar {
        scale: 0.6;
    }
}

@media (max-width: 750px) {

    .position_section_content_title {
        display: none;
    }

    .position_section_content_text {
        display: none;
    }
}

.gap_12 {
    gap: 12px;
}


.search_icon {
    background: #1ABC9C;
    border-radius: 50%;
    color: #FFFFFF;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center
}

.position_section_content_title {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #1F262B;
}

.position_section_content_text {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #68696A;

}



.img_container {

    height: 70vh;
    background-image: url('../../../assets/hero-img.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img_p {
    font-family: Montserrat;
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFFFFF;
}

@media (max-width: 750px) {
    .img_container {
        height: 50vh;
    }

    .img_p {
        font-size: 24px;
        line-height: 36px;
    }

    .search_contaier {
        padding: 12px;
    }
}
</style>