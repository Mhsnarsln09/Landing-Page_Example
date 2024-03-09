<template>
    <div class="n_p_a">
        <div class="custom_col n_p_a_container">
            <div class="n_p_a_content">
                <div class="custom_col n_p_a_content_p">
                    <p class="n_p_a_content_p_title">Yeni Yayınlanan İlanlar</p>
                    <p class="n_p_a_content_p_text">Öne çıkan ilanlarımıza şimdi göz atın, hemen başvurmaya başlayın
                        ailemize katılın.</p>
                </div>
            </div>
            <div class="custom_row n_p_a_button">
                <Button class="outline-none" icon="pi pi-angle-left" severity="contrast" outlined
                    style="color: #7F828A;" @click="carouselPrev" />
                <Button icon="pi pi-angle-right" severity="contrast" outlined class="ml-2" style="color: #7F828A;"
                    @click="carouselNext" />
            </div>
            <div class="custom_row n_p_a_carousel mt-4">
                <Carousel :value="products" :numVisible="3" :numScroll="3" class="carousel" :showIndicators="false" :responsiveOptions="responsiveOptions"
                :pt="{root:'n_p_a_carousel_root',itemscontent:'n_p_a_carousel_itemscontent', item:'n_p_a_carousel_item'}">
                    <template #item="slotProps">
                        <Card
                            :pt="{ root: 'n_p_a_carousel_card', content: 'n_p_a_carousel_card_content', body: 'n_p_a_carousel_card_body' }">
                            <template #subtitle>
                                <div class="card_location custom_row align-items-center">
                                    <div class="custom_col card_location_icon">
                                        <svg-icon type="mdi" :path="mdiMapMarker" size="24"
                                            style="color: #7F828A;"></svg-icon>
                                    </div>
                                    <div class="custom_col card_location_text">
                                        İstanbul,Kartal
                                    </div>
                                </div>
                            </template>
                            <template #content>
                                <div class="card_content_row custom_row">
                                    <div class="card_content_col custom_col w-full">
                                        <div class="card_position custom_row">
                                            Satış Danışmanı - Tekirdağ Orion AVM
                                        </div>
                                        <div class="card_company custom_row mt-3">
                                            Cacharel
                                        </div>
                                        <div class="card_action custom_row mt-4 justify-content-between">
                                            <div class="card_action_right custom_row align-items-center gap-1">
                                                <div class="custom_col card_action_right_icon">
                                                    <img src="../../../assets/uis_calender.png" alt="">
                                                </div>
                                                <div class="custom_col card_action_right_text">
                                                    {{ slotProps.data }} Hafta Önce
                                                </div>
                                            </div>
                                            <div class="card_action_left">
                                                <Button label="Başvur" severity="contrast" text size="small"
                                                    :pt="{ root: 'card_action_left_button' }" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMapMarker } from '@mdi/js';
import { ref } from 'vue';

const products = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
const carouselNext = () => {
    let carouselNext = document.querySelector('.p-carousel-next') as any;
    carouselNext.click();
}

const carouselPrev = () => {
    let carouselPrev = document.querySelector('.p-carousel-prev') as any;
    carouselPrev.click();
}

const responsiveOptions = ref([
    {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
]);
</script>

<style scoped>
.n_p_a {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 510px;
    max-width: 1200px;
    transition: scale 0.3s ease;
}

.n_p_a_container {
    width: 100%;
    padding: 70px 0;
}

.n_p_a_content_p {
    align-items: center;
}

.n_p_a_button {
    justify-content: flex-end;
}

.n_p_a_content_p_title {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #222846;
    margin: 0;
}

.n_p_a_content_p_text {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #7F828A;
}


.carousel :deep(.p-carousel-next) {
    display: none;
}

.carousel :deep(.p-carousel-prev) {
    display: none;
}

@media(max-width: 1300px) {
    .n_p_a {
        scale: 0.9;
    }
}
@media(max-width: 992px) {
    .n_p_a {
        scale: 0.8;
    }
}

</style>

<style >
.n_p_a_carousel_card {
    width: 350px;
    height: 200px;
    cursor: pointer;
}
@media (max-width: 360px) {
    .n_p_a_carousel_card{
        width: 280px;
        height: auto;
    }
}
.n_p_a_carousel_card_body {
    padding: 1rem !important;
    width: 100% !important;
    height: 100% !important;
}

.n_p_a_carousel_card_content {
    padding: 0 !important;
    margin-top: 24px;
    width: 100% !important;
}

.card_location_text {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #7F828A;

}

.card_position {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #353535;
}

.card_company {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #1ABC9C;
}

.card_action_right_text {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #7F828A;
}

.card_action_left_button {
    background: #1ABC9C;
    color: white;
}

 .n_p_a_carousel_root {
    width: 100%;
}

.n_p_a_carousel_itemscontent{
    height: 275px!important;
} 

.n_p_a_carousel_item {
    display: flex;
    justify-content: center;
}
</style>